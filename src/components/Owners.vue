<template>
  <div class="bg-white h-full w-full px-2 mt-6">
    <div>
      <label for="name" class="text-asphalt-700">Name</label>
      <input
        type="text"
        v-model="name"
        class="bg-gray-50 w-full rounded-xl px-10 py-2 text-xl mt-5 focus:shadow-md focus:text-rent-500"
      />
    </div>
    <div class="mt-5">
      <label for="phone_number">Phone Number</label>
      <input
        type="text"
        v-model="phone_number"
        class="bg-gray-50 w-full rounded-xl px-10 py-2 text-xl mt-5 focus:shadow-md focus:text-rent-500"
      />
    </div>
    <div class="mt-5">
      <label for="email_address">Email Address</label>
      <input
        type="text"
        v-model="email_address"
        class="bg-gray-50 w-full rounded-xl px-10 py-2 text-xl mt-5 focus:shadow-md focus:text-rent-500"
      />
    </div>
    <div class="mt-5">
      <label for="address">Address</label>
      <input
        type="text"
        v-model="address"
        class="bg-gray-50 w-full rounded-xl px-10 py-2 text-xl mt-5 focus:shadow-md focus:text-rent-500"
      />
    </div>
    <div class="mt-5">
      <button
        @click="sendData()"
        class="bg-rent-500 text-white w-full rounded-xl px-10 py-2 text-xl mt-5 active:bg-asphalt-700 "
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Owners",
  data() {
    return {
      name: "",
      phone_number: "",
      email_address: "",
      address: "",
    };
  },
  methods: {
    sendData() {
      axios
        .post("http://rent.cebu-airtraffic.com/fw/api/o/add", {
          name: this.name,
          phone_number: this.phone_number,
          email_address: this.email_address,
          address: this.address,
        })
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>
