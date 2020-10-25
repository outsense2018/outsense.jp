<template>
  <div>
    <global-nav-bar></global-nav-bar>
    <h3 class="h3me">Members</h3>
    <figure align=center>
      <img src="@/assets/members.jpg" alt="集合写真" style="width:70%"/>
    </figure>          
  <Foot />
  </div>
</template>

<script lang="ts">
import GlobalNavBar from '@/components/GlobalNavBar.vue';
import Foot from '@/components/GlobalFooter.vue';
import builder from '@/assets/ts/vue-builder';
import _ from 'lodash';

export default builder()
.withComponents({ GlobalNavBar, Foot })
.withData({
  data() {
    const contents = [
      { name:"永井 翔真", alpha:"Shoma Nagai", job:"Engineer / Intern" },
      { name:"伊藤 彰朗", alpha:"Akio Ito", job:"非常勤監査役 / 創業者" },
      { name:"石松 慎太郎", alpha:"Shinaro Ishimatu", job:"取締役CTO / 創業者" },
      { name:"高橋 鷹山", alpha:"Yozan Takahashi", job:"代表取締役CEO / 創業者" },
      { name:"堀井 柊我", alpha:"Shuga Horii", job:"取締役CDO / 創業者" },
      { name:"野口 信", alpha:"Sin Noguchi", job:"Engineer / Intern" },
    ];
    return {contents}
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
.h3me
  font-size: 3.6vmax
  font-weight: bold
  font-family: "Arial Black"
  margin-left: 12.2%
  margin-top: 6%
  padding-top: 0
figure
  position: relative
  img 
    vertical-align: top
    align: center
  figcaption
    font-size: 0.6vmax
    font-family: "ヒラギノ角ゴシック"
    color: black
    position: absolute
    bottom: 0
    display: flex
    width: 100%
    height: 15%
    align-items: center
    justify-content: center
  .mem
    p 
      margin: 0
</style>
