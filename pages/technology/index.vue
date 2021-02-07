<template>
  <div>
    <b-container style="font-family:'ヒラギノ角ゴシック'">
      <b-row align-v="center" class="justify-content-md-center" style="margin-bottom:5%;margin-top:5.5%">
        <b-col md="5">
          <h3 class="h3t">Technology</h3>
        </b-col>
        <b-col md="7" id="expl">
          <p>弊社が保有している技術には以下のような特許等がございます。</p>
          <p>折りの技術を用いて、お客様のニーズ、製品課題や社会課題を解決いたします。</p>
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
    </b-container>
  </div>
</template>

<script lang="ts">
import builder from '@/assets/ts/vue-builder';
import _ from 'lodash';

export default builder()
.withComponents({})
.withData({
  data() {
    return {}
  }  
})
.withLifecycles({
  mounted: function() {
  }
})
.build();
</script>

<style lang="sass">
.h3t
  font-size: 4vmax
  font-weight: bold
  font-family: "Arial Black"
#expl
  p
    font-size: 1vmax
    font-family: "ヒラギノ角ゴシック"
    margin: 0
    font-weight: bold
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
