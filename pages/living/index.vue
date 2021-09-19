<template>
  <div>
    <b-container style="font-family:'ヒラギノ角ゴシック'">
      <h3 class="h3l">Living Products</h3>
      <div>
        <b-row  style="margin-bottom:5%" align-v="center">
          <b-col md="auto" sm="11"><p style="font-size:2vmax;font-weight:bold;margin:0;padding:0">生活製品 ｜</p></b-col>
          <b-col md="8" sm="11"><p style="font-size:1vmax;margin:0">折り技術と産業技術との掛け合わせに魅力を見出し、様々な分野の企業様との新規事業創出を行っております。折技術とあなたの技術の持つ可能性を考えてみませんか？</p></b-col>
        </b-row>
        <b-row style="margin-bottom:5%;font-size:1vmax">
          <b-col md="5" sm="10">
            <p style="font-weight:bold;margin-bottom:0.5vmax">共同研究開発/新規事業創出サポート事業</p>
            <p style="margin-bottom:3vmax">製品開発委託・研究委託</p>
            <p style="font-weight:bold"><b-icon-chevron-double-right style="margin-right:0.5vw;"/>目的/目標</p>
            <ul>
              <li>ライフスタイルの変化に対し、折による変形で暮らしに寄り添う製品の提案を行う</li>
              <li>ライフサイクルの変化に適応できる製品を製造することで、SDGsに貢献する</li>
            </ul>
            <p style="font-weight:bold"><b-icon-chevron-double-right style="margin-right:0.5vw;"/>具体的なアクションプラン</p>
            <ul>
              <li>住空間の製品を製造する企業と共に、現代の暮らしに合わせた新規事業の創出、新製品の開発を行う</li>
            </ul>
          </b-col>
          <b-col md="6" sm="11">
            <img src="@/assets/livingtop.jpg" alt="トップ" style="width:100%" align=center />
          </b-col>
        </b-row>
      </div>
      <div class="blacktitle-l" style="margin-bottom:3.5vw">
        <span style="margin-left:0.7vw">SERVICES</span>
      </div>
      <div align=center><img style="width:100%;margin-top:2vw" src="@/assets/livingtop.png" alt="image"/></div>
      <div class="blacktitle-l" style="margin-bottom:3.5vw;margin-top:5%">
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
        title:"剛性素材の折り畳み研究開発",
        url:"/ym.gif",
        category:"共同研究開発",
        detail:"新規事業領域の開拓として、メーカー様の素材技術を活かした新規事業の立案 / 一般には折り畳めない素材を折る技術の研究開発 / その技術を用いた製品の試作開発を推進している。",
        company:"ヤマハ発動機 様",
        when:"Apr. 2020~",
      },
      {
        title:"折り畳み式4D空間",
        url:"/ota.gif",
        category:"自社製品開発",
        detail:"展開収納で輸送と組立ての省コスト化を目指した体験設備。パネルに複数の取換え可能な設備が埋め込まれ、様々な空間を演出する。過去の試作では、映像に連動して温度や匂いを制御し、五感を使った映像体験を提供した。",
        company:"OUTSENSE 協業企業募集中",
        when:"Mar 2020~",
      },
      // {
      //   title:"折り畳み角柱の設計、試作品制作",
      //   url:"/ota.gif",
      //   category:"研究開発受託/試作品制作",
      //   detail:"平面に折り畳まれた状態から2mの高さまで展開する6角形の角柱を制作した。折り目を付与することによって決まった形に変化する収納展開の再現性が期待できる。",
      //   company:"大手重工メーカー様",
      //   when:"Feb 2020",
      // },
      {
        title:"反響を制御する折り紙壁",
        url:"/oto.jpg",
        category:"自社アイデア/試作開発",
        detail:"折りの幾何学性を有した壁は反射する音を均一に拡散させ、音場に統一感を与えることができると考えている。吸音材では音エネルギーが損失するが、折りのパネルで反射を制御すれば臨場感を失わずに音を響かせることができる。",
        company:"OUTSENSE 協業企業募集中",
        when:"Dec. 2019~",
      },
      {
        title:"折り畳みタイヤの設計提案",
        url:"/taiya.jpg",
        category:"試作品制作/図面納品",
        detail:"展開収納することができる変形可能なタイヤの設計提案、および、試作物の作成、試作物の図面提供を行った。折りのパターンを変化させることで、特定部位における強度を変化させることができる。",
        company:"大手化工メーカー様",
        when:"Nov. 2019",
      },
      {
        title:"ドーム形状照明設計/試作",
        url:"/sakase.jpg",
        category:"試作品制作/施工提案",
        detail:"サカセアドテック様の三軸織を用いた、ドーム構造の設計提案、プロトタイプ作成および施工提案を行った。曲面折りによって、型枠を用いず1枚の平面材でドーム形状を維持できる。",
        company:"サカセアドテック 様",
        when:"Sep. 2019",
      },
      {
        title:"植物工場間引き自動化折り機構",
        url:"/plant.jpg",
        category:"自社アイデア/試作開発",
        detail:"折りの機構を用いることで、間引き作業の簡易化が可能だと考えている。植物の成長に応じてパネルが展開し植物の間隔が広がることで、植替えの工数が削減できる。また取外し式のパネルであれば清掃作業の簡易化も期待できる。",
        company:"OUTSENSE 協業企業募集中",
        when:"Oct. 2019~",
      },
      {
        title:"折り紙による壁面装飾",
        url:"/dnp.gif",
        category:"展示品制作/図面納品",
        detail:"J-WAVE様のイベント内でDNP様担当のブース壁面の装飾道具を設計。壁面に凹凸を表現し、輸送時には2m×6mから2m×0.5mに収納される。また、DNP様企業内展示会では数点の展示品製作も行った。",
        company:"DNP 大日本印刷 様",
        when:"Sep. 2019",
      },
      {
        title:"展開式プライベート空間",
        url:"/kurage.gif",
        category:"自社製品開発",
        detail:"「空間を折りたたむ」というコンセプトで、空間の使い方を瞬時に切り替える製品を開発中。例えば、オープン性の高いコワーキングスペースにドーム状の仕切りを展開することで、プライベート性の高い空間も共存できる。",
        company:"OUTSENSE 協業企業募集中",
        when:"Aug. 2019~",
      },
      {
        title:"ユニットの連結機構の提案",
        url:"/mw.jpg",
        category:"研究開発受託/試作品制作",
        detail:"足場の平面化ができないという特殊環境下において2つのユニットを接続する際に課題となった「上下・左右方向のねじれ」に対応できるジョイント/ハニカム構造の設計提案および原理検証用の模型製作を行った。",
        company:"大手住宅メーカー様",
        when:"Oct. 2018",
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
.h3l
  font-size: 4vmax
  font-weight: bold
  font-family: "Arial Black"
  text-align: left
  margin-top: 5.5%
  margin-bottom: 5%
.blacktitle-l
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
