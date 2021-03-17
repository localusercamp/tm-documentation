<template>
  <div>
    <splitpanes class="default-theme">
      <pane min-size="30" size="45" class="content-pane">
        <div class="content">
          <section class="section">
            <Spoiler tab>
              <template v-slot:heading>
                <div class="subheading ru clickable">Команды поставляемые пакетом <code><a href="https://github.com/localusercamp/tm-commands">thread-media/commands</a></code></div>
              </template>
              <template>
                <div class="ru extnd">
                  Установка пакета: <code class="cd-inline">composer require thread-media/commands</code>
                  <br><br>
                </div>
                <Spoiler hide tab>
                  <template v-slot:heading>
                    <div class="subheading ru clickable">make:action</div>
                  </template>
                  <div class="ru extnd">
                    Создает новый Action <br><br>
                    <code>
                      <div class="cd"><sy>php artisan make:</sy><cs>action</cs> <pr>CustomAction</pr></div>
                      <br>
                      <div class="cd"><pr>CustomAction</pr> - Название класса (поддерживает указание <sy>namespace</sy>)</div>
                    </code>
                    <br><br>
                  </div>
                </Spoiler>

                <Spoiler hide tab>
                  <template v-slot:heading>
                    <div class="subheading ru clickable">make:task</div>
                  </template>
                  <div class="ru extnd">
                    Создает новый Task <br><br>
                    <code>
                      <div class="cd"><sy>php artisan make:</sy><cs>task</cs> <pr>CustomTask</pr></div>
                      <br>
                      <div class="cd"><pr>CustomTask</pr> - Название класса (поддерживает указание <sy>namespace</sy>)</div>
                    </code>
                    <br><br>
                  </div>
                </Spoiler>

                <Spoiler hide tab>
                  <template v-slot:heading>
                    <div class="subheading ru clickable">make:entity</div>
                  </template>
                  <div class="ru extnd">
                    Создает новую сущность Entity <br><br>
                    <code>
                      <div class="cd"><sy>php artisan make:</sy><cs>entity</cs> <pr>Entity</pr></div>
                      <br>
                      <div class="cd"><pr>Entity</pr> - Название класса (поддерживает указание <sy>namespace</sy>)</div>
                    </code>
                    <br><br>
                  </div>
                </Spoiler>

                <Spoiler hide tab>
                  <template v-slot:heading>
                    <div class="subheading ru clickable">make:contract</div>
                  </template>
                  <div class="ru extnd">
                    Создает новый Contract <br><br>
                    <code>
                      <div class="cd"><sy>php artisan make:</sy><cs>contract</cs> <pr>Contract</pr></div>
                      <br>
                      <div class="cd"><pr>Contract</pr> - Название класса (поддерживает указание <sy>namespace</sy>)</div>
                    </code>
                    <br><br>
                  </div>
                </Spoiler>

                <Spoiler hide tab>
                  <template v-slot:heading>
                    <div class="subheading ru clickable">make:interface</div>
                  </template>
                  <div class="ru extnd">
                    Создает новый Interface <br><br>
                    <code>
                      <div class="cd"><sy>php artisan make:</sy><cs>interface</cs> <pr>Interface</pr></div>
                      <br>
                      <div class="cd"><pr>Interface</pr> - Название интерфейса (поддерживает указание <sy>namespace</sy>)</div>
                    </code>
                    <br><br>
                  </div>
                </Spoiler>

                <Spoiler hide tab>
                  <template v-slot:heading>
                    <div class="subheading ru clickable">make:collection</div>
                  </template>
                  <div class="ru extnd">
                    Создает новую Collection <br><br>
                    <code>
                      <div class="cd">
                        <sy>php artisan make:</sy><cs>collection</cs> <pr>CustomCollection</pr> <pr>-m Model</pr>
                      </div>
                      <br>
                      <div class="cd">
                        <pr>CustomCollection</pr> - Название класса (поддерживает указание <sy>namespace</sy>)
                      </div>
                      <br>
                      <div class="cd">
                        <pr>-m Model</pr> - Имя модели в папке Models (опционально)
                        <br>
                        <hr class="nice-hr">
                        Если указан, то в существующей модели будет создана функция для возвращения CustomCollection при вызове EloquentBuilder::get()
                      </div>
                    </code>
                  </div>
                </Spoiler>

                <Spoiler hide tab>
                  <template v-slot:heading>
                    <div class="subheading ru clickable">make:builder</div>
                  </template>
                  <div class="ru extnd">
                    Создает новый Builder <br><br>
                    <code>
                      <div class="cd">
                        <sy>php artisan make:</sy><cs>builder</cs> <pr>CustomBuilder</pr> <pr>-m Model</pr>
                      </div>
                      <br>
                      <div class="cd">
                        <pr>CustomBuilder</pr> - Название класса (поддерживает указание <sy>namespace</sy>)
                      </div>
                      <br>
                      <div class="cd">
                        <pr>-m Model</pr> - Имя модели в папке Models (опционально)
                        <br>
                        <hr class="nice-hr">
                        Если указан, то в существующей модели будет создана функция для возвращения CustomBuilder при конструировании нового запроса
                      </div>
                    </code>
                  </div>
                </Spoiler>

              </template>
            </Spoiler>
          </section>
        </div>
      </pane>

      <pane min-size="20" max-size="60" size="55" :class="getClass">
      </pane>
    </splitpanes>
  </div>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes';
import Spoiler from './Spoiler';

export default {

  components: {
    Splitpanes,
    Pane,
    Spoiler,
  },

  data () {
    return {
    }
  },

  computed: {
    getClass() {
      return Math.random() < 0.2 ? 'special-image-pane' : 'image-pane';
    }
  }
}
</script>
