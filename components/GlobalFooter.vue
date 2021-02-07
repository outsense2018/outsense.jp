<template>
  <div id="footer" v-on="listeners">
    <footer>
      <hr>
      <p>
        <a href="https://twitter.com/teamOUTSENSE" target="_blank" rel="noopener noreferrer"><img style="height:1.5vw;margin-right:1vw" src="@/assets/Twitter_Logo_B.png" alt="ロゴ"  /></a>
        <a href="https://www.facebook.com/teamOUTSENSE/" target="_blank" rel="noopener noreferrer"><img style="height:1.5vw;margin-right:1.2vw" src="@/assets/f_logo_Blue.png" alt="ロゴ"  /></a>
        <span style="vertical-align:middle">©2018- OUTSENSE inc.</span>
      </p>
    </footer>
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
#footer
  width: 100vw
  position: absolute
  bottom: 0
  right: 0
  padding-right: 3vw
  padding-left: 3vw
  font-color: black
  padding-top: 0.5vw
  font-size: 0.8vmax
  font-family: "Arial"
  text-align: right
</style>
