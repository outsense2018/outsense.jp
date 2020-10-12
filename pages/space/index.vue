<template>
  <div>
    <global-nav-bar></global-nav-bar>
    <h3 class="h3s">SPACE BUSINESS</h3>
    <b-row style="margin-bottom:3vw">
      <b-col cols="6">
        <div class="smission">
          <span style="margin-left:0.7vw">SPACE MISSION</span>
        </div>
        <div style="margin-top:4vw;margin-bottom:3vw">
         <span class="missiontext">月面に住めないという常識を抜け出し,</span><br>
         <span class="missiontext">月面に人が暮らす時代をつくること</span>
        </div>
        <div style="font-size:1.2vmax;font-family:'ヒラギノ角ゴシック';padding-right:7vw">
          <p>私たちは宇宙での居住施設構築を目指し、ソガメ折りに代表されるような3次元方向に展開する（空間を広げたり縮めたりするのに適した）折り紙技術の研究を進めてきました。</p>
          <p>弊社独自の発明として、構造物を作ることを目的とした、厚みと剛性のある材料を用いた折り構造である、イシマツ折りを保有しています。</p>  
        </div>
      </b-col>
      <b-col align=left cols="6" style="padding-left:3vw;margin-top:0">
        <img class="imge1s" src="@/assets/spacetop.jpg" alt="image" />
      </b-col>
    </b-row>
    <b-row style="margin-bottom:5vw">
      <b-col align=left cols="6" style="margin-top:0">
        <img class="imge1s" src="@/assets/spaceconcept.gif" alt="image" />
      </b-col>
      <b-col cols="6">
        <div style="font-size:1vmax;font-family:'ヒラギノ角ゴシック';padding-right:2vw;vertical-align:middle;padding-left:2vw" align-self="center" >
          <span>私たちが目指すのは３次元展開構造物（折り紙技術）を用いて宇宙空間、特に月面で利用する(有人・無人含めた)施設を折り畳み可能にすることです。​​</span><br>
          <span>​基本的なコンセプトは輸送物の体積を減らすことによる輸送コストの削減になります。</span><br>
          <span>類似のコンセプトを持つ技術としてインフレータブル技術が挙げられますが、膜構造であるために挙動の不確定性や構造強度の弱さを持っており、それ単体での月面での運用には不向きと言えます。</span><br>
          <span>また、3DプリンティングをはじめとするISRU技術が遠隔操作技術等の発展と共に期待を集めていますが、製造環境を整える段階が必要であること、密閉性などの厳密性を担保するハードルが高いことから、初期フェーズでの主軸運用は現実的とは言えません。​</span><br>
          <span>折り紙技術は、数学的に定義された挙動の安定性と、面材を使うことによる構造強度が、宇宙空間での運用において大きな強みを持つため、初期フェーズでの施設構築スピードを加速させ、ひいては月面での様々なビジネスの基盤構築を進めることができます。​</span><br>
        </div>
      </b-col>
    </b-row>
    <div align=center cols="6" style="margin-top:0;margin-bottom:5vw">
      <img style="width:60vw" src="@/assets/sheldimage.png" alt="image" />
      <p text-align=center style="margin:2vw;font-weight:bold;font-family:'ヒラギノ角ゴシック'">3次元展開構造物 / 居住部内部イメージ</p>
    </div>
    <div class="smission" style="width:40vw;margin-bottom:1.5vw">
      <span style="margin-left:0.7vw">SPACE SERVICES</span>
    </div>
    <p style="font-family:'ヒラギノ角ゴシック';font-size:1.2vmax;font-weight:bold">宇宙ビジネス / 製造コンサルタント</p>
    <div class="explains">
      <p>宇宙居住に対しての知識提供 / 宇宙ミッションの組み立て / 宇宙の製造ノウハウを活かし、</p>
      <p>事業領域 / 事業規模を問わず、これから宇宙事業に参入していきたいという企業様の新事業創出 / 新製品開発のコンサルティングを行います。</p>  
    </div>
    <div align=left><img style="width:80vw;margin-top:2vw" src="@/assets/spacebusiness.PNG" alt="image"/></div>
    <div class="smission" style="width:40vw;margin-bottom:1.5vw;margin-top:5vw">
      <span style="margin-left:0.7vw">SPACE ROADMAP</span>
    </div>
    <div align=left><img style="width:80vw;margin-top:2vw" src="@/assets/future.PNG" alt="image"/></div>
    <hr>
    <p id="footers">
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
    return { }
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
    document.body.className = 'bodys'; 
  }
})
.build();
</script>

<style lang="sass">
body.bodys
  margin: 0px
  padding: 7%
  background-color: white
  overflow-x: hidden
  overflow-y: scroll
.h3s
  font-size: 3vmax
  font-family: "Arial Black"
  margin-top: 1%
  margin-bottom: 2%
  margin-left: -2%
.smission
  background-color: black
  height: 3vw
  font-family: "Arial Black"
  color: white
  font-size: 2vmax
  margin-right: 14vw
.missiontext
  font-size: 2vmax
  font-family: "ヒラギノ角ゴシック"
  font-weight: bold
.imge1s
  width: 40vw
  margin-bottom: 2vw
.explains
  p
    font-size: 1vmax
    font-family: "ヒラギノ角ゴシック"
    margin: 0
.vid2
  height: 12vw
  width: 21vw
#footers
  font-color: black
  padding-top: 0.5vw
  font-size: 0.8vmax
  text-align: right
  font-family: "Arial"
</style>
