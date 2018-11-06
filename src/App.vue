<template>
  <div id="app">
    <NasaInfo />
  </div>
</template>

<script>
import NasaInfo from './components/NasaInfo';

export default {
  name: 'app',
  components: {
    NasaInfo
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
