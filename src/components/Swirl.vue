<template>
  <div :class="['swirl', 'clickable', {active}]" @click="emitActivated()">
    <div :class="['swirl-arrow-line', {active}]"></div>
    <div class="swirl-content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swirl",

  props: {
    active: { type: Boolean, default: false }
  },

  data() {
    return {

    }
  },

  computed: {
  },

  methods: {
    emitActivated() {
      this.$emit('activated');
    }
  }
}
</script>

<style>
  .swirl {
    margin-top: 16px;
    transition: all 0.6s ease;
    color: black;
  }
  .swirl-content {
    display: inline-block;
    font-size: 20px;
  }
  .swirl.active {
    color: #30B8BB;
  }

  .swirl.active .swirl-arrow-line {
    border-color: #30B8BB;
  }

  .swirl-arrow {
    font-size: 24px;
  }
  .swirl-arrow-line {
    width: 100%;
    max-width: 0px;
    border-top: 2px solid black;
    display: inline-block;
    padding-bottom: 7px;

    transition: max-width 0.4s;
  }
  .swirl-arrow-line.active {
    max-width: 32px;
  }
</style>
