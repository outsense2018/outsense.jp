<template>
  <div class="container" id="bg">
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
  color: white
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
