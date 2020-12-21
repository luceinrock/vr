<template>
  <div class="hello flex flex-col">
    <div>
      <h1 class="text-rent-500 font-semibold text-2xl">
        Owner List
      </h1>
    </div>
    <div
      v-for="hello in hellos"
      :key="hello.id"
      class=" relative bg-white mt-3 w-full h-ful rounded-lg flex flex-col p-4 shadow-md
      "
    >
      <button class="absolute top-o right-4">
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 013.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            stroke="#3F3F46"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div class="flex flex-col">
        <h1 class="text-xl text-rent-500">
          <p class="tracking-wide text-asphalt-400 font-semibold ">
            Car Owner:
          </p>
          {{ hello.owner }}
        </h1>
        <h1 class="text-xl text-rent-500 mt-2">
          <p class="tracking-wide font-semibold text-asphalt-400">
            Plate Number:
          </p>
          {{ hello.plate_number }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      hellos: "",
    };
  },
  mounted() {
    axios
      .get("http://rent.cebu-airtraffic.com/fw/api/o/vget")
      .then((response) => (this.hellos = response.data));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
