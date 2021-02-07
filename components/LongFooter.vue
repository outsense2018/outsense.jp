<template>
  <div>
    <b-container>
      <hr>
      <p id="footere">
        <a href="https://twitter.com/teamOUTSENSE" target="_blank" rel="noopener noreferrer"><img style="height:1.5vw;margin-right:1vw" src="@/assets/Twitter_Logo_B.png" alt="ロゴ"  /></a>
        <a href="https://www.facebook.com/teamOUTSENSE/" target="_blank" rel="noopener noreferrer"><img style="height:1.5vw;margin-right:1.2vw" src="@/assets/f_logo_Blue.png" alt="ロゴ"  /></a>
        <span style="vertical-align:middle">©2021 OUTSENSE inc. All rights reserved.

</span>
      </p>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    type: { type: String, default: '' },
  },
  computed: {
    listeners() {
      return this.$listeners;
    },
  },
});
</script>

<style lang="sass">
#footere
  font-color: black
  padding-top: 0.5vw
  font-size: 0.8vmax
  text-align: right
  font-family: "Arial"
</style>
