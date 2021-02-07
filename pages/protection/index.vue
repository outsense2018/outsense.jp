<template>
  <div>
    <b-container style="font-family:'ヒラギノ角ゴシック'">
      <h3 class="h3ad">Protection Business</h3>
      <div>
        <b-row  style="margin-bottom:5%" align-v="center">
          <b-col md="auto" sm="11"><p style="font-size:2vmax;font-weight:bold;margin:0;padding:0">防災事業 ｜</p></b-col>
          <b-col md="8" sm="11"><p style="font-size:1vmax;margin:0">折り技術と産業技術との掛け合わせに魅力を見出し、様々な分野の企業様との新規事業創出を行っております。折技術とあなたの技術の持つ可能性を考えてみませんか？</p></b-col>
        </b-row>
        <b-row style="margin-bottom:5%;font-size:1vmax">
          <b-col md="5" sm="10">
            <p style="font-weight:bold;margin-bottom:0.5vmax">社会課題解決型共同事業</p>
            <p style="margin-bottom:3vmax">製品開発委託・研究委託</p>
            <p style="font-weight:bold"><b-icon-chevron-double-right style="margin-right:0.5vw;"/>目的/目標</p>
            <ul>
              <li>災害時、現場での展開が即時に行える製品の提案</li>
            </ul>
            <p style="font-weight:bold"><b-icon-chevron-double-right style="margin-right:0.5vw;"/>具体的なアクションプラン</p>
            <ul>
              <li>毎年のように起きる大雨、地震、火災、台風、大雪などの自然災害に対し、地方公共団体と協力を密に取りながら対応を行う</li>
              <li>民間企業と協力しながら、災害時の課題に合わせた製品の開発を行う</li>
            </ul>
          </b-col>
          <b-col md="6" sm="10">
            <img src="@/assets/protectiontop.jpg" alt="トップ" style="width:100%" align=center />
          </b-col>
        </b-row>
      </div>
      <div class="blacktitle-ad" style="margin-bottom:3.5vw">
        <span style="margin-left:0.7vw">SERVICES</span>
      </div>
      <div align=center><img style="width:100%;margin-top:2vw" src="@/assets/adserviceflow.png" alt="image"/></div>
      <div class="blacktitle-ad" style="margin-bottom:3.5vw;margin-top:5%">
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
        title:"アウトドア施設（キャンプ）",
        url:"/kyanpu.gif",
        category:"自社アイデア/試作開発",
        detail:"グランピング用のテントは強風や大雨に弱く、破損の被害を未然に防ぐ仕組みが必要である。本キャンプ施設は形状を変化させることで床と屋根の用途を切り替えられるため、台風等の状況に合わせた臨機応変な対応が可能である。",
        company:"OUTSENSE 協業企業募集中",
        when:"May. 2019~",
      },
      {
        title:"折り畳みベット設計、試作品製作",
        url:"/bed.gif",
        category:"研究開発受託/試作品制作",
        detail:"コロナ禍においてベット需要の高まりを感じている中で、大田区内企業様から折り畳み式ベットの開発相談を受け、市場調査、設計、試作を行った。コロナ対策という観点から、床からの座面高さ、抗菌材料の利用、軽量化などを検討し、設計に落とし込んだ。",
        company:"機器メーカー様",
        when:"Apr. 2020",
      },
      {
        title:"発泡式即時展開構造物",
        url:"/hoipoi.jpg",
        category:"試作開発",
        detail:"緊急時に即座に展開する発砲式の展開構造物の研究開発を行っている。布とパネルを張り合わせ折り曲がり部を形成し、折り畳み可能なドーム形状を製作する。空気で硬化する発泡剤(ウレタン)を注入後、発砲と共に展開し、硬化することで構造物として自立する。",
        company:"OUTSENSE 協業企業募集中",
        when:"Mar. 2020~",
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
.h3ad
  font-size: 4vmax
  font-weight: bold
  font-family: "Arial Black"
  text-align: left
  margin-top: 5.5%
  margin-bottom: 5%
.blacktitle-ad
  background-color: black
  height: 3vw
  width: 30vw
  font-family: "Arial Black"
  color: white
  font-size: 2vw
  margin-right: 14vw
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
