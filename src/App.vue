<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  token: String,
  groups: [String],
});

console.log('token:', props.token, 'groups:', props.groups); // Access the 'message' prop
</script>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'fox-mediacloud-ux-vue-poc',
  components: {
    HelloWorld
  }
}
</script>

<template>
  <img src="https://static-00.iconduck.com/assets.00/vue-icon-2048x1766-ntogpmti.png" alt="svelte-icon"
    height="150px" />
  <HelloWorld />
  <recently-viewed-channels />
</template>



<style></style>
