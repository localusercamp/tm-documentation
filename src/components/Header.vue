<template>
  <div class="custom-header">
    <div @click="goto(TAB.BACKEND)" class="navlink" :style="tab === TAB.BACKEND ? {color:'#30B8BB'} : {}">
      Backend
    </div>
    <div @click="goto(TAB.CLI)" class="navlink" :style="tab === TAB.CLI ? {color:'#30B8BB'} : {}">
      CLI
    </div>
    <div @click="goto(TAB.FRONTEND)" class="navlink" :style="tab === TAB.FRONTEND ? {color:'#30B8BB'} : {}">
      Frontend
    </div>
  </div>
</template>

<script>

const TAB = {
  BACKEND: 'backend',
  CLI: 'cli',
  FRONTEND: 'frontend',
};

export default {
  name: "Header",

  data() {
    return {
      show: true,
      tab: TAB.BACKEND,
      TAB,
    }
  },

  methods: {
    goto(tab) {
      this.tab = tab;
      this.$router.push(tab);
    }
  },

  created() {
    if (window.location.hash.includes(TAB.BACKEND))
      this.tab = TAB.BACKEND;
    if (window.location.hash.includes(TAB.CLI))
      this.tab = TAB.CLI;
    if (window.location.hash.includes(TAB.FRONTEND))
      this.tab = TAB.FRONTEND;
  }
}
</script>

<style>
  .custom-header {
    width: 100%;
    height: 5vh;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid lightgrey;
  }
  .navlink {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 3vh;
    border-right: 1px solid lightgrey;
    height: 5vh;
    padding: 0.5vh 20px 0 20px;
    cursor: pointer;
  }
  .navlink:hover {
    text-decoration: underline;
  }
  .custom-header > a {
    text-decoration: none;
    color: black;
  }
</style>
