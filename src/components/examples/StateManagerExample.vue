<template>
  <div>
    <splitpanes class="default-theme">
      <pane min-size="40" max-size="60" size="50" class="content-pane">
        <div class="content">
          <div class="example-area">
            <div class="row">
              <div class="col-xs-12">
                <button @click="state.switchToForm1({form2})">форма 1</button>
                <button @click="state.switchToForm2()">форма 2</button>
              </div>
            </div>
            <br>
            <div class="row">
              <div v-if="state.isForm1" class="col-xs-12">
                <div class="form-group">
                  <label>Введите ваше имя</label>
                  <input v-model="form1.name" type="text" class="form-control">
                </div>

                <div class="form-group mb-0">
                  <label>Введите ваш возраст</label>
                  <input v-model="form1.age" type="number" class="form-control">
                </div>
              </div>

              <div v-if="state.isForm2" class="col-xs-12">
                <div class="form-group">
                  <label>Введите ваше имя</label>
                  <input v-model="form2.name" type="text" class="form-control">
                </div>

                <div class="form-group mb-0">
                  <label>Введите ваш рост</label>
                  <input v-model="form2.height" type="number" class="form-control">
                </div>
              </div>
            </div>
          </div>

          <div class="example-code-area">
            <div class="row">
              <div class="col-xs-12">
                <highlightjs language="html" :code="html" class="plain"/>
                <highlightjs language="js" :code="js" class="plain"/>
              </div>
            </div>
          </div>
        </div>
      </pane>

      <pane min-size="40" max-size="60" size="50" class="content-pane">
        <div class="content section extnd">
          <b>StateManager</b> позволяет разбить функционал компоненты на конкретные самостоятельные стейты, осуществлять переход между ними, вешать хуки на переходы, а также проверять текущий стейт.
          <br><br>
          Чтобы использовать StateManager необходимо создать экземпляр:
          <highlightjs language="js" :code="usecase.create" /><br>
          В результате получается объект:
          <highlightjs language="js" :code="usecase.object" /><br>
          Пример:
          <highlightjs language="js" :code="usecase.run" /><br>
          К экземпляру можно добавлять 2 хука на каждый стейт:
          <highlightjs language="js" :code="usecase.hook" /><br>
          Хуки могут принимать агрументы:
          <highlightjs language="js" :code="usecase.hookargv" /><br>
        </div>
      </pane>
    </splitpanes>


  </div>
</template>

<script>
  import {html, js} from './code/StateManagerCode';
  import StateManager from '../../js/StateManager';
  import { Splitpanes, Pane } from 'splitpanes';

  const STATE = {
    FORM1: 'form1',
    FORM2: 'form2',
  };

  const state_manager = new StateManager([STATE.FORM1, STATE.FORM2]);

  export default {
    name: "StatefulManagerExample",

    components: {
      Splitpanes,
      Pane,
    },

    data() {
      return {
        form1: {
          name: null,
          age: null,
        },
        form2: {
          name: null,
          height: null,
        },
        state: state_manager,
        html,
        js,
        usecase: {
          create: "const STATE = {\n\tCREATE:'create',\n\tEDIT:'edit',\n};\nconst state_manager = new StateManager([STATE.CREATE, STATE.EDIT]);",
          object: "state_manager.isCreate // bool: Текущий стейт create?\nstate_manager.isEdit // bool: Текущий стейт edit?\nstate_manager.switchToCreate() // переводит объект в create стейт\nstate_manager.switchToEdit() // переводит объект в edit стейт",
          run: "const state_manager = new StateManager([STATE.CREATE, STATE.EDIT]);\nstate_manager.isCreate; // true\nstate_manager.isEdit; // false\nnstate_manager.switchToEdit();\nstate_manager.isCreate; // false\nstate_manager.isEdit; // true",
          hook: "//Добавит хук, который вызовется перед тем,\n//как state_manager перейдет в стейт create\nstate_manager.addBeforeHook(STATE.CREATE, () => {});\n\n//Добавит хук, который вызовется после того,\n//как state_manager перейдет в стейт create\nstate_manager.addAfterHook(STATE.CREATE, () => {});",
          hookargv: "state_manager.addBeforeHook(STATE.CREATE, ({title}) => {\n\tconsole.log('hi from before ' + title);\n});\n\nconst title = 'hook';\nstate_manager.switchToCreate({title}); // console: hi from before hook",
        }
      }
    },

    created() {
      this.state.addBeforeHook(STATE.FORM1, ({form2}) => {
        this.form1.name = form2.name;
        this.form1.age  = null;
      });
    }
  }
</script>

<style>

</style>
