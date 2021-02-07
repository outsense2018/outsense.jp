<template>
  <div>
    <b-container style="font-family:'ヒラギノ角ゴシック'">
      <h3 class="h3ca">Contact / Access</h3>
      <b-row>
        <b-col md="6" sm="12" class="border-right" style="border-right;padding-right:2%;margin-bottom:5%">
          <div class="doc">
            <p>弊社サービス/商品に関するお問い合わせ、</p>
            <p>アルバイト/採用に関するお問い合わせ、取材に関するお問い合わせ等は、</p>
            <p>こちらのフォーム、または、電話よりお問い合わせください。</p>
          </div>
          <div class="gform">
            <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfp3PvarVG2-XEyU5Zw2eGOGYyfFAGIkgoXP37A4Lp7zMNy0g/formResponse">
              <label for="name">お名前 <span style="color:red">必須</span></label><br>
              <input id="name" type="text" name="entry.776773074" placeholder="" required><br>
              <label for="company">ご所属 <span style="color:red">必須</span></label><br>
              <input id="company" type="text" name="entry.1213510003" placeholder="企業名、学校名等をお書きください" required><br>
              <label for="email">メールアドレス <span style="color:red">必須</span></label><br>
              <input id="email" type="text" name="entry.790185578" placeholder="example@mail.co.jp　※返信時に利用します。お間違えのないようご注意ください" required><br>
              <label for="msg">お問合せ内容 <span style="color:red">必須</span></label><br>
              <textarea id="msg" name="entry.149388788" placeholder="お問合せ内容をご記入ください。" required></textarea><br>
              <b-button type="submit" value="送信" style="background-color:orange;" size="sm"><span style="font-size:0.8vmax">送信</span></b-button>
            </form>
          </div>
        </b-col>
        <b-col md="6" sm="12" style="padding-left:5%;">
          <div class="doc">
            <p>社名：株式会社OUTSENSE / OUTSENSE inc.</p>
            <p>住所：東京都大田区本羽田2-7-1-204</p>
            <p>最寄り駅：京浜急行線「糀谷駅」より徒歩10分</p>
            <p>電話番号：03-6715-1672</p>
            <p>定休日：水曜日</p>
          </div>
          <div class="ggmap"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.2310078324463!2d139.72772541523085!3d35.5479965802256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601860e231b7ba35%3A0x85835e7f18504280!2z44CSMTQ0LTAwNDQg5p2x5Lqs6YO95aSn55Sw5Yy65pys576955Sw77yS5LiB55uu77yX4oiS77yR!5e0!3m2!1sja!2sjp!4v1600670904472!5m2!1sja!2sjp" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import builder from '@/assets/ts/vue-builder';
import _ from 'lodash';

export default builder()
.withComponents({})
.withData({
  data() {
    return {}
  }  
})
.withLifecycles({
  mounted: function() {
  }
})
.build();
</script>

<style lang="sass">
.h3ca 
  font-size: 4vmax
  font-weight: bold
  font-family: "Arial Black"
  text-align: left
  margin-bottom: 2vw
  margin-top: 5.5%
.doc
  p
    font-size: 1vmax
    font-family: "ヒラギノ角ゴシック"
    margin: 0
    font-weight: bold
.ggmap
  position: relative
  padding-bottom: 56.25%
  margin-top: 1vw
  height: 0
  overflow: hidden
  iframe,object,embed
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
.gform
  margin-top: 1vw
  input
    margin-bottom: 0.5vw
    width: 100%
  textarea
    margin-bottom: 0.5vw
    width: 100%        
  font-size: 0.8vmax
  font-family: "ヒラギノ角ゴシック"
  border: solid 1px grey
  padding: 1vw
</style>
