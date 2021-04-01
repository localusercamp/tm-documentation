<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',

  components: {
    Header,
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

  .splitpanes__splitter {
    background-color: black;
    border-right: 1px solid lightgrey !important;
    border-left: 1px solid lightgrey !important;
    padding: 0 3px 0 3px;
  }

  .scheme-pane {
    background-color:rgb(230, 230, 230);
    cursor: move;
  }

  .content-pane {
    background-color: #fff !important;
    font-family: 'Josefin Sans', sans-serif;
  }

  .image-pane {
    background-image: url(https://picsum.photos/1280/1440?grayscale);
    background-repeat: no-repeat;
    background-size: cover;
    height: 95vh !important;
  }

  .special-image-pane {
    background-image: url(https://picsum.photos/1280/1440);
    background-repeat: no-repeat;
    background-size: cover;
    height: 95vh !important;
  }

  .content-pane > .content {
    height: 95vh;
    overflow-y: scroll;
  }

  .content::-webkit-scrollbar {
    display: none;
  }

  .svg-container {
    height: 95vh;
    overflow: hidden;
  }

  .block-text {
    stroke: none;
    font-family: 'Josefin Sans', sans-serif;
    fill: black;
    user-select: none;
  }

  .heading {
    font-size: 34px;
    margin-bottom: 20px;
  }

  .subheading {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .ru {
    font-family: 'Noto Sans', sans-serif;
  }

  .section {
    padding: 16px;
  }

  .clickable {
    cursor: pointer;
  }

  .d-inline-block {
    display: inline-block;
  }

  .hljs {
    border-radius: 4px;
    padding-left: 10px;
  }

  body {
    margin: 0;
  }

  .noselect {
    user-select: none;
  }

  .cd, .cd-inline {
    background-color: rgb(29, 31, 33);
    color: #c5c8c6;
    padding: 4px 12px 8px 12px;
    border-radius: 4px;
    font-size: 20px;
  }
  .cd-inline {
    padding: 2px 6px 4px 6px;
  }
  hd {
    font-size: 20px;
    color: #000;
  }
  .cd > sy {
    color: #81a2be;
  }
  .cd > cs {
    color: #d4634f;
  }
  .cd > pr {
    color: #68b451;
  }

  .extnd {
    font-size: 18px;
  }

  code > a {
    color: black;
  }

  ul {
    margin: 0 0 10px 0;
  }
  li {
    margin: 5px 0 0 0;
  }

  .nice-hr {
    margin: 8px 2px 8px 2px;
    border-top: none;
  }
</style>
