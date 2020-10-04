<template>
  <div id="bg">
    <global-nav-bar></global-nav-bar>
    <b-row id="left">
      <b-col cols="6" style="padding-left:0">
        <img src="@/assets/top.jpg" alt="設備1" style="width:48vw;height:35vw" align=left />
      </b-col>
      <b-col cols="6" style="padding-left:3vw;margin-top:0;padding-right:4vw">
        <div id="doc">
          <h3 class="h3v">Vision</h3>
          <div id="change">
            <span>日本語</span><span>｜</span><span>ENGLISH</span>
          </div>
          <p class="pv">月面に住めないという常識を抜け出し月面に人が暮らす時代をつくること。</p>
          <p class="pv">私たちは世の中の常識を抜け出し社会をアップデートすることを目指しています。</p>
          <br>
          <p class="pv">私たちは宇宙建築というマニアックな学術分野に興味を持った学生の集まりから始まりました。宇宙に興味を持ったきっかけは、純粋な憧れ、特殊なフィールドとしての興味、ガンダム等の作品であったりと様々。ですが、強く共通していたのは人の未来を変える可能性を宇宙に感じていたことでした。</p>
          <p class="pv">私たちはその想いの根源がどこにあるのかを語り合い、「宇宙には現在の常識を抜け出す力がある」という結論を得ました。いま、宇宙開発の潮流が目まぐるしく変わる中で、人類は大きな分岐点に立っています。</p>
          <p class="pv">「地球を抜け出し宇宙に進むことで、人類の可能性を広げたい。」</p>
          <p class="pv">この想いを人生をかけてでも実現したいという「変わり者たち」によってOUTSENSEが作られました。</p>
        </div>
      </b-col>          
    </b-row>
    <div id="footer">
      <footer>
        <hr>
        <p>©2018- OUTSENSE inc.</p>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import GlobalNavBar from '@/components/GlobalNavBar.vue';
import builder from '@/assets/ts/vue-builder';
import _ from 'lodash';
import Icon from '@/components/Icon.vue';

export default builder()
.withComponents({ Icon, GlobalNavBar })
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
#bg
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
  margin: 1vmax 1vmax 3vmax 1vmax
#doc
  .pv
    font-weight: bold
    font-size: 1vmax
    font-family: "ヒラギノ角ゴシック"
    margin: 0.5vmax
  height: 8vw
#footer
  width: 100vw
  position: absolute
  bottom: 0
  right: 0
  padding-right: 3vw
  padding-left: 3vw
  font-color: black
  padding-top: 0.5vw
  font-size: 0.8vmax
  font-family: "Arial"
  text-align: right
</style>
