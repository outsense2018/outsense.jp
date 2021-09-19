<template>
  <div>
    <b-container style="font-family:'Noto Sans JP'">
      <b-row style="margin-bottom:5%">
        <b-col style="margin:7% 0">
          <h3 class="h3ca">CONTACT</h3>
          <h1 style="font-size:1.5vmax;margin-bottom:3%">お問い合わせ</h1>
        </b-col>
        <b-col><div class="l-kv"/></b-col>
      </b-row>
      <!-- <div class="gform">
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfp3PvarVG2-XEyU5Zw2eGOGYyfFAGIkgoXP37A4Lp7zMNy0g/formResponse">
          <b-row>
            <b-col md="3" sm ="6"><label for="name">お名前 <span class="icon">必須</span></label></b-col>        
            <b-col md="9" sm ="6"><input id="name" type="text" name="entry.776773074" placeholder="お名前をお書きください" required><br><br><br></b-col>
            <b-col md="3" sm ="6"><label for="companyname">会社名（学校名） <span class="icon">必須</span></label></b-col>
            <b-col md="9" sm ="6"><input id="companyname" type="text" name="entry.1213510003" placeholder="企業名、学校名等をお書きください" required><br><br><br></b-col>
            <b-col md="3" sm ="6"><label for="department">所属部署名</label></b-col>
            <b-col md="9" sm ="6"><input id="department" type="text" name="entry.53799832" placeholder="所属部署名をお書きください"><br><br><br></b-col>
            <b-col md="3" sm ="6"><label for="role">役職名</label></b-col>
            <b-col md="9" sm ="6"><input id="role" type="text" name="entry.372637766" placeholder="役職名をお書きください"><br><br><br></b-col>            
            <b-col md="3" sm ="6"><label for="email">メールアドレス <span class="icon">必須</span></label></b-col>
            <b-col md="9" sm ="6"><input id="email" type="text" name="entry.790185578" placeholder="example@mail.co.jp　※返信時に利用します。お間違えのないようご注意ください" required><br><br><br></b-col>
            <b-col md="3" sm ="6"><label for="phone">電話番号 <span class="icon">必須</span></label></b-col>
            <b-col md="9" sm ="6"><input id="phone" type="text" name="entry.1428935762" placeholder="例:XXX-XXX-XXX" required><br><br><br></b-col>
            <b-col md="3" sm ="6"><label for="msg">お問合せ内容 <span class="icon">必須</span></label></b-col>
            <b-col md="9" sm ="6"><textarea style="height:min(148px, 8vmax)" id="msg" name="entry.149388788" placeholder="お問合せ内容をご記入ください。" required></textarea><br><br><br></b-col>
            <b-col  class="text-center"><b-button squared type="submit" value="送信" style="background-color:black;" size="sm">送信</b-button></b-col>
          </b-row>
        </form>
      </div> -->
      <div class="gform" align="center">
        <iframe src="https://go.outsense.jp/l/940523/2021-09-01/m3k843" width="100%" height="500" type="text/html" frameborder="0" allowTransparency="true" style="border:0;"></iframe>
      </div> 
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

@import url(http://fonts.googleapis.com/earlyaccess/notosansjp.css);
<style lang="sass">
.l-kv
  position: absolute
  z-index: -1
  top: 0
  right: 0
  bottom: 0
  width: 170%
  background: #f2f2f2
.h3ca 
  font-size: unquote("min(48px, 3vw)")
  font-weight: bold
  text-align: left
  margin-bottom: 2vw
  margin-top: 5.5%
  letter-spacing: 0.5vw;
.doc
  p
    font-size: 1vmax
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
  .icon
    font-size: unquote("min(12px, 0.8vw)")
    background-color: #e0e0e0
  font-size: unquote("min(16px, 1vw)")
  font-weight: bold
  padding: 3vw 10vw
  background-color: #f2f2f2
</style>
