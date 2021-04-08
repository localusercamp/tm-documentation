const html =
`<template>
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
</template>`;

const js =
`<script>
  import StateManager from '../../js/StateManager';

  const STATE = {
    FORM1: 'form1',
    FORM2: 'form2',
  };

  const state_manager = new StateManager([STATE.FORM1, STATE.FORM2]);

  export default {
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
      }
    },

    created() {
      this.state.addBeforeHook(STATE.FORM1, ({form2}) => {
        this.form1.name = form2.name;
        this.form1.age  = null;
      });
    }
  }
</script>`;

export {
  html,
  js,
}
