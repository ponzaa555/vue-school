<template>
  <TheNavigation/>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import TheNavigation from './components/TheNavigation.vue';
export default{
  components: {TheNavigation}
}
</script>