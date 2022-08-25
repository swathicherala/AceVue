<template>
  <div id="app">
    <nav class="navigation">
      <div class="logo">
        <img src="./assets/ACE.svg" />
      </div>
      <div class="links">
        <ul>
          <li>
            <router-link class="list" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li>
            <router-link class="list" aria-current="page" to="/service"
              >Our Service</router-link
            >
          </li>
          <li>
            <router-link class="list" aria-current="page" to="/about"
              >About Us</router-link
            >
          </li>
          <li>
            <router-link class="list" aria-current="page" to="/contact"
              >Contact Us</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <router-view></router-view>
    <FooterView />
  </div>
</template>

<script>
import FooterView from "./components/FooterView.vue";
export default {
  name: "App",
  components: {
    FooterView,
  },
};
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.navigation {
  display: flex;
  background: black;
  justify-content: space-between;
  padding: 0 130px;
}
.navigation .logo img {
  height: 100px;
  width: 100%;
}
.navigation .links ul {
  display: inline-flex;
  /* margin-left: 114px; */
}
.navigation .links ul li {
  list-style: none;
  /* padding-left:60px;
  padding-top: 31px; */
  padding: 30px;
  font-size: 20px;
}
.navigation .links ul li .list {
  color: white;
  text-decoration: none;
}
.navigation .links ul li .list:hover {
  color: orange;
  cursor: pointer;
}
.navigation ul li .list:active {
  color: orange;
  cursor: pointer;
}
</style>
