<template>
  <div id="app">
    <NasaInfo />
  </div>
</template>

<script>
import NasaInfo from './components/NasaInfo/NasaInfo.vue';

export default {
  name: 'app',
  components: {
    NasaInfo
  }
};
</script>

<style>
#app {
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
