<template>
  <div id="bg" align="center">
    <div class="moon">
      <a to="earth"><img src="@/assets/moon-header7.png" alt="宇宙事業" hover /></a>
    </div>
    <div id="logo">
      <img src="@/assets/outsense.png" max-height="1vh"/>
      <p>常識を超え、創造の先へ</p>
    </div>
    <div class="footer_fix_btn">
      <img src="@/assets/earth-header3.png" alt="地上事業"/>
    </div>
  </div>
</template>

<script> 
import builder from '@/assets/ts/vue-builder';
import _ from 'lodash';
import Icon from '@/components/Icon.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    Icon
  }
}
</script>

<style lang="sass">
#bg 
  background-color: black
  width: 100%
  height: 100vw
.moon
  position: relative
  img
    display: block
    max-height: 50vh
    max-width: 50vw
    min-width: 50vw
    margin: 0 auto
.moon:hover
  opacity: 0.5
#logo
  position: absolute
  top: 50%
  left: 50%
  ms-transform: translate(-50%,-50%)
  webkit-transform: translate(-50%,-50%)
  transform: translate(-50%,-50%)
  p
    color: white
    font-size: 1vmax
    margin-top: 1vmax
  img
    max-height: 15vh
    max-width: 15vw
.footer_fix_btn
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  background: black;
  img
    display: block
    max-height: 50vh
    max-width: 50vw
    min-width: 50vw
    margin: 0 auto
.footer_fix_btn:hover
  opacity: 0.5
</style>
