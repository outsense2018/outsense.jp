<template>
  <div>
    <b-container>
      <div class="footbar" align=center>
        <div style="padding-top:3vmax;background-color:black">
          <div align=center style="margin:0;padding:0;background-color:white;width:min(320px, 20vmax);font-size:min(32px, 2vmax);color:black">CONTACT</div>
        </div>
        <div style="margin-top:3vmax;margin-bottom:2vmax">
          <p style="margin-bottom:0;font-size:min(32px, 2vmax)">お気軽にお問い合わせください。</p>
          <p style="margin-bottom:0;font-size:min(16px, 1vmax)">（例：折り技術を活用して新規事業を立ち上げたい、折り技術でプロダクトを改良したい、等）</p>
        </div>
        <div>
          <b-row class="justify-content-md-center">
            <b-col sytle="padding:3vmax" md="5" sm="11"><b-button squared type="button"  style="background-color:black;" size="lg" block >資料ダウンロードはこちらへ</b-button></b-col>
            <b-col sytle="padding:3vmax" md="5" sm="11"><b-button squared type="button"  style="background-color:black;" size="lg" block >サービスのご依頼はこちらへ</b-button></b-col>
          </b-row>
        </div>
        <hr color="white" width="90%" style="margin:2vmax 0">
        <b-row align-v="end" style="padding-bottom:3vmax">
          <b-col cols="3">
            <div style="margin:auto">
              <img style="height:min(48px, 3vmax);" src="@/assets/rogo-black.png" alt="ロゴ" />
            </div>
          </b-col>
          <b-col cols="6">
            <div align=center>
              <b-row id="idlinks">
                <b-col cols="3"><a href="/strength" target="_blank" rel="noopener noreferrer">STRENGTH</a></b-col>
                <b-col cols="3"><a href="/service" target="_blank" rel="noopener noreferrer">SERVICE</a></b-col>
                <b-col cols="3"><a href="/project" target="_blank" rel="noopener noreferrer">PROJECT</a></b-col>
                <b-col cols="3"><a href="/company" target="_blank" rel="noopener noreferrer">COMPANY</a></b-col>
                <b-col cols="4"><a href="/member" target="_blank" rel="noopener noreferrer">MEMBER</a></b-col>
                <b-col cols="4"><a href="/news" target="_blank" rel="noopener noreferrer">NEWS</a></b-col>
                <b-col cols="4"><a href="/contact" target="_blank" rel="noopener noreferrer">CONTACT</a></b-col>
              </b-row>
            </div>
          </b-col>
          <b-col cols="3" align-self="end" style="font-size:min(12px, 0.8vmax)">
            ©2018 OUTSENSE inc.
          </b-col>
          <!-- <a href="https://twitter.com/teamOUTSENSE" target="_blank" rel="noopener noreferrer"><img style="height:1.5vw;margin-right:1vw" src="@/assets/Twitter_Logo_B.png" alt="ロゴ"  /></a>
          <a href="https://www.facebook.com/teamOUTSENSE/" target="_blank" rel="noopener noreferrer"><img style="height:1.5vw;margin-right:1.2vw" src="@/assets/f_logo_Blue.png" alt="ロゴ"  /></a>
          <span style="vertical-align:middle">©2021 OUTSENSE inc. All rights reserved.</span> -->
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    type: { type: String, default: '' },
  },
  computed: {
    listeners() {
      return this.$listeners;
    },
  },
});
</script>

<style lang="sass">
#idlinks
  font-size: unquote("min(16px, 1vw)")
  a
    color: white
.footbar
  background-color: black
  color: white
  font-weight: bold
</style>
