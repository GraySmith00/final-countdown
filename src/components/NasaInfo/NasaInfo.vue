<template>
  <div class="nasa-info">
    <div class="nasa-info-inner">
      <h1>NASA Daily</h1>
      <div class="nasa-info">
        <div v-if="!displayYesterday" class="info-container today">
          <div class="image-container">
            <img :src="todayInfo.url" alt="nasa" width="200px"/>
            <h3 class="date">{{ formattedDate.today }}</h3>
            <p class="copyright"><i class="far fa-copyright"></i> 
              {{todayInfo.copyright}}
            </p>        
          </div>
          <div class="explanation-buttons">
            <p class="explanation">{{ todayInfo.explanation }}</p>
            <div class="buttons">
              <button @click="displayYesterday = false">Today</button>
              <button @click="displayYesterday = true">Yesterday</button>
            </div>
          </div>
        </div>
        <div v-if="displayYesterday" class="info-container yesterday">
          <div class="image-container">
            <img :src="yesterdayInfo.url" alt="nasa" width="200px"/>
            <h3 class="date">{{ formattedDate.yesterday }}</h3>
            <p class="copyright"><i class="far fa-copyright"></i> 
              {{yesterdayInfo.copyright}}
            </p>
          </div>
          <div class="explanation-buttons">
            <p class="explanation">{{ yesterdayInfo.explanation }}</p>
            <div class="buttons">
              <button @click="displayYesterday = false">Today</button>
              <button @click="displayYesterday = true">Yesterday</button>
            </div>
          </div>
        </div>  
      </div>
      
    </div>
  </div>
</template>

<script>
import { nasaApiCall } from '../../utils/nasaApiCalls';
import moment from 'moment';

export default {
  name: 'NasaInfo',
  data() {
    return {
      todayInfo: {},
      yesterdayInfo: {},
      displayYesterday: false,
      formattedDate: {
        today: moment().format('LL'),
        yesterday: moment()
          .subtract(1, 'days')
          .format('LL')
      }
    };
  },
  async created() {
    const today = moment()
      .format()
      .slice(0, 10);
    let todayData = await nasaApiCall(today);
    this.todayInfo = todayData;

    let yesterday = moment()
      .subtract(1, 'days')
      .format()
      .slice(0, 10);
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
  height: 500px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 10px 10px 43px -12px rgba(0, 0, 0, 0.75);
}
.info-container {
  display: grid;
  grid-template-columns: 5fr 10fr;
  grid-gap: 1rem;
}
.date {
  margin-top: 1rem;
}
.explanation {
  margin-top: 0;
  height: 300px;
  text-align: justify;
  overflow: scroll;
}
.buttons {
  margin-top: 2rem;
}
button {
  padding: 0.7rem 1.3rem;
  margin: 0 0.5rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.2rem;
  color: #fff;
  -webkit-box-shadow: 6px 10px 45px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 10px 45px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 10px 45px -10px rgba(0, 0, 0, 0.75);
  background: #ff416c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ff4b2b,
    #ff416c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ff4b2b,
    #ff416c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
button:hover {
  transform: scale(1.05);
  transition: ease-in-out 0.2s;
}

@media screen and (max-width: 1200px) {
  .nasa-info-inner {
    width: 80%;
  }
}

@media screen and (max-width: 700px) {
  .nasa-info-inner {
    width: 90%;
  }
}
@media screen and (max-width: 585px) {
  .info-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
  .nasa-info-inner {
    height: auto;
  }
}
</style>
