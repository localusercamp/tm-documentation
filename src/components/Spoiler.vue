<template>
  <div>
    <div @click="show = !show">
      <img src="../assets/icon-arrow.svg" width="16" height="16" :class="['icon-arrow', 'clickable', {'rotate' : show}]">
      <div class="d-inline-block">
        <slot name="heading"/>
      </div>
    </div>
    <transition name="fadeHeight">
      <div v-show="show">
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Spoiler",

  data() {
    return {
      show: true,
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
  }

  .rotate {
    transform: rotate(-180deg);
  }
</style>
