<template>
  <TheNavigation/>
  <div class="container">
    <router-view class="view left-sidebar" name="LeftSidebar"></router-view>
    <router-view v-slot="{Component}" class="main-view" >
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"/>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import TheNavigation from './components/TheNavigation.vue';
export default{
  components: {TheNavigation}
}
</script>

<style lang="css">
.slide-enter-active,
.slide-leave-active{
  transition: opacity 1s, transform 1s  ;
}
.slide-enter-from,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-30%);
}

.container{
  display: flex;
}

.left-sidebar{
  width: 20%;
}
.main-view{
  width: 100%;
}
</style>