<template>
  <div class="owners">
    <div>
      <label for="name">Name</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label for="phone_number">Phone Number</label>
      <input type="text" v-model="phone_number" />
    </div>
    <div>
      <label for="email_address">Email Address</label>
      <input type="text" v-model="email_address" />
    </div>
    <div>
      <label for="address">Address</label>
      <input type="text" v-model="address" />
    </div>
    <button @click="sendData()">Submit</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Owners',
  data() {
    return {
      name: '',
      phone_number: '',
      email_address: '',
      address: '',
    };
  },
  methods: {
    sendData() {
      axios
        .post('http://rent.cebu-airtraffic.com/fw/api/o/add', {
          name: this.name,
          phone_number: this.phone_number,
          email_address: this.email_address,
          address: this.address,
        })
        .then((response) => {
          
        });
    },
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
