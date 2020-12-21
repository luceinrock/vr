<template>
    <div>
        <label for="username">Phone Number:</label>
        <input type="text" v-model="phonenumber">
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