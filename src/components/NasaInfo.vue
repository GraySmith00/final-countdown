<template>
  <div class="nasa-info">
    <h1>NASA Daily</h1>
    <div class="nasa-info">
      <img :src="nasaInfo.url" alt="nasa" width="200px"/>
      <p class="date">{{ nasaInfo.date }}</p>
      <p class="explanation">{{ nasaInfo.explanation }}</p>
      <p class="copyright">{{nasaInfo.copyright}}</p>
      
    </div>

  </div>
</template>

<script>
import { nasaApiCall } from '../utils/nasaApiCalls';

export default {
  name: 'NasaInfo',
  data() {
    return {
      nasaInfo: {}
    };
  },
  async created() {
    let data = await nasaApiCall();
    this.nasaInfo = data;
  }
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
