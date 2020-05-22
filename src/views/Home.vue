<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <RandomNumber />
  </div>
</template>

<script>
// @ is an alias to /src
import RandomNumber from '@/components/RandomNumber.vue';

export default {
  name: 'Home',
  components: {
    RandomNumber,
  },
};
</script>
