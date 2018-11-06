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
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background: #4b6cb7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #182848,
    #4b6cb7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #182848,
    #4b6cb7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
