<template>
  <div>
    <b-container style="font-family:'ヒラギノ角ゴシック'">
      <h3 class="h3s">Space Development</h3>
      <div>
        <b-row  style="margin-bottom:5%" align-v="center">
          <b-col md="auto" sm="11"><p style="font-size:2vmax;font-weight:bold;margin:0;padding:0">宇宙開発 ｜</p></b-col>
          <b-col md="8" sm="11"><p style="font-size:1vmax;margin:0">宇宙居住 / 宇宙ミッション策定 / 宇宙の製造技術のノウハウを活かし、事業領域を問わず民間企業の宇宙事業参入をサポートし、月面居住施設の実現を目指します。</p></b-col>
        </b-row>
        <b-row style="margin-bottom:5%;font-size:1vmax">
          <b-col md="5" sm="10">
            <p style="font-weight:bold;margin-bottom:0.5vmax">月面居住の実現に向けた共同研究開発事業</p>
            <p style="margin-bottom:3vmax">宇宙ビジネス構築・製造サポート</p>
            <p style="font-weight:bold"><b-icon-chevron-double-right style="margin-right:0.5vw;"/>目的/目標</p>
            <ul>
              <li>月面に住めないという常識を抜けだし、月面に人が暮らす時代をつくること</li>
            </ul>
            <p style="font-weight:bold"><b-icon-chevron-double-right style="margin-right:0.5vw;"/>具体的なアクションプラン</p>
            <ul>
              <li>民間企業の宇宙事業参入をサポートし、月面居住施設の実現を目指す</li>
              <li>3次元展開構造物の研究開発</li>
            </ul>
          </b-col>
          <b-col md="2" sm="0">
            
          </b-col>
          <b-col md="5" sm="11">
            <img src="@/assets/getumenkiti1316.jpg" alt="トップ" style="width:100%" align=right />
          </b-col>
        </b-row>
      </div>
      <div class="blacktitle" style="margin-bottom:3.5vw">
        <span style="margin-left:0.7vw">SERVICES</span>
      </div>
      <div align=center><img style="width:100%;margin-top:2vw" src="@/assets/spaceserviceflow.png" alt="image"/></div>
      <div class="blacktitle" style="margin-bottom:1.5vw;margin-top:5vw">
        <span style="margin-left:0.7vw">SPACE ROADMAP</span>
      </div>
      <div align=left><img style="width:100%;margin-top:2vw;margin-bottom:5%" src="@/assets/future.jpg" alt="image"/></div>
      <div class="blacktitle" style="margin-bottom:3.5vw">
        <span style="margin-left:0.7vw">PORTFOLIO</span>
      </div>
      <b-row>
        <b-col v-for="(content,index) in contents" :key="index" cols="4" id="item">
          <b-row cols="1" style="margin-bottom:8vw">
            <b-col><p id="title">{{content.title}}</p></b-col>
            <b-col><img id="img" :src="content.url" alt="image"/></b-col>
            <b-col><u><p id="category">{{content.category}}</p></u></b-col>
            <b-col>
              <p id="detail">{{content.detail}}</p>
              <p id="company">{{content.company}}<br>{{content.when}}</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <div id="comment">
        <p>OUTSENSEでは、常識を抜け出す サービス / 製品 を共に創り上げていく企業様を募集しております。</p>
        <p>是非、Contactページよりお問い合わせください。</p>
        <p>（※自社アイデアの サービス / 製品 に関しては、協業が決まり次第HP掲載を止めさせていただきます。）</p>
      </div>
      <div align=center>
        <router-link to="/contact">
          <b-button style="margin-bottom:3%" size="sm" squared variant="outline-secondary">
            <b-icon-play-fill></b-icon-play-fill>
            <span style="font-family:'Arial';margin-left:0.5vw">Contact</span>
          </b-button>
        </router-link>
      </div>
    </b-container>
  </div>
</template>

<script>
import builder from '@/assets/ts/vue-builder';
import _ from 'lodash';
import { BIcon, BIconChevronDoubleRight, BIconPlayFill } from 'bootstrap-vue'

export default builder()
.withComponents({ BIcon, BIconChevronDoubleRight, BIconPlayFill })
.withData({
  data() {
    const contents = [
      {
        title:"3次元展開構造物の展示品制作",
        url:"/deroito.jpg",
        category:"展示品制作",
        detail:"宇宙での居住施設構築を目的として開発している弊社の展開構造物の1/20スケール模型を納品した。デロイト様の「Greenhouse」というイノベーション創発施設で展示されている体験型コンテンツとして制作。",
        company:"デロイト トーマツ合同会社 様",
        when:"May. 2018",
      },
    ]
    return {contents}
  }  
})
.withLifecycles({
  mounted: function() {
  }
})
.build();
</script>

<style lang="sass">
.h3s
  font-size: 4vmax
  font-weight: bold
  font-family: "Arial Black"
  text-align: left
  margin-top: 5.5%
  margin-bottom: 5%
.blacktitle
  background-color: black
  height: 3vw
  width: 30vw
  font-family: "Arial Black"
  color: white
  font-size: 2vw
  margin-right: 14vw
.explain-s
  p
    font-size: 1vmax
    margin: 0
#item
  display: flex
  flex-wrap: wrap
  color: black
  font-family: "ヒラギノ角ゴシック"
  width: 80vw
#title
  font-size: 1.1vmax
  font-weight: bold
  margin-bottom: 2vw
#img
  width: 21vw
  height: 14vw
#category
  margin-top: 2.5vw
  font-size: 0.9vmax
  margin-bottom: 1.5vw
#detail
  max-width: 21vw
  min-height: 10vw
  font-size: 0.9vmax
#company
  font-size: 0.8vmax
#comment
  font-size: 1.3vmax
  font-weight: bold
  margin-bottom: 3%
  text-align: center
  p
    margin: 1px
</style>
