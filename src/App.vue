<template>
  <div id="app" class="h-full w-full bg-white p-6">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <HelloWorld />
    <Owners />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Owners from './components/Owners.vue';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    Owners,
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
