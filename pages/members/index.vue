<template>
  <div id="bg">
    <global-nav-bar></global-nav-bar>
    <h3 class="h3m">Members</h3>
    <div align=center style="width=90%;background-image:url(./assets/members.jpg) no-repeat;">
    a
    a
    a
    </div>
    <div id="footer">
      <footer>
        <hr>
        <p>©2018- OUTSENSE inc.</p>
      </footer>
    </div>  
  </div>
</template>

<script lang="ts">
import GlobalNavBar from '@/components/GlobalNavBar.vue';
import builder from '@/assets/ts/vue-builder';
import _ from 'lodash';
import Icon from '@/components/Icon.vue';

export default builder()
.withComponents({ Icon, GlobalNavBar })
.withData({
  data() {
    return {}
  }  
})
.withLifecycles({
  mounted: function() {
    document.body.className = 'bodym';
  }
})
.build();
</script>

<style lang="sass">
body.bodym
  margin: 0px
  padding: 0px
  background-color: white
  overflow-y: no-content
  overflow-x: hidden
.h3m
  font-size: 4vmax
  font-weight: bold
  font-family: "Arial Black"
  margin-top: -5%
  padding-top: 0  
#expl
  margin-top: 1vw
  p
    font-size: 1vmax
    font-family: "ヒラギノ角ゴシック"
    margin: 0
    font-weight: bold
#change
  span
    font-size: 1vmax
    font-family: "ヒラギノ角ゴシック"
  margin: 1vmax 1vmax 3vmax 1vmax
#docs
  font-size: 1vmax
  font-family: "ヒラギノ角ゴシック"
  align: right
  span
    font-weight: bold
  p
    align-text: center
    margin: 0
#bg
  background-color: white
  color: black
  margin: 10%
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
