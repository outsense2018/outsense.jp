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
        <p class="pe">折り技術と産業技術との掛け合わせに魅力を見出し、様々な分野の企業様との新規事業創出を行っております。折り技術とあなたの技術の持つ可能性を考えてみませんか？</p>
      </b-col>
    </b-row>
    <u><p class="case">{{"Case1.&nbsp;新規事業創出サポート&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}}</p></u>
    <p style="font-family:'ヒラギノ角ゴシック';font-size:1vmax;font-weight:bold">折り技術コンサルタント / 新規事業開発支援</p>
    <div class="explaine">
      <p>クライアント企業様の技術と弊社の折り技術を掛け合わせることで、新規事業創出/新製品開発のご提供を行います。</p>
      <p>具体的なアイデアはないが、自社技術に新しい付加価値を付けたい、新商品を開発したい企業様におすすめのプランです。</p>
      <p>例）一緒に新規事業を考えてほしい/他企業とは何か違う面白いサービス・製品が欲しい/折りの技術で何ができるのか確かめたい</p>
    </div>
    <div align=left><img class="imge1" src="@/assets/earthcase1.jpg" alt="image"/></div>
    <u><p class="case">{{"Case2.&nbsp;製品開発/製品課題解決サポート&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}}</p></u>
    <p style="font-family:'ヒラギノ角ゴシック';font-size:1vmax;font-weight:bold">共同研究開発/業務受託</p>
    <div class="explaine">
      <p>企業様の解決したいと考える社会課題、製品課題に対して弊社の折り技術を活かしたアイディアを製品化していきます。</p>
      <p>企画/サービスの立案や営業はできるが、ものづくりのノウハウをお持ちでない企業におすすめのプランです。</p>
      <p>例）折り技術を用いて〇〇ような製品を製造できないか/製品に〇〇ような課題があり、研究開発を頼めないか/折りの技術や製品を用いたサービスを提供したい</p>
    </div>
    <div align=left><img class="imge1" src="@/assets/earthcase2.jpg" alt="image"/></div>
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
        <div align=left><video class="imge2" autoplay muted playsinline loop src="@/assets/expand.mp4" /></div>
      </b-col>
      <b-col align-self="center">
        <div class="explaine2">
          <p style="font-weight:bold">シンプルながらユニークな動きが機能を生む</p>
          <br>
          <p>一か所を動かすだけで力が連動し全体が動く。</p>
          <p>形の変化を利用することにより、</p>
          <p style="font-weight:bold">複数の機能を組み合わせる</p>
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
            <p style="margin-top:1vw;font-weight:bold;font-size:1.2vmax">{{chara.title}}</p>
            <hr>
            <ul>
              <li>{{chara.frase}}</li>
              <br>
              <li>応用用途例
                <ul>
                  <li>{{chara.detal1}}</li>
                  <li>{{chara.detal2}}</li>
                  <li v-if="index==3">{{chara.detal3}}</li>
                </ul>  
              </li>
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
      <b-col><video class="vid2" muted playsinline src="@/assets/demo.mp4" controls /></b-col>
      <b-col><video class="vid2" muted playsinline src="@/assets/moving.mp4" controls /></b-col>
      <b-col><video class="vid2" muted playsinline src="@/assets/kuRage.mp4" controls /></b-col>
      <b-col><video class="vid2" muted playsinline src="@/assets/AtoB_sample.mp4" controls /></b-col>
    </b-row>
    <hr>
    <p id="footere">
      <a href="https://twitter.com/teamOUTSENSE"><img style="height:2.2vw;margin-right:1vw" src="@/assets/Twitter_Logo_B.png" alt="ロゴ"  /></a>
      <a href="https://www.facebook.com/teamOUTSENSE/"><img style="height:1.5vw;margin-right:1.2vw" src="@/assets/f_logo_Blue.png" alt="ロゴ"  /></a>
      <span style="vertical-align:middle">©2018- OUTSENSE inc.</span>
    </p>
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
        title:"収納性",
        frase:"コンパクトに折り畳み",
        detal1:"輸送物",
        detal2:"仮設住居" 
      },
      { 
        img:"/tuiju.jpg", 
        title:"柔軟性",
        frase:"柔らかさの調整",
        detal1:"スプリング機構",
        detal2:"クッション材" 
      },
      { 
        img:"/kinou.jpg", 
        title:"構造強度",
        frase:"折り目による構造強度の強化",
        detal1:"屋根",
        detal2:"耐圧容器",
      },
      { 
        img:"/design.jpg", 
        title:"デザイン性",
        frase:"幾何学的な折りのデザイン",
        detal1:"ブースデザイン",
        detal2:"家具" ,
        detal3:"照明器具" ,
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
  font-family: "Arial Black"
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
  margin-bottom: 0
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
  width: 80vw
  margin-bottom: 2vw
.imge2
  height: 20vw
  width: 37vw
.vid2
  height: 12vw
  width: 21vw
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
