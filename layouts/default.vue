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

@import url(http://fonts.googleapis.com/earlyaccess/notosansjp.css);
<style lang="sass">
body
  font-family: 'Noto Sans JP'
  overflow-y: scroll
  background-color: white
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
legend.overflow-x-auto
  overflow-x: auto  
</style>
