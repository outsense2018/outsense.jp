<template>
  <div>
    <nuxt/>
  </div>
</template>

<script lang="ts">
import builder from '@/assets/ts/vue-builder';
import Vue from 'vue';
import _ from 'lodash';

export default builder()
.withData({
  data() {
    return {}
  }  
}).build();
</script>

<style lang="sass">
body
  margin: 0px
  padding: 0px
  overflow-y: hidden
  background-color: black
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
