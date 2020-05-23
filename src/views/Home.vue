<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MessageDisplay />
  </div>
</template>

<script>
// @ is an alias to /src
import MessageDisplay from '@/components/MessageDisplay.vue';

export default {
  name: 'Home',
  components: {
    MessageDisplay,
  },
};
</script>
