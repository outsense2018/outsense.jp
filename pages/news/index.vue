<template>
  <div id="bgn">
    <global-nav-bar></global-nav-bar>
    <h3 class="h3n">News</h3>
    <div class="docn">
      <b-row class="rown" align-v="center" style="border-bottom:3px solid grey;" v-for="(content,index) in contents" :key="index">
        <b-col cols="2">
          <span style="vertical-align:middle">
            {{content.day}}
          </span>
        </b-col>
        <b-col cols="8" style="font-weight:bold">
          {{content.title}}
        </b-col>
        <b-col cols="2">
          <div align=right>
            <b-button
              style="margin-bottom:3%;margin-left:1%"
              size="sm"
              squared variant="outline-secondary"
              :href="content.url">
              <span style="font-family:'Arial';margin-left:0.5vw;">DETAIL<b-icon-chevron-right style="margin-left:0.5vw"/></span>
            </b-button>
          </div>
        </b-col>
      </b-row>
    </div>
    <hr>
    <p id="footern">
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
import { BIcon, BIconChevronRight } from 'bootstrap-vue'

export default builder()
.withComponents({ GlobalNavBar, BIcon, BIconChevronRight })
.withData({
  data() {
    const contents = [
      {
        day:"18 Oct, 2020",
        title:"事務所を東京都大田区本羽田に移転しました！",
        url:"https://goo.gl/maps/VcMsiLkdRWZzzU1F9",
      },
      {
        day:"19 Dec, 2019",
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
    return {contents}
  }  
})
.withLifecycles({
  mounted: function() {
    document.body.className = 'bodyn';
  }
})
.build();
</script>

<style lang="sass">
body.bodyn
  margin: 0px
  padding: 0px
  background-color: white
  overflow-x: hidden
  overflow-y: scroll
.h3n
  margin-top: 10%
  font-size: 4vmax
  font-weight: bold
  font-family: "Arial Black"
  text-align: center
  margin-bottom: 7%
#bgn
  background-color: white
  color: black
  width: 80vw
  margin: 10%
.docn
  font-size: 1vmax
  font-family: "ヒラギノ角ゴシック"
  .rown
    margin-top: 0.5vw
    margin-bottom: 3vw
    padding-bottom: 3vw
#footern
  font-color: black
  padding-top: 0.5vw
  font-size: 0.8vmax
  text-align: right
  
  font-family: "Arial"
</style>
