<template>
  <div>
    <global-nav-bar></global-nav-bar>
    <h3 class="h3e">ORIGAMI BUSINESS</h3>
    <b-row>
      <b-col cols="4">
        <div class="service">
          <span style="margin-left:0.7vw">SERVICES</span>
        </div>
      </b-col>
      <b-col align=left cols="8" style="padding-left:3vw;margin-top:0">
        <p class="pe">折り紙を研究していく中で、折り紙構造物の可能性を強く感じ、宇宙だけでなく、地上での折り紙産業の創出を目指し、地上での利用を目指した技術開発も行なっております。</p>
      </b-col>
    </b-row>
    <u><p class="case">{{"Case1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}}</p></u>
    <p style="font-family:'ヒラギノ角ゴシック';font-size:1vmax">折り技術コンサルタント / 新規事業開発支援</p>
    <div class="explaine">
      <p>企業様の得意とする技術と弊社の折り技術を活かした新事業創出/新製品開発のアイデアの提供を行います。</p>
      <p>製造/研究の技術ノウハウをお持ちで、自社での製品開発を行える企業様におすすめのプランです。</p>
      <p>例）一緒に新規事業を考えてほしい/他企業とは何か違う面白いサービス・製品が欲しい/折りの技術で何ができるのか確かめたい</p>
    </div>
    <div align=left><img class="imge1" src="@/assets/top.jpg" alt="image"/></div>
    <u><p class="case">{{"Case2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}}</p></u>
    <p style="font-family:'ヒラギノ角ゴシック';font-size:1vmax">共同研究開発 / 業務受託（OEM）</p>
    <div class="explaine">
      <p>企業様の解決したいと考える社会課題、製品課題に対して弊社の折り技術を活かしたソリューションをご提案いたします。</p>
      <p>企画/サービスの立案や営業はできるが、ものづくりのノウハウをお持ちでない企業におすすめのプランです。</p>
      <p>例）折りを取り入れてこのような製品を製造できないか/製品にこのような課題があり、研究開発を頼めないか/折りの技術/製品を用いたサービスを提供したい</p>
    </div>
    <div align=left><img class="imge1" src="@/assets/top.jpg" alt="image"/></div>
    <div align=right>
      <b-button v-for="(content,index) in contents" :key="index"
        style="margin-bottom:3%;margin-left:1%"
        size="md"
        squared variant="outline-secondary"
        :to="content.url">
          <b-icon-play-fill></b-icon-play-fill>
          <span style="font-family:'Arial';margin-left:0.5vw">{{content.page}}</span>
      </b-button>
    </div>
    <div class="service" style="margin-right:60%">
      <span style="margin-left:0.7vw;">ORIGAMI SOLUTIONS</span>
    </div>
    <b-row style="margin-top:2vw">
      <b-col>
        <div align=left><img class="imge2" src="@/assets/top.jpg" alt="image"/></div>
      </b-col>
      <b-col align-self="center">
        <div class="explaine2">
          <p style="font-weight:bold">動きに必要な機構をシンプルにする</p>
          <br>
          <p>一か所を動かすだけで力が連動し全体が動く </p>
          <p>折り目に沿った一定の動きで制御が容易</p>
          <p style="font-weight:bold">決まった形から決まった形へ形状が変化する</p>
        </div>
      </b-col>
    </b-row>
    <div align=center style="margin:3.5vw">
      <b-icon-chevron-double-up variant="dark" font-scale="6" flip-v></b-icon-chevron-double-up>
    </div>
    <b-row align-v="stretch" class="tecChara">
      <b-col v-for="(chara,index) in charas" :key="index" cols="6" align-self="start">
        <b-row align-v="start">
          <b-col cols="5"
          style="border:1px solid grey;height:15vw;align-items:center;display:flex;position:relative;text-align:center;justify-content:center;margin:0.5vw">
            <div align=center>
              <img :src="chara.img" style="height:10vw" alt="image"/>
            </div>
          </b-col>
          <b-col cols="6" style="margin-right:1vw">
            <p style="margin-top:1vw">{{chara.title}}</p>
            <hr>
            <ul>
              <li>{{chara.detal1}}</li>
              <li>{{chara.detal2}}</li>
              <li v-if="index==2">{{chara.detal3}}</li>
            </ul>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <div align=right>
      <b-button v-for="(content,index) in partContents" :key="index"
        style="margin-bottom:3%;margin-left:1%"
        size="md"
        squared variant="outline-secondary"
        :to="content.url">
          <b-icon-play-fill></b-icon-play-fill>
          <span style="font-family:'Arial';margin-left:0.5vw">{{content.page}}</span>
      </b-button>
    </div>
    <div class="service" style="margin-right:60%;margin-bottom:2vw">
      <span style="margin-left:0.7vw;">VIDEOS</span>
    </div>
    <b-row cols="4" >
      <b-col><iframe src="https://www.youtube.com/embed/KbSF0BoPO08" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
      <b-col><iframe src="https://www.youtube.com/embed/KbSF0BoPO08" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
      <b-col><iframe src="https://www.youtube.com/embed/KbSF0BoPO08" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
      <b-col><iframe src="https://www.youtube.com/embed/KbSF0BoPO08" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
    </b-row>
    <hr>
    <p id="footere">©2018- OUTSENSE inc.</p>
  </div>
</template>

<script lang="ts">
import GlobalNavBar from '@/components/GlobalNavBar.vue';
import builder from '@/assets/ts/vue-builder';
import _ from 'lodash';
import { BIcon, BIconPlayFill, BIconCapslock, BIconChevronDoubleUp } from 'bootstrap-vue'

export default builder()
.withComponents({ GlobalNavBar, BIcon, BIconPlayFill, BIconCapslock, BIconChevronDoubleUp })
.withData({
  data() {
    const contents = [
      { url:"/technology", page:"Technology", },
      { url:"/portfolio", page:"Portfolio", },
      { url:"/contact", page:"Contact", },
    ];
    const charas = [
      { 
        img:"/costcut.jpg", 
        title:"省コスト化",
        detal1:"単純化によるコストカット効果",
        detal2:"パーツの連結化により組み立て/施工が容易になるコストカット効果" 
      },
      { 
        img:"/tuiju.jpg", 
        title:"変形追従性",
        detal1:"折り目に沿った一定の動きで制御が容易",
        detal2:"力に対する動きのレスポンスが早い" 
      },
      { 
        img:"/kinou.jpg", 
        title:"機能付与",
        detal1:"折り目を入れ動きを制御することで、機能を付与することができる",
        detal2:"流体(液体、気体)/強度/反射(熱、光)の制御" ,
        detal3:"動きの付与（展開収納、スプリング、回転）" ,
      },
      { 
        img:"/design.jpg", 
        title:"デザイン性",
        detal1:"幾何学的なシンプルさが生み出す見た目の良さ",
        detal2:"動きの面白さ" ,
      },
    ];
    return { contents, charas }
  }  
})
.withProperties({
  computed: {
    partContents() {
      return this.contents.filter(x => x.page != "Contact" );
    },
  },
})
.withLifecycles({
  mounted: function() {
    document.body.className = 'bodye'; 
  }
})
.build();
</script>

<style lang="sass">
body.bodye
  margin: 0px
  padding: 7%
  background-color: white
  overflow-x: hidden
  overflow-y: scroll
.h3e
  font-size: 3vmax
  font-family: "Arial Black"
  margin-top: 1%
  margin-bottom: 2%
  margin-left: -2%
.service
  background-color: black
  height: 3vw
  font-family: "Arial"
  color: white
  font-size: 2vmax
.pe
  font-weight: bold
  font-size: 1.1vmax
.case
  font-size: 1.5vmax
  font-weight: bold
  font-family: "Arial"
  letter-spacing: 0.2vmax
  margin-bottom: 0.5vw
.explaine
  margin-left: 1vw
  p
    font-size: 1vmax
    font-family: "ヒラギノ角ゴシック"
    margin: 0
.explaine2
  margin-left: 3vw
  p
    font-size: 1.5vmax
    font-family: "ヒラギノ角ゴシック"
    margin: 0
.imge1
  margin-top: 2vw
  height: 40vw
  width: 80vw
  margin-bottom: 2vw
.imge2
  height: 20vw
  width: 37vw
.tecChara
  font-family: "ヒラギノ角ゴシック"
  margin-bottom: 2vw
#footere
  font-color: black
  padding-top: 0.5vw
  font-size: 0.8vmax
  text-align: right
  font-family: "Arial"
</style>
