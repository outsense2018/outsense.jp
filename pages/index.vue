<template>
  <div id="bg" align="center">
    <transition name="fade">
      <div class="moon" v-if="showmoon">
        <a to="earth"><img src="@/assets/moon-header7.png" alt="宇宙事業" hover/></a>
      </div>
    </transition>
    <transition name="fade">
      <div id="logo" v-if="showlogo">
        <img src="@/assets/outsense.png" max-height="1vh"/>
        <p>常識を超え、創造の先へ</p>
      </div>
    </transition>
    <transition name="fade">
      <div class="footer_fix_btn" v-if="showearth">
        <img src="@/assets/earth-header3.png" alt="地上事業"/>
      </div>
    </transition>  
  </div>
</template>

<script> 
import builder from '@/assets/ts/vue-builder';
import _ from 'lodash';
import Icon from '@/components/Icon.vue';

export default {
  data() {
    return {
      showmoon: false,
      showlogo: false,
      showearth: false,
    };
  },
  components: {
    Icon
  },
  created() {
    this.show = false;
    setTimeout(() => { this.showmoon = true }, 1500 )
    setTimeout(() => { this.showearth = true }, 1500 )
    setTimeout(() => { this.showlogo = true }, 2500 )
  },
}
</script>

<style lang="sass">
#bg 
  background-color: black
  width: 100%
  height: 100vw
.fade-enter-active, .fade-leave-active
  transition: opacity .7s
.fade-enter, .fade-leave
  opacity: 0
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
