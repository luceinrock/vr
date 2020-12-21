<template>
    <div>
        <label for="username">Phone Number:</label>
        <input type="text" v-model="phone_number">
    </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Login',
  data() {
    return {
      phone_number: '',
      password: '',
    };
  },
  methods: {
    sendData() {
      axios
        .post('http://rent.cebu-airtraffic.com/fw/api/o/add', {
          phone_number: this.phone_number,
          password: this.password,
        })
        .then((response) => {
          // console.log(response);
        });
    },
  },
};
</script>