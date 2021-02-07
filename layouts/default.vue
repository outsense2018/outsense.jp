<template>
  <div>
    <GlobalNavBar />
    <nuxt />
    <Lfoot />
  </div>
</template>

<script lang="ts">
import builder from '@/assets/ts/vue-builder';
import _ from 'lodash';
import GlobalNavBar from '@/components/GlobalNavBar.vue';
import Lfoot from '@/components/LongFooter.vue';

export default builder()
.withComponents({ GlobalNavBar, Lfoot })
.withData({
  data() {
    return {}
  }  
}).build();
</script>

<style lang="sass">
body
  overflow-y: scroll
  background-color: white
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
legend.overflow-x-auto
  overflow-x: auto  
</style>
