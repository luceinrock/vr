<template>
  <div id="app" class="h-full w-full bg-white p-6">
    <HelloWorld />
    <Owners />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Owners from "./components/Owners.vue";
import HelloWorld from "./components/HelloWorld.vue";

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
  font-family: Poppins, sans-serif;
}

#nav a.router-link-exact-active {
  color: #ff5f35;
}
</style>
