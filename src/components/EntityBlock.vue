<template>
  <g @click="click()" @mouseover="hover" @mouseleave="leave" class="entity-block clickable" :transform="'translate('+x+', '+y+')'">
    <rect rx="5" ry="5" :width="rectWidth" height="60" :fill="fill" :stroke="stroke"></rect>
    <text ref="text" :x="spacing-2.5" y="42" class="block-text" font-size="35">
      <slot/>
    </text>
  </g>
</template>

<script>
export default {
  name: "EntityBlock",

  props: {
    x: {type: Number},
    y: {type: Number},
    stroke: {type: String},
    shape: {type: SVGRect},
  },

  data() {
    return {
      init: false,
      spacing: 15,
      hovering: false,
    }
  },

  computed: {
    rectShape() {
      const shape = this.$refs.text.getBBox();
      shape.width = shape.width + this.spacing * 2;
      this.$emit('update:shape', shape);
      return shape;
    },
    rectWidth() {
      return this.init ? this.rectShape.width : 0;
    },
    fill() {
      return this.hovering ? this.stroke : 'transparent';
    }
  },

  methods: {
    click() {
      this.$emit('clicked');
    },
    hover() {
      this.hovering = true;
    },
    leave() {
      this.hovering = false;
    },
  },

  mounted() {
    this.init = true;
  }
}
</script>

<style>
  .entity-block:hover > rect {
    transition: fill .2s ease-in-out;
  }
  .entity-block > rect {
    transition: fill .2s ease-in-out;
  }
</style>
