<template>
  <div>
    <div>
      <img src="@/assets/newtop.jpg" alt="トップ" style="width:100%" align=center />
    </div> 
    <b-container>
      <h3 class="h3n">News</h3>
      <div class="docn">
        <b-row class="rown" align-v="center" style="border-bottom:3px solid grey;" v-for="(content,index) in contents" :key="index">
          <b-col cols="2">
            <span style="vertical-align:middle">
              {{content.day}}
            </span>
          </b-col>
          <b-col cols="7" style="font-weight:bold;font-size:1vmax">
            {{content.title}}
          </b-col>
          <b-col cols="3">
            <div align=center>
              <b-button
                size="sm"
                squared variant="outline-secondary"
                :href="content.url"
                target="_blank" rel="noopener noreferrer">
                <span style="font-family:'Arial';margin-left:0.5vw;font-size:1vmin;vertical-align:middle">DETAIL<b-icon-chevron-right style="margin-left:0.5vw;"/></span>
              </b-button>
            </div>
          </b-col>
        </b-row>
      </div>
      <b-row style="margin-top:7%">
        <b-col md="6" sm="12">
          <img src="@/assets/spacetop.jpg" alt="月面基地" style="width:100%" align=left />
        </b-col>
        <b-col md="6" sm="12" style="padding-left:3vw;margin-top:0;padding-right:4vw">
          <div id="docv">
            <h3 class="h3v">Vision</h3>
            <p class="pv" style="font-size:1vmax">世の中の常識を抜け出し社会をアップデートすること</p>
            <p class="pv" style="font-size:1vmax;margin-bottom:1vmax">月面に住めないという常識を抜け出し月面に人が暮らす時代をつくること</p>
            <p class="pv">私たちは宇宙建築というマニアックな学術分野に興味を持った学生の集まりから始まりました。宇宙に興味を持ったきっかけは、純粋な憧れ、特殊なフィールドとしての興味、ガンダム等の作品であったりと様々。ですが、強く共通していたのは人の未来を変える可能性を宇宙に感じていたことでした。</p>
            <p class="pv">私たちはその想いの根源がどこにあるのかを語り合い、「宇宙には現在の常識を抜け出す力がある」という結論を得ました。いま、宇宙開発の潮流が目まぐるしく変わる中で、人類は大きな分岐点に立っています。</p>
            <p class="pv">「地球を抜け出し宇宙に進むことで、人類の可能性を広げたい。」</p>
            <p class="pv">この想いを人生をかけてでも実現したいという「変わり者たち」によってOUTSENSEが作られました。</p>
          </div>
        </b-col>          
      </b-row>
      <h3 class="h3b">Business</h3>
      <b-row align-v="center">
        <b-col md="4" sm="12" style="border:1px solid black">
          <b-row cols="1" align-v="center">
            <b-col style="padding:0"><router-link to="/space"><img class="imgb" src="@/assets/utyuu-img.jpg" alt="image"/></router-link></b-col>
            <b-col><p id="titleb" style="color:#00B0F0">宇宙</p></b-col>
            <b-col style="background-color:#DEEBF7;"><p id="categoryb" style="color:#00B0F0;">月面での暮らしの実現</p></b-col>
            <b-col id="detailb">
              <p>月面居住の実現に向けた共同研究開発事業</p>
              <p>宇宙ビジネス構築・製造サポート</p>                
            </b-col>
          </b-row>
        </b-col>
        <b-col md="4" sm="12" style="border:1px solid black">
          <b-row cols="1" align-v="center">
            <b-col style="padding:0"><router-link to="/living"><img class="imgb" src="@/assets/seikatu-img.jpg" alt="image"/></router-link></b-col>
            <b-col><p id="titleb" style="color:#92D050">生活</p></b-col>
            <b-col style="background-color:#E2F0D9;"><p id="categoryb" style="color:#70AD47;">ライフスタイルの変化に寄り添う製品の提案</p></b-col>
            <b-col id="detailb">
              <p>共同研究開発/新規事業創出サポート事業</p>
              <p>製品開発委託・研究委託</p>   
            </b-col>
          </b-row>
        </b-col>
        <b-col md="4" sm="12" style="border:1px solid black">
          <b-row cols="1" align-v="center">
            <b-col style="padding:0"><router-link to="/protection"><img class="imgb" src="@/assets/bousai-img.jpg" alt="image"/></router-link></b-col>
            <b-col><p id="titleb" style="color:#B457E7">防災</p></b-col>
            <b-col style="background-color:#F0DEFA;"><p id="categoryb" style="color:#B457E7;">災害時に即時展開できる製品の提案</p></b-col>
            <b-col id="detailb">
              <p>社会課題解決型共同事業</p>
              <p>製品開発委託・研究委託</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <!-- <div align=right style="margin:3vw 0;">
        <b-button v-for="(content,index) in rinks" :key="index"
          style="margin-bottom:3%;margin-left:1%"
          size="sm"
          squared variant="outline-secondary"
          :to="content.url">
            <b-icon-play-fill></b-icon-play-fill>
            <span style="font-family:'Arial';margin:0 0.2vw;">{{content.page}}</span>
        </b-button>
      </div> -->
      <h3 class="h3b">Solution</h3>
      <div style="margin-bottom:3vmax">
        <img src="@/assets/solution1.png" alt="課題解決" style="width:100%;margin-bottom:6vmax;margin-top:1.5vmax" align=center />
        <img src="@/assets/solution2.png" alt="課題解決" style="width:100%" align=center />
      </div>
      <div id="commenttop">
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
import { BIcon, BIconChevronRight, BIconPlayFill } from 'bootstrap-vue'

export default builder()
.withComponents({ BIcon, BIconChevronRight, BIconPlayFill })
.withData({
  data() {
    const contents = [
      {
        day:"27 Dec, 2020",
        title:"TXN系列全国6局ネット「辛坊×ホリエモン 宇宙はこんなに近かった!!」にて弊社が取り上げられました！",
        url:"https://www.tv-osaka.co.jp/sp/uchu_sp/",
      },
      {
        day:"18 Oct, 2020",
        title:"事務所を東京都大田区本羽田に移転しました！",
        url:"https://goo.gl/maps/v3WgnLDkdLK2WkeW9",
      },
      {
        day:"09 Dec, 2019",
        title:"フィリピンで行われた「Hyper Interdisciplinary Conference」にてベストプレゼンター賞をいただきました！",
        url:"https://global.lne.st/news/jp/2019/12/09/hicph-report/?fbclid=IwAR3MGOUsFDQcIcJSzHL5BnoFZiDv8Uq71UHXKOq9NXEHsHgQcYsdwvX7zMI",
      },
      {
        day:"21 Oct, 2019",
        title:"第70回IAC(国際宇宙会議)のJAXAブースにてプロトタイプの展示を行いました！",
        url:"https://aerospacebiz.jaxa.jp/exhibition/2019/iac2019/",
      },
      {
        day:"20 Aug, 2019",
        title:"大田区の2019年度「スタートアップとものづくり企業の連携創出実証実験事業」に採択されました！",
        url:"https://lne.st/2019/08/20/ota-city2019/?fbclid=IwAR2isJFtrWT0uIMKyNFJhoF38NgV9bXbtiIib2vAnapz-9eLut2UBUULceA",
      },
      {
        day:"05 Jun, 2019",
        title:"2019年度「いばらき宇宙ビジネス支援事業」に採択されました！",
        url:"https://www.pref.ibaraki.jp/kikaku/kagaku/kokusai/documents/documents/koufu0607.pdf",
      },
      {
        day:"15 Mar, 2019",
        title:"クラウドファンディングで目標金額の300万円を達成しました！",
        url:"https://camp-fire.jp/projects/119111/activities/74556#main",
      },
    ];
    const rinks = [
      { url:"/technology", page:"Technology", },
      { url:"/portfolio", page:"Portfolio", },
      { url:"/contact", page:"Contact", },
    ];
    return {contents, rinks}
  }  
})
.withLifecycles({
  mounted: function() {
  }
})
.build();
</script>

<style lang="sass">
.h3n
  margin-top: 7%
  font-size: 4vmax
  font-weight: bold
  font-family: "Arial Black"
  text-align: center
  margin-bottom: 7%
.h3v
  font-size: 4vmax
  font-weight: bold
  font-family: "Arial Black"
  text-align: left
  margin-bottom: 5%
  margin-top: 0
.h3b
  margin-top: 4%
  font-size: 4vmax
  font-weight: bold
  font-family: "Arial Black"
  text-align: left
  margin-bottom: 3%
.docn
  max-height: 50vh
  overflow-y: scroll
  overflow-x: hidden
  font-size: 0.8vmax
  font-family: "ヒラギノ角ゴシック"
  .rown
    margin-top: 0.5vw
    margin-bottom: 3vw
    padding-bottom: 3vw
#change
  span
    font-size: 1vmax
    font-family: "ヒラギノ角ゴシック"
  margin: 1vw 1vw 2vw 1vw
#docv
  .pv
    font-weight: bold
    font-size: 0.8vmax
    font-family: "ヒラギノ角ゴシック"
    margin: 0.3vmax
.imgb
  width: 100%
.imgb:hover
  opacity: 0.5
#titleb
  margin: 0.3vmax
  font-size: 1.5vmax
  text-align: center
  font-family: "ヒラギノ角ゴシック"
#categoryb
  font-size: 1vmax
  text-align: center
  font-family: "ヒラギノ角ゴシック"
  vertical-align: middle
  margin: 0.5vmax
#detailb
  margin: 2vmax 0
  p
    margin: 0
    font-size: 0.8vmax
    text-align: center
    font-family: "ヒラギノ角ゴシック"
#commenttop
  font-size: 1vmax
  font-weight: bold
  margin-bottom: 3%
  text-align: center
  p
    margin: 1px    
</style>
