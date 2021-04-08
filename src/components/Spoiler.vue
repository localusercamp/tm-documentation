<template>
  <div :class="['noselect', {'plate-spoiler': plate}]">
    <div @click="show = !show">
      <img src="../assets/icon-arrow.svg" width="16" height="16" :class="['icon-arrow', 'clickable', {'rotate' : show}]">
      <div class="d-inline-block noselect">
        <slot name="heading"/>
      </div>
    </div>
    <transition name="fadeHeight">
      <div v-show="show" :class="{'tab':tab}">
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Spoiler",

  props: {
    hide:  { type: Boolean, default: false },
    tab:   { type: Boolean, default: false },
    plate: { type: Boolean, default: false },
  },

  data() {
    return {
      show: !this.hide,
    }
  },
}
</script>

<style>
  .fadeHeight-enter-active,
  .fadeHeight-leave-active {
    transition: all 0.1s;
    max-height: 500px;
  }
  .fadeHeight-enter,
  .fadeHeight-leave-to
  {
    /* opacity: 0; */
    max-height: 0px;
  }

  .icon-arrow {
    transition: all ease-in-out .2s;
    margin-right: 10px;
    margin-top: -10px;
  }

  .rotate {
    transform: rotate(-180deg);
  }

  .tab {
    padding-left:30px;
  }

  .plate-spoiler {
    width: 100%;
    border-bottom: 1px solid lightgray;
    padding: 16px 0 16px 24px;


  }

  .plate-spoiler .subheading {
    font-size: 32px;
    margin: 0;
  }
</style>
