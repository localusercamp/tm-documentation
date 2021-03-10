<template>
  <div class="custom-header">
    <div @click="goto('backend')" class="navlink">
      Backend
    </div>
    <div @click="goto('cli')" class="navlink">
      CLI
    </div>
    <div @click="goto('frontend')" class="navlink">
      Frontend
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      show: true,
      tab: 'backend',
    }
  },

  methods: {
    goto(route_name) {
      this.$router.push(route_name);
    }
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
    font-size: 36px;
    border-right: 1px solid lightgrey;
    height: 5vh;
    padding: 1.5vh 20px 0 20px;
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
