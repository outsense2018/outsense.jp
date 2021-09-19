<template>
  <div>
    <b-container style="font-family:'Noto Sans JP'">
      <h3 class="h3v" align="center">
        PROJECT
      </h3>
      <b-row>
        <b-col v-for="(content,index) in pcontents" :key="index" cols="4" style="margin-bottom:10%">
          <b-row cols="1" style="margin-bottom:0" @click="$bvModal.show(content.id)">
            <b-col><p id="title">{{content.title}}</p></b-col>
            <b-col><img id="img" :src="content.url" alt="image"/></b-col>
            <b-col><p id="category">{{content.category}}</p>
                  <hr style="margin:0;padding:0;height:1px" color="grey" width="80%"></b-col>
            <b-col>
              <p id="company">{{content.company}}<br>{{content.when}}</p>
            </b-col>
          </b-row>
          <b-modal class="d-inline" size="lg" :id="content.id" hide-footer>
            <b-row>
              <b-col md="2" sm="4">{{content.title}}</b-col>
              <b-col md="2" sm="4">{{content.detailcategory}}</b-col>
              <b-col md="2" sm="4">{{content.term}}</b-col>
              <b-col md="6" sm="12"></b-col>
              <b-col md="6" sm="12">
                <img id="img" :src="content.url" alt="image"/>
                <br>
                {{content.category}}
                <br>
                <p id="company">{{content.company}}<br>{{content.when}}</p>
              </b-col>
              <b-col md="6" sm="12">
                {{content.detailtitle}}<br>
                概要：<br>
                {{content.detail}}<br>
                バリュー：<br>
                {{content.value}}<br>
                業務内容：<br>
                {{content.works}}
              </b-col>
            </b-row>
          </b-modal>
        </b-col>
      </b-row> 
    </b-container>
  </div>
</template>
  
<script>
import builder from '@/assets/ts/vue-builder';
import _ from 'lodash';
import { BIcon, BIconChevronRight, BIconPlayFill, BIconHandIndex, BIconPersonFill } from 'bootstrap-vue'

export default builder()
.withComponents({ BIcon, BIconChevronRight, BIconPlayFill, BIconHandIndex, BIconPersonFill })
.withData({
  data() {
    const pcontents = [
      {
        id:"1",
        title:"事業創出",
        url:"/deroito.jpg",
        category:"3次元展開構造物オブジェクト",
        company:"デロイトトーマツ合同会社",
        when:"May. 2018",
        detailcategory:"Complex Modeling",
        term:"期間：1ヵ月",
        detailtitle:"GreenHouse展示用のイシマツ折りプロトタイプ",
        detail:"SXSWで展示したプロトタイプと同様の技術を用いた卓上展示品の開発委託",
        value:"展示品の提案を行い、設計、外注、組立、塗装",
        works:"・イメージＣＧ作成・図面及び３Ｄモデル作成・組み立て及び塗装作業・説明資料作成、イラスト作成"
      },
      {
        id:"2",
        title:"課題解決",
        url:"/deroito.jpg",
        category:"宇宙居住施設に関する知識提供",        
        company:"デロイトトーマツ合同会社",
        when:"May. 2019",
        detailcategory:"Complex Modeling",
        term:"期間：1ヵ月",
        detailtitle:"GreenHouse展示用のイシマツ折りプロトタイプ",
        detail:"SXSWで展示したプロトタイプと同様の技術を用いた卓上展示品の開発委託",
        value:"展示品の提案を行い、設計、外注、組立、塗装",
        works:"・イメージＣＧ作成・図面及び３Ｄモデル作成・組み立て及び塗装作業・説明資料作成、イラスト作成"
      },
      {
        id:"3",
        title:"共同開発",
        url:"/deroito.jpg",
        category:"3次元展開構造物オブジェクト",        
        company:"デロイトトーマツ合同会社",
        when:"May. 2018",
        detailcategory:"Complex Modeling",
        term:"期間：1ヵ月",
        detailtitle:"GreenHouse展示用のイシマツ折りプロトタイプ",
        detail:"SXSWで展示したプロトタイプと同様の技術を用いた卓上展示品の開発委託",
        value:"展示品の提案を行い、設計、外注、組立、塗装",
        works:"・イメージＣＧ作成・図面及び３Ｄモデル作成・組み立て及び塗装作業・説明資料作成、イラスト作成"
      },
    ];
    return {pcontents}
  }  
})
.withProperties({
  methods: {
    show(id) {
      this.$bvModal.show(id)
    },
  },
})
.withLifecycles({
  mounted: function() {
  }
})
.build();
</script>

<style lang="sass">
.h3v
  margin-top: 10%
  font-size: unquote("min(48px, 3vmax)")
  font-weight: bold
  text-align: center
  margin-bottom: 10%
#title
  margin: 0 0 0 0
  margin-right: unquote("calc(50% - min(80px, 5vmax))")
  padding: 1vw 3vw 1vw 3vw
  font-size: unquote("min(24px, 1.5vmax)")
  font-weight: bold
  background-color: black
  color: white
#img
  width: 90%
#category
  color: black
  font-weight: bold
  margin-top: 2.5vw
  font-size: unquote("min(16px, 1vmax)")
  margin-bottom: 0
#company
  color: black
  margin-top: 2.5vmax
  font-size: 0.8vmax
</style>
