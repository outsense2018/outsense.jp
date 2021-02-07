<template>
  <div class="bgc">
    <global-nav-bar></global-nav-bar>
    <b-row>
      <b-col cols="6" class="border-right" style="border-right;padding-right:5vw;height:80%">
        <b-row style="margin-bottom:2vw">
          <b-col><img src="@/assets/office.jpg" alt="オフィス" style="width:30vw;height:18vw" align=right /></b-col>
        </b-row>
        <b-row id="bottom">
          <b-col cols="6"><img src="@/assets/3Dprint11.jpg" alt="3Dプリンター" style="width:14vw;height:14vw" align=right /></b-col>
          <b-col cols="6"><img src="@/assets/rasercutter.jpg" alt="レーザーカッター" style="width:16vw;height:14vw" align=right /></b-col>
        </b-row>
      </b-col>
      <b-col cols="6" style="padding-left:3vw;margin-top:0">
        <h3 class="h3c">Company</h3>
        <div id="doc">
          <p>事業内容</p>
          <span>【地上事業】</span>
          <ul>
            <li>折り紙の技術を利用した新規事業開発/共同研究開発事業/デザイン業務</li>
            <li>折り紙ソリューション/折りに関するノウハウの提供（研究委託事業）</li>
            <li>各種試作品製作（アイディアのヒアリング、機械設計、試作品製作）</li>
          </ul>
          <span>【宇宙事業】</span>
          <ul>
            <li>宇宙分野での新規事業開発/共同研究開発事業/コンサルティング業務</li>
            <li>宇宙分野での居住に関する情報提供</li>
            <li>宇宙分野に関する情報収集</li>
            <li>宇宙建築の設計提案/プランニング、模型作成</li>
          </ul>
          <p>特許</p>
          <ul>
            <li>薄膜筒状展開に関する折り紙の特許技術（独占通常実施権取得）</li>
            <li>剛体筒状展開に関する折り紙の技術特許（特許出願中）</li>
            <li>回転軸と折り紙を組み合わせた技術特許（特許出願中）</li>
          </ul>
          <p>設備</p>
          <ul>
            <li>レーザー加工</li>
            <li>3Dプリント</li>
            <li>その他工具</li>
          </ul>
        </div>
      </b-col>
    </b-row>
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
    document.body.className = 'bodyc';
  }
})
.build();
</script>

<style lang="sass">
body.bodyc
  margin: 0px
  padding: 0px
  background-color: white
  overflow-y: no-content
  overflow-x: hidden
.h3c 
  font-size: 4vmax
  font-weight: bold
  font-family: "Arial Black"
  text-align: left
  margin-bottom: 1vw
  margin-top: -2%
#doc
  height: 50%
  span
    font-size: 1vmax
    font-family: "ヒラギノ角ゴシック"
    margin: 0
  p
    font-size: 1vmax
    font-family: "ヒラギノ角ゴシック"
    margin: 0
    font-weight: bold
  li
    font-size: 0.9vmax
    font-family: "ヒラギノ角ゴシック"
    margin: 0
.bgc
  background-color: white
  color: black
  margin: 8%
</style>
