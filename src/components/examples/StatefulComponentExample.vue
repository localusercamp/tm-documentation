<template>
  <div>
    <splitpanes class="default-theme">
      <pane min-size="40" max-size="60" size="50" class="content-pane">
        <div class="content">
          <div class="example-code-area">
            <div class="row">
              <div class="col-xs-12">
                <highlightjs language="js" :code="js" class="plain"/>
              </div>
            </div>
          </div>
        </div>
      </pane>

      <pane min-size="40" max-size="60" size="50" class="content-pane">
        <div class="content section extnd">
          Миксина-конструктор <b>StatefulComponent</b> - это обертка на StateManager для Vue-компонента (смотри <a @click="emitRedirect()">StateManager</a>). <br> Более лаконично описывает, что компонента использует состояния =)
          <br><br>
          Ммиксина-конструктор принимает массив строк - состояний:
          <highlightjs language="js" :code="usecase.create" /><br>
          Далее миксина примешивается к компоненте и добавляет поле state в свойство data.
        </div>
      </pane>
    </splitpanes>


  </div>
</template>

<script>
  import {js} from './code/StatefulComponentCode';
  import StatefulComponent from '../../js/StatefulComponent';
  import { Splitpanes, Pane } from 'splitpanes';

  const STATE = {
    FORM1: 'form1',
    FORM2: 'form2',
  };

  export default {
    name: "StatefulComponentExample",

    mixins: [
      StatefulComponent([STATE.FORM1, STATE.FORM2]),
    ],

    components: {
      Splitpanes,
      Pane,
    },

    data() {
      return {
        js,
        usecase: {
          create: "const STATE = {\n\tFORM1: 'form1',\n\tFORM2: 'form2',\n};\nexport default {\n\tmixins: [\n\t\tStatefulComponent([STATE.FORM1, STATE.FORM2]),\n\t],\n}",
          get: "",
        }
      }
    },

    methods: {
      emitRedirect() {
        this.$emit('activated', 'state_manager');
      }
    }
  }
</script>

<style>

</style>
