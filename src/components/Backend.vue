<template>
  <div>
    <splitpanes class="default-theme">
      <pane min-size="30" size="65" class="scheme-pane">
        <div v-dragscroll="true" class="svg-container">
          <svg :width="1400" :height="1000" viewBox="0 0 1400 1000" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="grey">

            <g transform="translate(0,100)">
              <EntityBlock @clicked="setTab(tabs.FormRequest)" :x="100" :y="100" :shape.sync="FormRequest" stroke="crimson">FormRequest</EntityBlock>
              <EntityBlock @clicked="setTab(tabs.Controller)" :x="400" :y="100" :shape.sync="Controller" stroke="darkseagreen">Controller</EntityBlock>
              <EntityBlock @clicked="setTab(tabs.Action)" :x="650" :y="100" :shape.sync="Action" stroke="cornflowerblue">Action</EntityBlock>
              <EntityBlock @clicked="setTab(tabs.Task)" :x="940" :y="100" :shape.sync="Task" stroke="mediumpurple">Task</EntityBlock>
              <EntityBlock @clicked="setTab(tabs.Model)" :x="1100" :y="100" :shape.sync="Model" stroke="tomato">Model</EntityBlock>
              <EntityBlock @clicked="setTab(tabs.Entity)" :x="1030" :y="200" :shape.sync="Entity" stroke="slateblue">Entity</EntityBlock>
              <EntityBlock @clicked="setTab(tabs.Exception)" :x="1000" :y="300" :shape.sync="Exception" stroke="orange">Exception</EntityBlock>
              <EntityBlock @clicked="setTab(tabs.Helpers)" :x="1020" :y="400" :shape.sync="Helpers" stroke="skyblue">Helpers</EntityBlock>
              <EntityBlock @clicked="setTab(tabs.Collection)" :x="1000" :y="500" :shape.sync="Collection" stroke="orchid">Collection</EntityBlock>

              <EntityBlock @clicked="setTab(tabs.Contract)" :x="400" :y="250" :shape.sync="Contract" stroke="silver">Contract</EntityBlock>
              <EntityBlock @clicked="setTab(tabs.Interface)" :x="650" :y="250" :shape.sync="Interface" stroke="tan">Interface</EntityBlock>


              <g v-if="computed">
                <Arrow :x1="100 + FormRequest.width" :y1="130" :x2="FormRequest.width + 138" :y2="130"/>

                <Arrow :x1="400 + Controller.width" :y1="130" :x2="Controller.width + 440"  :y2="130"/>


                <Arrow nomarker :x1="650 + Action.width/2" :y1="100" :x2="650 + Action.width/2" :y2="50"/>
                <Arrow nomarker :x1="650 + Action.width/2" :y1="50" :x2="1100 + Model.width/2" :y2="50"/>
                <Arrow :x1="940 + Task.width/2" :y1="50" :x2="940 + Task.width/2" :y2="80"/>
                <Arrow :x1="1100 + Model.width/2" :y1="50" :x2="1100 + Model.width/2" :y2="80"/>

                <Arrow :x1="940 + Task.width" :y1="130" :x2="980 + Task.width" :y2="130"/>

                <Arrow :x1="900" :y1="230" :x2="1010" :y2="230"/>
                <Arrow :x1="900" :y1="330" :x2="980" :y2="330"/>
                <Arrow :x1="900" :y1="430" :x2="1000" :y2="430"/>
                <Arrow :x1="900" :y1="530" :x2="980" :y2="530"/>
                <Arrow nomarker :x1="900" :y1="530" :x2="900" :y2="130"/>
                <Arrow nomarker :x1="900" :y1="130" :x2="940" :y2="130"/>

                <Arrow :x1="1140 + Model.width" :y1="230" :x2="1045 + Model.width" :y2="230"/>
                <Arrow :x1="1140 + Model.width" :y1="330" :x2="1075+ Model.width" :y2="330"/>
                <Arrow :x1="1140 + Model.width" :y1="430" :x2="1060+ Model.width" :y2="430"/>
                <Arrow :x1="1140 + Model.width" :y1="530" :x2="1080+ Model.width" :y2="530"/>
                <Arrow nomarker :x1="1140 + Model.width" :y1="530" :x2="1140 + Model.width" :y2="130"/>
                <Arrow nomarker :x1="1140 + Model.width" :y1="130" :x2="1140 + Model.width" :y2="130"/>

                <Arrow nomarker :x1="1140 + Model.width" :y1="130" :x2="1100 + Model.width" :y2="130"/>
              </g>

            </g>

          </svg>
        </div>
      </pane>

      <pane min-size="30" size="35" class="content-pane">
        <div class="content">
          <section v-if="current_tab === tabs.FormRequest" class="section">
            <div class="heading">
              FormRequest
            </div>

            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Описание</div>
              </template>
              <div class="ru">
                Request является воплощением запроса от пользователя к серверу.
                <br>
                <br>
                <b>Правила:</b>
                <ul>
                  <li><b>Должен</b> содержать валидацию данных, поступающих в контроллер.</li>
                  <li><b>Может</b> содержать проверку правовых политик.</li>
                  <li><b>Только</b> Request может валидировать входные данные.</li>
                  <li>Request <b>не может</b> использовать другой Request.</li>
                  <li>Request <b>не может</b> реализовывать Contract.</li>
                </ul>
              </div>
            </Spoiler>

            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Пример кода</div>
              </template>
              <div>
                <highlightjs language="php" :code="code.FormRequest" />
              </div>
            </Spoiler>

          </section>

          <section v-if="current_tab === tabs.Controller" class="section">
            <div class="heading">
              Controller
            </div>

            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Описание</div>
              </template>
              <div class="ru">
                Controller отделяет бизнес логику от валидации данных и манипуляций с запросами.
                <br>
                <br>
                <b>Правила:</b>
                <ul>
                  <li>Controller <b>обязан</b> использовать кастомный Request для каждого своего метода.</li>
                  <li>
                    Controller <b>должен</b> уметь:
                    <ul>
                      <li>получить <b>отвалидированные</b> данные из Request</li>
                      <li>передать эти данные в Action</li>
                      <li>получить ответ от Action</li>
                      <li>составить и вернуть ответ</li>
                    </ul>
                  </li>
                  <li>Controller <b>не может использовать какие-либо</b> сущности.</li>
                  <li><b>Каждый</b> метод контроллера может вызывать <b>только один</b> Action.</li>
                </ul>
              </div>
            </Spoiler>

            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Пример кода</div>
              </template>
              <div>
                <highlightjs language="php" :code="code.Controller" />
              </div>
            </Spoiler>
          </section>

          <section v-if="current_tab === tabs.Action" class="section">
            <div class="heading">
              Action
            </div>

            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Описание</div>
              </template>
              <div class="ru">
                Action - это точка входа в бизнес логику приложения. Action представляет собой действие в приложении и по совокупности этих действий можно определить, что делает приложение.
                <br>
                <br>
                <b>Правила:</b>
                <ul>
                  <li>Action <b>состоит только из одного публичного статического метода</b> run().</li>
                  <li>Action <b>не может</b> поднимать вверх по схеме сущности, которыми может пользоваться.</li>
                  <li>
                    Action <b>может</b> использовать сколько угодно:
                    <ul>
                      <li>Task</li>
                      <li>Exception</li>
                      <li>Collection</li>
                      <li>Entity</li>
                      <li>Helpers</li>
                      <li>Model</li>
                    </ul>
                  <li>Action <b>не может</b> использовать другой Action.</li>
                  <li>Action <b>не может</b> реализовывать Contract.</li>
                </ul>
              </div>
            </Spoiler>

            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Пример кода</div>
              </template>
              <div>
                <highlightjs language="php" :code="code.Action" />
              </div>
            </Spoiler>

          </section>

          <section v-if="current_tab === tabs.Task" class="section">
            <div class="heading">
              Task
            </div>

            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Описание</div>
              </template>
              <div class="ru">
                Task - сущность, инкапсулирующая выполнение определенной задачи.
                <br>
                <br>
                <b>Правила:</b>
                <ul>
                  <li>Cостоит <b>только из одного публичного статического метода</b> run()</li>
                  <li>
                    Task <b>может</b> использовать сколько угодно:
                    <ul>
                      <li>Exception</li>
                      <li>Collection</li>
                      <li>Helpers</li>
                      <li>Model</li>
                    </ul>
                  </li>
                  <li>Task <b>не может</b> использовать другой Task.</li>
                  <li>Task <b>не может</b> реализовывать Contract.</li>
                </ul>
              </div>
            </Spoiler>

            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Пример кода</div>
              </template>
              <div>
                <highlightjs language="php" :code="code.Task" />
              </div>
            </Spoiler>

          </section>

          <section v-if="current_tab === tabs.Model" class="section">
            <div class="heading">
              Model
            </div>

            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Описание</div>
              </template>
              <div class="ru">
                Model - модель Laravel.
                <br>
                <br>
                <b>Правила:</b>
                <ul>
                  <li>Model <b>может</b> использовать свой Collection.</li>
                  <li>Model <b>может</b> реализовывать Contract.</li>
                  <li>Model <b>может</b> использовать другую Model.</li>
                  <li>Model <b>может</b> использовать трейты для шэринга скоупами.</li>
                </ul>
              </div>
            </Spoiler>

            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Пример кода</div>
              </template>
              <div>
                <highlightjs language="php" :code="code.Model" />
              </div>
            </Spoiler>

          </section>

          <section v-if="current_tab === tabs.Entity" class="section">
            <div class="heading">
              Entity
            </div>

            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Описание</div>
              </template>
              <div class="ru">
                Entity - сущность, которая реализует конкретную задачу с использованием преимуществ ООП (сохранение состояния, наследование, инкапсуляция и т.д.), но при этом не нуждается в использовании EloquentBuilder как Model.
                <br>
                <br>
                  Большая задача может решаться целым namespace'ом, состоящим из Entity разного назначения: классы, классы-мэнеджеры, абстрактные классы, контракты.
                <br>
                <br>
                <b>Правила:</b>
                <ul>
                  <li>
                    Entity <b>может</b> использовать сколько угодно:
                    <ul>
                      <li>Task</li>
                      <li>Exception</li>
                      <li>Collection</li>
                      <li>Entity</li>
                      <li>Helpers</li>
                      <li>Model</li>
                    </ul>
                  </li>
                  <li>Entity <b>может</b> реализовывать Contract.</li>
                </ul>
              </div>
            </Spoiler>

            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Пример кода</div>
              </template>
              <div>
                <highlightjs language="php" :code="code.Entity" />
              </div>
            </Spoiler>

          </section>

          <section v-if="current_tab === tabs.Exception" class="section">
            <div class="heading">
              Exception
            </div>

            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Описание</div>
              </template>
              <div class="ru">
                Exception - исключение, выбрасываемое в случае ошибки.
                <br>
                <br>
                <b>Правила:</b>
                <ul>
                  <li>Exception <b>не может</b> использовать сущности.</li>
                </ul>
              </div>
            </Spoiler>




            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Пример кода</div>
              </template>
              <div>
                <highlightjs language="php" :code="code.Exception" />
              </div>
            </Spoiler>

          </section>

          <section v-if="current_tab === tabs.Collection" class="section">
            <div class="heading">
              Collection
            </div>

            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Описание</div>
              </template>
              <div class="ru">
                Collection инкапсулирует чейнинг EloquentCollection для конкретной модели.
                <br>
                <br>
                <b>Правила:</b>
                <ul>
                  <li>Collection <b>может</b> использовать Model.</li>
                  <li>Collection <b>может</b> использовать Entity.</li>
                  <li>Collection <b>может</b> использовать другую Collection.</li>
                  <li>Collection <b>может</b> реализовывать Contract.</li>
                  <li>Collection <b>не может</b> использовать остальные сущности.</li>
                </ul>
              </div>
            </Spoiler>

            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Пример кода</div>
              </template>
              <div>
                <highlightjs language="php" :code="code.Collection.main" />
                <highlightjs language="php" :code="code.Collection.example" />
              </div>
            </Spoiler>

          </section>

          <section v-if="current_tab === tabs.Helpers" class="section">
            <div class="heading">
              Helpers
            </div>

            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Описание</div>
              </template>
              <div class="ru">
                Helpers - глобальные функции-хэлперы.
                <br>
                <br>
              </div>
            </Spoiler>

            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Пример кода</div>
              </template>
              <div>
                <highlightjs language="php" :code="code.Helpers" />
              </div>
            </Spoiler>

          </section>

          <section v-if="current_tab === tabs.Contract" class="section">
            <div class="heading">
              Contract
            </div>

            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Описание</div>
              </template>
              <div class="ru">
                Contract - абстрактный класс, предоставляющий базовую реализацию какого-либо функционала.
                <br>
                <br>
              </div>
            </Spoiler>

            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Пример кода</div>
              </template>
              <div>
                <highlightjs language="php" :code="code.Contract" />
              </div>
            </Spoiler>

          </section>

          <section v-if="current_tab === tabs.Interface" class="section">
            <div class="heading">
              Interface
            </div>

            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Описание</div>
              </template>
              <div class="ru">
                Interface - интерфейс. Описывает то, как себя обязаны вести наследующие его сущности.
                <br>
                <br>
              </div>
            </Spoiler>

            <Spoiler>
              <template v-slot:heading>
                <div class="subheading ru clickable">Пример кода</div>
              </template>
              <div>
                <highlightjs language="php" :code="code.Interface" />
              </div>
            </Spoiler>

          </section>
        </div>
      </pane>
    </splitpanes>
  </div>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes';
import { dragscroll } from 'vue-dragscroll';
import EntityBlock from './EntityBlock';
import Arrow from './Arrow';
import Spoiler from './Spoiler';
import {
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
  CONTRACT_CODE,
  INTERFACE_CODE,
} from '../constants/code_examples'
import 'splitpanes/dist/splitpanes.css';
import 'highlight.js/styles/tomorrow-night.css';

export default {
  name: 'Scheme',

  components: {
    Splitpanes,
    Pane,
    EntityBlock,
    Arrow,
    Spoiler,
  },

  directives: {
    dragscroll
  },

  data () {
    return {
      FormRequest: null,
      Controller: null,
      Action: null,
      Task: null,
      Model: null,
      Entity: null,
      Exception: null,
      Helpers: null,
      Collection: null,
      Contract: null,
      Interface: null,

      tabs: {
        FormRequest: 1,
        Controller: 2,
        Action: 3,
        Task: 4,
        Model: 5,
        Entity: 6,
        Exception: 7,
        Helpers: 8,
        Collection: 9,
        Contract: 10,
        Interface: 11,
      },
      current_tab: 1,

      code: {
        FormRequest: FORM_RQUEST_CODE,
        Controller: CONTROLLER_CODE,
        Action: ACTION_CODE,
        Task: TASK_CODE,
        Model: MODEL_CODE,
        Entity: ENTITY_CODE,
        Exception: EXCEPTION_CODE,
        Collection: {
          main: MAIN_COLLECTION_CODE,
          example: EXAMPLE_COLLECTION_CODE,
        },
        Helpers: HELPERS_CODE,
        Contract: CONTRACT_CODE,
        Interface: INTERFACE_CODE,
      },
      codeinit: false,
    }
  },

  computed: {
    computed() {
      return !!this.FormRequest &&
             !!this.Controller &&
             !!this.Action &&
             !!this.Task &&
             !!this.Model &&
             !!this.Entity &&
             !!this.Exception &&
             !!this.Helpers &&
             !!this.Collection
    },
  },

  methods: {
    getCode() {
      this.codeinit = true;
    },
    setTab(tab) {
      this.current_tab = tab;
    },
  },

  mounted() {
    this.getCode()
  }
}
</script>
