<template>
  <div id="bgp">
    <global-nav-bar></global-nav-bar>
    <h3 class="h3p">Portfolio</h3>
    <b-row>
      <b-col v-for="(content,index) in contents" :key="index" cols="4" id="item">
        <b-row cols="1" style="margin-bottom:100px">
          <b-col><p id="title">{{content.title}}</p></b-col>
          <b-col><img id="img" :src="content.url" alt="image"/></b-col>
          <b-col><u><p id="category">{{content.category}}</p></u></b-col>
          <b-col><p id="detail">{{content.detail}}</p></b-col>
          <b-col><p id="company">{{content.company}}<br>{{content.when}}</p></b-col>
        </b-row>
      </b-col>
    </b-row>
    <div id="comment">
      <p>OUTSENSEでは、常識を抜け出すサービス/製品を共に創り上げていく企業様を募集しております。</p>
      <p>是非、contactページよりお問い合わせください。</p>
      <p>（※自社アイデアのサービス製品に関しては、協業は決まり次第HP掲載を止めさせていただきます。）</p>
    </div>
    <div align=center>
      <router-link to="/contact">
        <b-button style="margin-bottom:3%" size="md" squared variant="outline-secondary">
          <b-icon-play-fill></b-icon-play-fill>
          <span style="font-family:'Arial';margin-left:0.5vw">Contact</span>
        </b-button>
      </router-link>
    </div>
    <hr>
    <p id="footerp">©2018- OUTSENSE inc.</p>
  </div>
</template>

<script lang="ts">
import GlobalNavBar from '@/components/GlobalNavBar.vue';
import builder from '@/assets/ts/vue-builder';
import _ from 'lodash';
import { BIcon, BIconPlayFill } from 'bootstrap-vue'

export default builder()
.withComponents({ GlobalNavBar, BIcon, BIconPlayFill })
.withData({
  data() {
    const contents = [
      {
        title:"3次元展開構造物オブジェクト",
        url:"/deroito.jpg",
        category:"展示品制作/納品",
        detail:"宇宙での居住施設構築を目指す当社展開構造物の1/20模型を納品した。デロイト様のGreenhouseというイノベーション創発施設にて展示されている。",
        company:"デロイトトーマツ",
        when:"May. 2018",
      },
      {
        title:"宇宙居住施設に関する知識提供",
        url:"/sorabatake.jpg",
        category:"宇宙建築コンサルティング業務",
        detail:"宇宙居住の知識を理解するための小冊子の作成におけて、弊社は、宇宙建築の分野の知識提供、WSの企画、運営、最終成果物となる小冊子をつくる際のアドバイザー業務等を担当した。",
        company:"Panasonic＋soranome",
        when:"Mar. 2019",
      },
      {
        title:"折り紙ブース装飾壁面",
        url:"/dnp.gif",
        category:"展示品製作/図面納品",
        detail:"Jwave様のイベント内においてDNP様が担当されていたブース壁面の装飾を行い、壁面の凹凸の再現と2m×6mの壁面を2m×0.5m程度に収納し輸送する事ができるように設計した。また、DNP様企業内展示会では、アーチ、机、オブジェクトなどの製作も行った。",
        company:"大日本印刷",
        when:"Sep. 2019",
      },
      {
        title:"ドーム形状照明設計/試作",
        url:"/sakase.jpg",
        category:"試作品製作/施工提案",
        detail:"サカセアドテック様の三軸織の材料を用いた、ドーム形状の設計提案、プロトタイプの作成、製品化した際の施工提案を行った。ドーム形状製作する際には、形状を保持するために、型枠を使用していたが、弊社は、曲面織を用い、1枚の平面形状からドーム形状を作ることを可能にした。",
        company:"サカセアドテック",
        when:"Sep. 2019",
      },
      {
        title:"折り畳みタイヤの設計提案",
        url:"/buri.jpg",
        category:"試作品製作/納品・試作品図面納品",
        detail:"展開収納することができる変形可能なタイヤの設計提案、および、試作物の作成、試作物の図面の提供を行った。折りのパターンにより、部位における強度の変化も可能である。",
        company:"ブリヂストン社",
        when:"Nov. 2019",
      },
      {
        title:"折り畳み角筒の設計、試作品製作",
        url:"/ihi.gif",
        category:"試作品製作/納品・試作品図面納品",
        detail:"平面に折り畳まれた状態から2mの高さまで展開する6角形の角柱を製作した。折り目を付与することによって、決まった形に変化する再現性のある収納展開が期待できる。",
        company:"大手企業様",
        when:"Feb. 2020",
      },
      {
        title:"剛性素材の折り畳み研究開発",
        url:"/yamaha.gif",
        category:"共同研究開発",
        detail:"剛性（厚み）を持った材料の新規事業領域の開拓として、企業様の技術を活かした新規事業の立案、および、その素材での折り畳みの研究開発（剛性のある材料を折りたたむ）、その技術を用いた製品の試作開発を推進している。",
        company:"大手素材メーカー様",
        when:"Apr. 2020~",
      },
      {
        title:"折りたたみ建材の研究開発",
        url:"/misawa.jpg",
        category:"共同研究開発",
        detail:"建材メーカー企業様が自社製品開発を行う際に折り紙の技術に着目されており、折り紙の専門知識をもつ弊社にコンサルティングを依頼していただいた。家具/建材で生活空間にイノベーションを創出するようなプロダクト開発を目指している。",
        company:"LIXIL",
        when:"Apr. 2020~",
      },
      {
        title:"折り畳み式4D空間試作品の製作",
        url:"/ota.gif",
        category:"展示品製作/納品",
        detail:"展開収納が可能なため、輸送がしやすく、施工を非常に簡易な体験ブースである。複数の機能の設備が埋め込まれており、設備を取り換えることで様々な空間を演出することができる。映像を流しながら、温度や匂いを制御することが可能なので、映像の中にいるようなリアルな体験を提供することができる。",
        company:"OUTSENSE 協業企業募集中",
        when:"Mar. 2020",
      },
      {
        title:"折り畳みベット設計、試作品製作",
        url:"/bed.gif",
        category:"研究開発受託/試作品/納品",
        detail:"コロナ禍においてベット需要の高まりを感じている中で、大田区内企業様から折り畳み式のベットの開発相談を受け、市場調査、設計、試作を行った。コロナ対策を施したベットということで、床からの座面を高めに設定し、抗菌材料、軽量化などを検討し、設計に落とし込んだ。",
        company:"品川測器",
        when:"Apr. 2020",
      },
      {
        title:"発泡式即時展開構造物",
        url:"/hoipoi.jpg",
        category:"試作品/製作",
        detail:"アニメ「ドラゴンボール」に出てくる「ほいぽいカプセル」を連想させる発泡式の即時展開構造物の研究開発を行っている。布とパネルを張り合わせ折り曲がる部分を作り、折り畳み可能なドーム形状を製作する。ウレタン注入後、発泡し展開が行われ、硬化すると構造物として自立する。",
        company:"OUTSENSE 協業企業募集中",
        when:"Mar. 2020~",
      },
      {
        title:"kuRage",
        url:"/kurage.gif",
        category:"自社製品開発",
        detail:"空間を折りたたみ式の構造物を用いて展開/収納できるようにすることによって、空間が持つ機能を瞬時に切り替えることを可能にする。これによりコワーキングスペースや企業内のオープンスペース化によって、プライベートな作業を行うための空間が少ないという課題解決を行う。",
        company:"OUTSENSE",
        when:"Aug. 2019~",
      },
      {
        title:"アウトドア施設（キャンプ）",
        url:"/kyannpu.gif",
        category:"自社アイデア/試作開発",
        detail:"床の形状を変化させることによって空間を作ったり、椅子を創出したり、子供たちの遊び場を設けたりと様々な用途での利用ができる備え付けアウトドア施設を提供する。",
        company:"OUTSENSE 協業企業募集中",
        when:"May. 2019~",
      },
      {
        title:"折り紙パーティション",
        url:"/part.gif",
        category:"自社アイデア",
        detail:"デザイン性、収納性に優れた、折りを用いたパーティションの制作を検討している。展開収納の比率を変えることによって、高さや幅の調整が、変更することができるため、時と場合によって空間を使い分けることができる。",
        company:"OUTSENSE 協業企業募集中",
        when:"Oct. 2019~",
      },
      {
        title:"植物工場間引き自動化折り機構",
        url:"/plant.jpg",
        category:"自社アイデア/試作開発",
        detail:"単純な折りの機構を用いることで、間引きの作業を簡易化する方法の研究開発を行っている。植物の成長スピードに合わせながらパネルが展開し、間隔を広げることで、植え替えの工数が省けるため、人件費や設備費が削減できる、ほか、パレットの取り外しも楽なため、清掃にかかる作業も減らすことが期待できる。",
        company:"OUTSENSE 協業企業募集中",
        when:"Oct. 2019~",
      },
      {
        title:"反響を制御する折り紙壁",
        url:"/oto.jpg",
        category:"自社アイデア/試作開発",
        detail:"折りの幾何学的なパターンを用いることで、当たった音を均一に拡散させることができ、音場に統一感を与えることができると考えている。吸音材を用いるとエネルギーを吸収してしまうが、折りのパネルを用いれば、臨場感を失わらずに音を響かせることができると考えている。",
        company:"OUTSENSE 協業企業募集中",
        when:"Dec. 2019~",
      },
    ];
    return {contents}
  }  
})
.withLifecycles({
  mounted: function() {
    document.body.className = 'bodyp';
  }
})
.build();
</script>

<style lang="sass">
body.bodyp
  margin: 0px
  padding: 0px
  background-color: white
  overflow-x: hidden
  overflow-y: scroll
.h3p
  margin-top: 10%
  font-size: 4vmax
  font-weight: bold
  font-family: "Arial Black"
  text-align: center
  margin-bottom: 5%
#item
  display: flex
  flex-wrap: wrap
  color: black
  font-family: "ヒラギノ角ゴシック"
  width: 80vw
#bgp
  background-color: white
  color: black
  width: 80vw
  height: 100vw
  margin: 10%
#img
  width: 21vw
  height: 14vw
#title
  font-size: 1vmax
  font-weight: bold
  margin-bottom: 2vw
#category
  margin-top: 1.5vw
  font-size: 1vmax
#detail
  max-width: 21vw
  height: 12vw
  font-size: 1vmax
#company
  font-size: 0.8vmax
#comment
  font-size: 1.3vmax
  font-weight: bold
  margin-bottom: 3%
  text-align: center
  p
    margin: 1px
#footerp
  font-color: black
  padding-top: 0.5vw
  font-size: 0.8vmax
  text-align: right
  font-family: "Arial"
</style>
