<template>
  <div id="bg">
    <global-nav-bar></global-nav-bar>
    <b-row>
      <b-col cols="6" class="border-right" style="border-right;padding-right:5vw">
        <img src="@/assets/history.jpg" alt="history" style="width:30vw;height:30vw" align=right />
      </b-col>
      <b-col cols="6" style="padding-left:3vw;margin-top:0">
        <h3 class="h3h">History</h3>
        <div id="doc">
          <b-row v-for="(content,index) in contents" :key="index" id="item">
            <b-col cols="2" style="margin-bottom:0.2vmax">
              {{content.when}}              
            </b-col>
            <b-col cols="10">
              {{content.what}}
            </b-col>
          </b-row>  
        </div>
      </b-col>
    </b-row>
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
    const contents = [
      {when:"2015/06", what:"宇宙建築学サークルTNLを創立",},
      {when:"2017/03", what:"宇宙建築学サークルTNLを引き継ぎ",},
      {when:"2018/01", what:"Tech Lab Paakで活動開始",},
      {when:"2018/06", what:"Tech Lab Paak (リクルート)賞受賞",},
      {when:"2018/08", what:"株式会社OUTSENSE設立",},
      {when:"2018/09", what:"INCF(三菱総合研究所)技術賞受賞",},
      {when:"2018/09", what:"Todai to Texas(東京大学)賞受賞",},
      {when:"2019/02", what:"クラウドファンディング目標金額（300万）達成",},
      {when:"2019/03", what:"米国SXSWトレードショーにプロトタイプの展示",},
      {when:"2019/05", what:"つくば市助成金事業に採択",},
      {when:"2019/10", what:"アメリカでの国際宇宙学会に出展（JAXAブース内）",},
      {when:"2020/03", what:"大田区事業の推進（報告会）",},
      {when:"2020/07", what:"大田区立本羽田２丁目工場アパートに本社移転",},
      {when:"2020/08", what:"取締役2名を迎え、新体制へ",},
    ];
    return {contents}
  }  
})
.withLifecycles({
  mounted: function() {
    document.body.className = 'bodyh';
  }
})
.build();
</script>

<style lang="sass">
body.bodyh
  margin: 0px
  padding: 0px
  background-color: white
  overflow-y: no-content
  overflow-x: hidden
.h3h 
  font-size: 4vmax
  font-weight: bold
  font-family: "Arial Black"
  text-align: left
  margin-bottom: 5%
  margin-top: 0
#doc
  font-size: 1vmax
  font-family: "ヒラギノ角ゴシック"
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
