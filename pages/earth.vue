<template>
  <div class="container" id="bg">
    <b-container margin-bottom="300">space</b-container>
    <img id="topimg" src="@/assets/top.jpg" alt="トップ画" width="1200" height="630" max-width=80%/>
    <b-form-group align="right" id="topbutton">
      <b-button
        :pressed="topFlag === 'HOUSE'"
        @click="topFlag = HOUSE"
      >HOUSE</b-button>
      <b-button
        :pressed="topFlag === 'TOWN'"
        @click="topFlag = TOWN"
      >TOWN</b-button>
      <b-button
        :pressed="topFlag === 'SPACE'"
        @click="topFlag = SPACE"
      >SPACE</b-button>
    </b-form-group>
    <b-form-group align="right" id=title>
      <div>
        <h2><span>常識</span>を超え、<span>想像</span>の先へ。</h2>
        <p>Produced by OUTSENSE inc.</p>
      </div>
    </b-form-group>
    <h3>OUR BUSINESS.</h3>
    <div id="business">
      <div>
        <h2><span style="color: blue">折り紙技術</span>を用いた</h2>
        <h2>共同研究開発・新規事業創出</h2>
      </div>
      <b-row cols="4">
        <b-col>
          <img src="@/assets/biz_dummy.jpg" alt="biz" width="250" height="250" max-width=auto/>
          <p style="margin-bottom: 100px">Ⅰ : コンサルティング</p>
        </b-col>
        <b-col>
          <img src="@/assets/biz_dummy.jpg" alt="biz" width="250" height="250" max-width=auto style="margin-top: 100px"/>
          <p>Ⅱ : 設計・試作</p>
        </b-col>
        <b-col>
          <img src="@/assets/biz_dummy.jpg" alt="biz" width="250" height="250" max-width=auto/>
          <p style="margin-bottom: 100px">Ⅲ : 研究・開発</p>
        </b-col>
        <b-col>
          <img src="@/assets/biz_dummy.jpg" alt="biz" width="250" height="250" max-width=auto  style="margin-top: 100px"/>
          <p>Ⅳ : 製品化</p>
        </b-col>
        <b-col style="margin-bottom: 0px">
          <img src="@/assets/yazirushi.png" alt="biz" width="1000" height="100" max-width=auto  style="margin-top: 10px"/>
        </b-col>
      </b-row>
    </div>
    <b-form-group align="right" id="bizButton">
      <b-button>
        <icon type="play" style="color: black;  cursor: pointer;" />
        <span>DETAIL</span>
      </b-button>
    </b-form-group>
    <h3>What can ORIGAMI-Tech</h3>
    <div id="tech">
      <b-row cols="3">
        <b-col>
          <b-container style="">
            <p align="center">A</p>
            <hooper :vertical="true" style="height: 300px" :itemsToShow="2" :centerMode="true" :infiniteScroll="true">
              <slide>
                <img align="center" src="@/assets/item1.png" alt="biz" height="200" max-width=auto/>
              </slide>
              <slide>
                <img align="center" src="@/assets/item2.png" alt="biz" height="200" max-width=auto/>
              </slide>
              <slide>
                <img align="center" src="@/assets/item3.png" alt="biz" height="200" max-width=auto/>
              </slide>
              <slide>
                <img align="center" src="@/assets/item4.png" alt="biz" height="200" max-width=auto/>
              </slide>
            </hooper>
            <div class="card">
              <div class="card-body" align="center">
                Chair
              </div>
            </div>
          </b-container>
        </b-col>
        <b-col class="row align-items-center d-flex justify-content-center">
          <video autoplay loop muted controls poster="@/assets/biz_dummy.jpg" style="width: 300px">
            <source src="@/assets/AtoB_sample.mp4" type="video/mp4"/>
          </video>
          <b-form-group align="right" id="bizButton">
            <b-button>
              <icon type="play" style="color: black;  cursor: pointer;" />
              <span>Solution</span>
            </b-button>
          </b-form-group>
        </b-col>
        <b-col>
          <b-container style="">
            <p align="center">B</p>
            <hooper :vertical="true" style="height: 300px" :itemsToShow="2" :centerMode="true" :infiniteScroll="true">
              <slide>
                <img align="center" src="@/assets/item1.png" alt="biz" height="200" max-width=auto/>
              </slide>
              <slide>
                <img align="center" src="@/assets/item2.png" alt="biz" height="200" max-width=auto/>
              </slide>
              <slide>
                <img align="center" src="@/assets/item3.png" alt="biz" height="200" max-width=auto/>
              </slide>
              <slide>
                <img align="center" src="@/assets/item4.png" alt="biz" height="200" max-width=auto/>
              </slide>
            </hooper>
            <div class="card">
              <div class="card-body" align="center">
                Box
              </div>
            </div>
          </b-container>
        </b-col>
      </b-row>
    </div>
    <footer class=" p-2 text-center text-muted">
      <div>
        <h4 align="left">OUR COMPANY</h4>
        <b-row>
          <b-col>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FteamOUTSENSE%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>      
          </b-col>
          <b-col>
            <a  height="500" class="twitter-timeline" href="https://twitter.com/teamOUTSENSE?ref_src=twsrc%5Etfw">Tweets by teamOUTSENSE</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </b-col>
          <b-col>
            
          </b-col>
        </b-row>
      </div>
      <p>＠OUTSENSE.inc</p>
    </footer>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css'; 
import builder from '@/assets/ts/vue-builder';
import _ from 'lodash';
import Icon from '@/components/Icon.vue';

export default {
  data() {
    return {
      slides: 5,
      topFlag: "TOWN",
    };
  },
  components: {
    Hooper, Slide, Icon
  }
}
</script>

<style lang="sass">
#bg 
  background-image: url("~@/assets/bg.jpg")
  h3
    padding-top: 40px
    padding-left: 20px
    margin-bottom: -4px
    font-size: 45px
    letter-spacing: 3px
    color: white
#title 
  padding-top: 40px
  padding-left: 30%
  font-family: sans-serif
  div
    padding-right: 10px
    background-color: white
    padding-top: 10px
    h2
      font-weight: bold
      font-size: 50px
      letter-spacing: 8px
      span
        color: green
    p 
      font-weight: bold
#business
  background-color: white
  margin-right: 50px
  padding-top: 20px
  div
    margin-bottom: 20px
    h2
      margin-bottom: -2px
      margin-left: 20px
      font-weight: bold
      font-size: 25px
      letter-spacing: 4px
  .row
   margin-top: 10px
   p
    margin-left: 10px
    margin-top: 20px
#bizButton
  margin-right: 10%
  button
    background-color: white
  span
    font-size: 25px
    letter-spacing: 4px
    color: black
#tech
  background-color: white
  margin-right: 50px
  padding-top: 20px
  p
    font-size: 50px
    font-weight: bold
    margin-bottom: 30px
  .card
    margin: 30px
  .card-body
    font-size: 30px
    border: 2px solid   
  .hooper-slide 
    background-color: white
    padding: 20px
    display: flex
    justify-content: center
    align-items: center
    color: #fff
    border: 2px solid #fff
    font-size: 30px
    border-radius: 10px
    .hooper-slide.is-current
      transform: scale(1.2)
#topbutton 
  padding-top: 5px
  padding-bottom: 20px
  button 
    background-color: white
    color: black
#topimg 
  padding-top: 30px
  width: 100%
footer
  margin-top: 100px
  border: 10px solid white
  div
    border-color:white
    color: black
    h4
      font-size: 30px
      margin-left: 20px
    .row
      margin-left: 50px
      margin-top: 30px


  background-color: gray
  p
    color: black
</style>
