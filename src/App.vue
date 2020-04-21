<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="">
        <img src="./assets/logo.png" class="img-responsive" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#/home">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <!--<a class="nav-link" href="#/contact">Contact</a>-->
            <router-link class="nav-link" :to="'/contact'">Contact</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/post">Post</a>
          </li>
          <div class="dropdown show">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
          <!--<li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>-->
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <!--    <Posts></Posts>-->
    <router-view></router-view>
    <!--<script type="application/javascript" src="easyHTTP.js"></script>-->
  </div>
</template>

<script>
  import Posts from './components/Posts'
  import Home from './components/Home'
  import Contact from './components/Contact'
  import jQuery from 'jquery'
  import JqxBarGauge from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbargauge.vue'

  export default {
    name: 'App',
    components: {
      Posts,
      Home,
      Contact,
      jQuery
    }
  }
</script>

<style>

  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../node_modules/jqwidgets-scripts/jqwidgets/styles/jqx.base.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }

  nav {
    background-color: cyan;
    color: #42b983;
  }

  .img-responsive {
    height: auto;
    width: auto;
    max-height: 50px;
    max-width: 200px;
  }
</style>
