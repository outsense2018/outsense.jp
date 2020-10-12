<template>
  <div>
    <global-nav-bar></global-nav-bar>
    <h3 class="h3me">Members</h3>
    <figure align=center>
      <img src="@/assets/members.jpg" alt="集合写真" style="width:75%"/>
      <figcaption>
       <b-row style="width:65%"> 
        <b-col v-for="(content,index) in contents" :key="index" cols="2" id="item" align-self="end">
          <b-row cols="1" class="mem" align-v="end">
            <b-col><u><p style="font-weight:bold">{{content.name}}</p></u></b-col>
            <b-col><p style="font-weight:bold">{{content.alpha}}</p></b-col>
            <b-col><p>{{content.job}}</p></b-col>
          </b-row>
        </b-col>
       </b-row>
      </figcaption>
    </figure>          
    <div id="footer">
      <footer>
        <p>
          <a href="https://twitter.com/teamOUTSENSE"><img style="height:2.2vw;margin-right:1vw" src="@/assets/Twitter_Logo_B.png" alt="ロゴ"  /></a>
          <a href="https://www.facebook.com/teamOUTSENSE/"><img style="height:1.5vw;margin-right:1.2vw" src="@/assets/f_logo_Blue.png" alt="ロゴ"  /></a>
          <span style="vertical-align:middle">©2018- OUTSENSE inc.</span>
        </p>
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
  margin-top: 5%
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
