<template>
  <div>
    <b-container style="font-family:'ヒラギノ角ゴシック'">
      <h3 class="h3me">Members</h3>
        <b-row align-v="center">
          <b-col md="3" cols="6" v-for="(member,index) in members" :key="index">
            <b-row cols="1" align-v="center" style="margin-bottom:8vmin;text-align:center">
              <b-col><img :src="member.url" alt="image" style="width:100%"/></b-col>
              <b-col><p style="font-size:1vmax;margin-top:2vmin;font-weight:bold;margin-bottom:0;"><u>{{member.name}}</u></p></b-col>
              <b-col><p style="font-size:0.8vmax;margin:0;font-weight:bold;">{{member.alpha}}</p></b-col>
              <b-col><p style="font-size:0.7vmax;margin:0;">{{member.job}}</p></b-col>
            </b-row>
          </b-col>
        </b-row>
      <h3 class="h3me" style="font-size:3vmax">Advisers</h3>
        <b-row align-v="center">
          <b-col md="3" cols="6" v-for="(adviser,index) in advisers" :key="index">
            <b-row cols="1" align-v="center" style="margin-bottom:8vmin;text-align:center">
              <b-col><img :src="adviser.url" alt="image" style="width:100%"/></b-col>
              <b-col><p style="font-size:1vmax;margin-top:2vmin;font-weight:bold;margin-bottom:0;"><u>{{adviser.name}}</u></p></b-col>
              <b-col><p style="font-size:0.8vmax;margin:0;font-weight:bold;">{{adviser.alpha}}</p></b-col>
              <b-col><p style="font-size:0.7vmax;margin:0;">{{adviser.job}}</p></b-col>
              <b-col><p style="font-size:0.7vmax;margin:0;">{{adviser.company}}</p></b-col>
              <b-col><p style="font-size:0.7vmax;margin:0;">{{adviser.role}}</p></b-col>
            </b-row>
          </b-col>
        </b-row>  
    </b-container>    
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
    const members = [
      { url:"/takahashi.jpg", name:"高橋 鷹山", alpha:"Yozan Takahashi", job:"代表取締役CEO / 創業者" },
      { url:"/horii.jpg", name:"堀井 柊我", alpha:"Shuga Horii", job:"取締役COO / 創業者" },
      { url:"/ishimathu.jpg", name:"石松 慎太郎", alpha:"Shinaro Ishimatu", job:"取締役CTO / 創業者" },
      { url:"/ito.jpg", name:"伊藤 彰朗", alpha:"Akio Ito", job:"非常勤監査役 / 創業者" },
      { url:"/nagai.jpg", name:"永井 翔真", alpha:"Shoma Nagai", job:"Engineer / Intern" },
      { url:"/noguchi.jpg", name:"野口 信", alpha:"Sin Noguchi", job:"Engineer / Intern" },
      { url:"/kihira.jpg", name:"紀平 陸", alpha:"Riku Kihira", job:"Engineer / Intern" },
      { url:"/yamada.jpg", name:"山田 周平", alpha:"Shuhei Yamada", job:"Engineer / Intern" },
    ];
    const advisers = [
      { url:"/human.png", name:"丸 幸弘", alpha:"Yukihiro Maru", job:"経営顧問", company:"株式会社リバネス", role:"代表取締役 グループCEO" },
      { url:"/human.png", name:"加藤 大直", alpha:"Hironao Kato", job:"技術/経営顧問", company:"株式会社MagnaRecta", role:"CTO" },
      { url:"/human.png", name:"土場 義浩", alpha:"Yoshihiro Doba", job:"技術アドバイザー", company:"サンケイエンジニアリング株式会社", role:"代表取締役" },
      { url:"/human.png", name:"十亀 昭人", alpha:"Akito Sogame", job:"技術顧問", company:"東海大学", role:"工学部建築学科 准教授" },
      { url:"/human.png", name:"白田 陽介", alpha:"Yosuke Hakuta", job:"税理士/会計士", company:"白田陽介税理士事務所", role:"" },
      // { url:"/human.png", name:"三井 睦貴", alpha:"Mutsuki Mithui", job:"弁護士", company:"荒井東京法律事務所", role:"" },
    ];
    return {members, advisers}
  }  
})
.withLifecycles({
})
.build();
</script>

<style lang="sass">
.h3me
  font-size: 4vmax
  font-weight: bold
  font-family: "Arial Black"
  margin-top: 5.5%
  margin-bottom: 5%
</style>
