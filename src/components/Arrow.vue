<template>
  <g>
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto" stroke="none" fill="black">
        <polygon points="0 0, 10 3.5, 0 7" />
      </marker>
    </defs>
    <line :x1="x1" :y1="y1" :x2="x2" :y2="y2" stroke="#000" stroke-width="2" :marker-end="!nomarker ? 'url(#arrowhead)' : ''" />
  </g>
</template>

<script>
export default {
  name: "Arrow",

  props: {
    x1: {type: [String, Number]},
    y1: {type: [String, Number]},
    x2: {type: [String, Number]},
    y2: {type: [String, Number]},
    nomarker: { type: Boolean, default: false },
  },
}
</script>
