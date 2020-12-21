<template>
  <div class="bg-white h-full w-full px-2 mt-6">
    <div class="flex items-center justify-center ">
      <h1 class="text-rent-500 font-semibold text-2xl">
        Add Car
      </h1>
    </div>
    <div class="name mt-5">
      <label for="name" class="text-asphalt-700">Name:</label>
      <div class="relative mt-2">
        <div
          class="inline-flex items-center justify-center absolute left-2 top-0 h-full w-10 text-gray-400 "
        >
          <svg class="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.828 7.828a4 4 0 10-5.656-5.656 4 4 0 005.656 5.656zM3.05 14.05A7 7 0 0115 19H1a7 7 0 012.05-4.95z"
              stroke="#a3a1a1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <input
          type="text"
          name="search"
          required=""
          v-model="name"
          class="text-sm placeholder-gray-600 w-full pl-12 pr-2 rounded-lg  bg-gray-100 py-3 focus:outline-none focus:shadow-md focus:text-rent-500"
        />
      </div>
    </div>
    <div class="phone-number mt-5">
      <label for="name" class="text-asphalt-700">Phone Number:</label>
      <div class="relative mt-2">
        <div
          class="inline-flex items-center justify-center absolute left-2 top-0 h-full w-10 text-gray-400 "
        >
          <svg class="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.586 3.586A2 2 0 003 5v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.279a1 1 0 00-.684-.949l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.516l2.257-1.13a1 1 0 00.502-1.21L9.228 3.684A1 1 0 008.28 3H5a2 2 0 00-1.414.586z"
              stroke="#a3a1a1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <input
          type="text"
          name="search"
          required=""
          v-model="phone_number"
          class="text-sm placeholder-gray-600 w-full pl-12 pr-2 rounded-lg  bg-gray-100 py-3 focus:outline-none focus:shadow-md focus:text-rent-500"
        />
      </div>
    </div>

    <div class="emai-address mt-5">
      <label for="name" class="text-asphalt-700">Email Address:</label>
      <div class="relative mt-2">
        <div
          class="inline-flex items-center justify-center absolute left-2 top-0 h-full w-10 text-gray-400 "
        >
          <svg class="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              stroke="#a3a1a1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <input
          type="text"
          name="search"
          v-model="email_address"
          required=""
          class="text-sm placeholder-gray-600 w-full pl-12 pr-2 rounded-lg  bg-gray-100 py-3 focus:outline-none focus:shadow-md focus:text-rent-500"
        />
      </div>
    </div>
    <div class="address mt-5">
      <label for="name" class="text-asphalt-700">Address:</label>
      <div class="relative mt-2">
        <div
          class="inline-flex items-center justify-center absolute left-2 top-0 h-full w-10 text-gray-400 "
        >
          <svg class="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              stroke="#a3a1a1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <input
          type="text"
          name="search"
          v-model="address"
          required=""
          class="text-sm placeholder-gray-600 w-full pl-12 pr-2 rounded-lg  bg-gray-100 py-3 focus:outline-none focus:shadow-md focus:text-rent-500"
        />
      </div>
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
