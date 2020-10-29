<template>
  <div class="bgt">
    <global-nav-bar></global-nav-bar>
    <b-row style="padding-left:3vw;padding-right:3vw">
      <b-col cols="7" id="expl">
        <p>弊社が保有している技術には以下のような特許等がございます。</p>
        <p>折りの技術を用いて、お客様のニーズ、製品課題や社会課題を解決いたします。</p>
      </b-col>
      <b-col align=right cols="5" style="padding-left:3vw;margin-top:-1%;margin-bottom:4%">
        <h3 class="h3t">Technology</h3>
        <!-- <div id="change">
          <span>日本語</span><span>｜</span><span style="color:grey">ENGLISH</span>
        </div> -->
      </b-col>
    </b-row>
    <b-container fluid class="text-center">
      <b-row style="margin-top:0.5vw;margin-bottom:1vw" align-v="end">
        <b-col cols="3">
          <img src="@/assets/sogame11.jpg" alt="十亀" style="width:13vw;height:13vw"/>
        </b-col>
        <b-col cols="3">
          <img src="@/assets/isimatuori.gif" alt="石松" style="width:13vw;height:13vw"/>
        </b-col>
        <b-col cols="3">
          <img src="@/assets/yousetu23.gif" alt="軸" style="width:13vw;height:13vw"/>
        </b-col>
        <b-col cols="3">
          <img src="@/assets/software11.gif" alt="ソフト" style="width:13vw;height:13vw"/>
        </b-col>
      </b-row>
    </b-container>  
    <b-container fluid class="text-center">
      <b-row id="docs">
        <b-col cols="3">
          <span>ソガメ折り</span><br><br>
          <p>薄膜かつ筒状の</p>
          <p>3次元展開構造物</p>
        </b-col>
        <b-col cols="3">
          <span>イシマツ折り</span><br><br>
          <p>3次元に展開する</p>
          <p>剛体で構成された構造物</p>
        </b-col>
        <b-col cols="3">
          <span>軸折り</span><br><br>
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
.bgt
  background-color: white
  color: black
  margin: 10%
  padding-top: 0
.h3t
  font-size: 4vmax
  font-weight: bold
  font-family: "Arial Black"
  margin-bottom: 5%
  margin-top: 0
body.bodyt
  margin: 0px
  padding: 0px
  background-color: white
  overflow-y: no-content
  overflow-x: hidden
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
</style>
