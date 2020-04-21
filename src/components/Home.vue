<template>
  <div class="main">
    <p>Home Page</p>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Service</a></li>
      <li><a href="#">contacts</a></li>
      <li><a href="#">Gallery</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    font-family: "Source Code Pro";
  }

  ul {
    float: right;
    list-style-type: none;
  }
  ul li {
    display: inline-block;
  }
  ul li a {
    text-decoration: none;
    color: #fff;
    padding: 5px 20px;
    border: 1px solid #fff;

  }
</style>
