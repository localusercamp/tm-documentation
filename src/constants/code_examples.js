const FORM_RQUEST_CODE =
`namespace App\\Http\\Requests\\Product;

use Illuminate\\Foundation\\Http\\FormRequest;

use App\\Models\\Product;

class CreateProductRequest extends FormRequest
{
  public function authorize() : bool
  {
    return auth()->user()->can('create', Product::class);
  }

  public function rules() : array
  {
    return [
      'title'       => 'required|string|min:2|max:30',
      'price'       => 'required|integer|min:0|max:100000',
      'tags'        => 'required|array',
      'description' => 'nullable|string|min:2|max:30',
    ];
  }
}`;

const CONTROLLER_CODE =
`namespace App\\Http\\Controllers\\App;

use Illuminate\\Http\\JsonResponse;

use App\\Http\\Controllers\\Controller;

use App\\Actions\\Product\\CreateProductAction;

use App\\Http\\Requests\\Product\\CreateProductRequest;

class ProductController extends Controller
{
  public function create(CreateProductRequest $request) : JsonResponse
  {
    $input  = $request->validated();
    $title       = $input['title'];
    $description = $input['description'];
    $price       = $input['price'];
    $tags        = $input['tags'];

    $output = CreateProductAction::run($title, $description, $price, $tags);
    return response()->json($output, 200);
  }
}`;

const ACTION_CODE =
`namespace App\\Actions\\Auth;

use App\\Actions\\Action;
use App\\Tasks\\{
  AuthorizeUserTask,
  ConstructJwtTask,
  GetCurrentUserTask,
};

class SigninAction extends Action
{
  public static function run(string $phone, string $password) : array
  {
    $token = AuthorizeUserTask::run($phone, $password);
    $jwt   = ConstructJwtTask::run($token);

    $user  = GetCurrentUserTask::run();

    return compact('jwt', 'user');
  }
}`;

const TASK_CODE =
`namespace App\\Tasks;

use App\\Entities\\SMSManager;

use App\\Exceptions\\SMS\\{
  NotFoundException,
  CodeComparisonFailedException,
};

class VerifySMSCodeTask extends Task
{
  public static function run(string $phone, string $code) : void
  {
    $SMSManager = new SMSManager();
    $sms = $SMSManager->getSMS($phone);

    if (!$sms) {
      throw new NotFoundException();
    }
    if (!$sms->verifyCode($code)) {
      throw new CodeComparisonFailedException();
    }
  }
}`;

const MODEL_CODE =
`namespace App\\Models;

use App\\Collections\\ProductCollection;

class Product extends Model
{
  protected $table = 'product';

  protected $fillable = [
    'title',
    'description',
    'price',
  ];

  public function newCollection(array $models = []) : ProductCollection
  {
    return new ProductCollection($models);
  }
}`;

const ENTITY_CODE =
`namespace App\\Entities;

use App\\Exceptions\\SMS\\ValidationFailedException;
use Illuminate\\Support\\Facades\\Hash;

class SMS
{
  public string $phone;
  public string $message;
  public ?string $code;
  public int $repeat;

  function __construct(string $phone, string $message, ?string $code = null)
  {
    $this->phone   = $phone;
    $this->message = $message;
    $this->code    = $code;
    $this->repeat  = 0;
  }

  function __serialize()
  {
    return [
      'phone'   => $this->phone,
      'code'    => bcrypt($this->code),
      'repeat'  => $this->repeat,
    ];
  }

  function __unserialize(array $data)
  {
    $this->phone  = $data['phone'];
    $this->code   = $data['code'];
    $this->repeat = $data['repeat'];
  }

  function __get($property) {
    if (property_exists($this, $property)) {
      return $this->$property;
    }
    else if ($property === 'full_phone') {
      return '7' . $this->phone;
    }
  }

  public function validate(string ...$fields)
  {
    foreach ($fields as $field) {
      if (!$this->{$field})
        throw new ValidationFailedException();
    }
  }

  public function verifyCode(string $code) : bool
  {
    $this->validate('code');
    return Hash::check($code, $this->code);
  }
}`;

const EXCEPTION_CODE =
`namespace App\\Exceptions;

use Exception;

class BuisnesLogicException extends Exception
{
  public function report()
  {

  }

  public function render()
  {
    return response()->json($this->message, 422);
  }
}`;

const MAIN_COLLECTION_CODE =
`#provided by kotomkin

namespace App\\Collections;

use Illuminate\\Database\\Eloquent\\{
  Collection as EloquentCollection,
  Builder as EloquentBuilder,
};

use Illuminate\\Support\\Facades\\DB;

use Illuminate\\Database\\Query\\JoinClause;

use App\\Models\\{
  Chat,
  ChatMessage,
};

class ChatCollection extends EloquentCollection
{
  public function loadUnreadMessagesCount(int $user_id): self
  {
    $chat_id_list = $this->modelKeys();

    $unread_messages_map = ChatMessage::query()
      ->whereIn('chat_message.chat_id', $chat_id_list)
      ->leftJoin('chat_visit', function(JoinClause $join) use($user_id): void {
        $join->on(  'chat_message.chat_id', '=', 'chat_visit.chat_id')
          ->where('chat_visit.author_id', $user_id);
      })
      ->where(function(EloquentBuilder $query): void {
        $query->whereNull('chat_visit.last_visited_at')
          ->orWhereColumn('chat_message.created_at', '>', 'chat_visit.last_visited_at');
      })
      ->groupBy('chat_message.chat_id')
      ->get(['chat_message.chat_id', DB::raw('COUNT(*) as unread_messages_count')])
      ->keyBy('chat_id');
      return $this->each(function(Chat $chat) use($unread_messages_map): void {
        $chat->unread_messages_count = $unread_messages_map->get($chat->id)->unread_messages_count ?? 0;
      });
  }
}`;

const EXAMPLE_COLLECTION_CODE =
`$user_id = auth()->id();
$chats   = Chat::get();

$chats->loadUnreadMessagesCount($user_id);
`;

const HELPERS_CODE =
`/**
* Проверяет может ли массив быть передан в \`sync()\`
*
* @param array $array Массив для проверки
*/
function is_syncable(array $array) : bool
{
 foreach ($array as $item) {
   if (!is_int($item)) return false;
 }
 return true;
}

/**
* Генерирует \`$n\`-значный рандомный код
*
* @param int $n Число знаков в коде
*/
function codegen(int $n, string $alloc = null) : string
{
 return $n ? codegen(--$n, $alloc .= rand(0,9)) : $alloc;
}
`;

export {
  FORM_RQUEST_CODE,
  CONTROLLER_CODE,
  ACTION_CODE,
  TASK_CODE,
  MODEL_CODE,
  ENTITY_CODE,
  EXCEPTION_CODE,
  MAIN_COLLECTION_CODE,
  EXAMPLE_COLLECTION_CODE,
  HELPERS_CODE,
}
