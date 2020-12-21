<template>
  <div id="app" class="h-full w-full bg-white p-6 flex justify-center">
    <Owners />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Owners from "./components/Owners.vue";

@Component({
  components: {
    Owners,
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
