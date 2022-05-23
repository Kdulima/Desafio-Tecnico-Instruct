<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>Habitue</p>
  </div>
</template>

<style>

.home {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home p{
  font-size: 200px;
  font-weight: bold;
  color: black;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script>
