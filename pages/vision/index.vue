<template>
  <div class="bgv">
    <global-nav-bar></global-nav-bar>
    <b-row id="left">
      <b-col cols="6" style="padding-left:0">
        <img src="@/assets/spacetop.jpg" alt="月面基地" style="height:35vw;" align=left />
      </b-col>
      <b-col cols="6" style="padding-left:3vw;margin-top:0;padding-right:4vw">
        <div id="doc">
          <h3 class="h3v">Vision</h3>
          <div id="change">
            <span>日本語</span><span>｜</span><span style="color:grey">ENGLISH</span>
          </div>
          <p class="pv">月面に住めないという常識を抜け出し月面に人が暮らす時代をつくること。</p>
          <br>
          <p class="pv">私たちは世の中の常識を抜け出し社会をアップデートすることを目指しています。</p>
          <p class="pv">私たちは宇宙建築というマニアックな学術分野に興味を持った学生の集まりから始まりました。宇宙に興味を持ったきっかけは、純粋な憧れ、特殊なフィールドとしての興味、ガンダム等の作品であったりと様々。ですが、強く共通していたのは人の未来を変える可能性を宇宙に感じていたことでした。</p>
          <p class="pv">私たちはその想いの根源がどこにあるのかを語り合い、「宇宙には現在の常識を抜け出す力がある」という結論を得ました。いま、宇宙開発の潮流が目まぐるしく変わる中で、人類は大きな分岐点に立っています。</p>
          <br>
          <p class="pv">「地球を抜け出し宇宙に進むことで、人類の可能性を広げたい。」</p>
          <br>
          <p class="pv">この想いを人生をかけてでも実現したいという「変わり者たち」によってOUTSENSEが作られました。</p>
        </div>
      </b-col>          
    </b-row>
    <Foot />
  </div>
</template>

<script lang="ts">
import GlobalNavBar from '@/components/GlobalNavBar.vue';
import Foot from '@/components/GlobalFooter.vue';
import builder from '@/assets/ts/vue-builder';
import _ from 'lodash';

export default builder()
.withComponents({ GlobalNavBar, Foot })
.withData({
  data() {
    return {}
  }  
})
.withLifecycles({
  mounted: function() {
    document.body.className = 'bodyv';
  }
})
.build();
</script>

<style lang="sass">
body.bodyv
  margin: 0px
  padding: 0px
  background-color: white
  overflow-y: no-content
  overflow-x: hidden
.h3v
  font-size: 4vmax
  font-weight: bold
  font-family: "Arial Black"
  text-align: left
  margin-bottom: 5%
  margin-top: 0
.bgv
  background-color: white
  color: black
  width: 80vw
  height: 100vw
  margin: 10%
#left 
  position: absolute
  left: 0
  width: 100%
  padding-right: 0
  margin-left: 0
#change
  span
    font-size: 1vmax
    font-family: "ヒラギノ角ゴシック"
  margin: 1vw 1vw 2vw 1vw
#doc
  .pv
    font-weight: bold
    font-size: 1vmax
    font-family: "ヒラギノ角ゴシック"
    margin: 0.5vmax
  height: 8vw
</style>
