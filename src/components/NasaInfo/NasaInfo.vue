<template>
  <div class="nasa-info">
    <div class="nasa-info-inner">
      <h1>NASA Daily</h1>
      <div class="nasa-info">
        <div v-if="!displayYesterday" class="today">
          <img :src="todayInfo.url" alt="nasa" width="200px"/>
          <h3 class="date">{{ todayInfo.date }}</h3>
          <p class="explanation">{{ todayInfo.explanation }}</p>
          <p class="copyright"><i class="far fa-copyright"></i> {{todayInfo.copyright}}</p>        
        </div>
        <div v-if="displayYesterday" class="yesterday">
          <img :src="yesterdayInfo.url" alt="nasa" width="200px"/>
          <h3 class="date">{{ yesterdayInfo.date }}</h3>
          <p class="explanation">{{ yesterdayInfo.explanation }}</p>
          <p class="copyright"><i class="far fa-copyright"></i> {{yesterdayInfo.copyright}}</p>
        </div>  
      </div>
      <button @click="displayYesterday = false">Today</button>
      <button @click="displayYesterday = true">Yesterday</button>
    </div>
  </div>
</template>

<script>
import { nasaApiCall } from '../../utils/nasaApiCalls';

export default {
  name: 'NasaInfo',
  data() {
    return {
      todayInfo: {},
      yesterdayInfo: {},
      displayYesterday: false
    };
  },
  async created() {
    let today = new Date().toISOString().slice(0, 10);
    let todayData = await nasaApiCall(today);
    this.todayInfo = todayData;

    let yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    let yesterdayData = await nasaApiCall(yesterday);
    this.yesterdayInfo = yesterdayData;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nasa-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nasa-info-inner {
  width: 50%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 10px 10px 43px -12px rgba(0, 0, 0, 0.75);
}
.explanation {
  text-align: justify;
}
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
