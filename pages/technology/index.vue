<template>
  <div id="bg">
    <global-nav-bar></global-nav-bar>
    <b-row style="padding-left:3vw;padding-right:3vw">
      <b-col cols="7" id="expl">
        <p>弊社が保有している特許の折りの技術、また、特許の折りパターンに限らず、</p>
        <p>お客様のニーズ、製品課題や社会課題に対応した折りの提案を行います。</p>
      </b-col>
      <b-col align=right cols="5" style="padding-left:3vw;margin-top:0">
        <h3 class="h3t">Technology</h3>
        <div id="change">
          <span>日本語</span><span>｜</span><span>ENGLISH</span>
        </div>
      </b-col>
    </b-row>
    <b-container fluid class="text-center">
      <b-row style="margin-top:0.5vw;margin-bottom:1vw" align-v="end">
        <b-col cols="3">
          <img src="@/assets/sogame11.jpg" alt="十亀" style="width:12vw;height:12vw"/>
        </b-col>
        <b-col cols="3">
          <img src="@/assets/isimatuori.JPG" alt="石松" style="width:12vw;height:12vw"/>
        </b-col>
        <b-col cols="3">
          <img src="@/assets/yousetu23.gif" alt="軸" style="width:21vw;height:14vw"/>
        </b-col>
        <b-col cols="3">
          <img src="@/assets/software11.jpg" alt="ソフト" style="width:12vw;height:12vw"/>
        </b-col>
      </b-row>
    </b-container>  
    <b-container fluid class="text-center">
      <b-row id="docs">
        <b-col cols="3">
          <span>十亀折</span><br><br>
          <p>薄膜かつ筒状の</p>
          <p>3次元展開構造物</p>
        </b-col>
        <b-col cols="3">
          <span>石松折</span><br><br>
          <p>3次元に展開する</p>
          <p>剛体で構成された構造物</p>
        </b-col>
        <b-col cols="3">
          <span>軸折</span><br><br>
          <p>折り紙を機構として発展させた</p>
          <p>新しい展開/変形機構</p>
        </b-col>
        <b-col cols="3">
          <span>折り紙ソフトウェア</span><br><br>
          <p>折り紙構造の設計を自動化する</p>
          <p>自社開発ソフトウェア</p>
        </b-col>
      </b-row>
    </b-container>
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
    document.body.className = 'bodyt';
  }
})
.build();
</script>

<style lang="sass">
body.bodyt
  margin: 0px
  padding: 0px
  background-color: white
  overflow-y: no-content
  overflow-x: hidden
.h3t 
  font-size: 4vmax
  font-weight: bold
  font-family: "Arial Black"
  margin-bottom: 5%
  margin-top: 0
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
