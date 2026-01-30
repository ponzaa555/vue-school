<template>
  <TheNavigation/>
  <div class="container">
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script lang="ts">
import TheNavigation from './components/TheNavigation.vue';
export default{
  components: {TheNavigation}
}
</script>