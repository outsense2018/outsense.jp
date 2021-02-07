<template>
  <div align="center" style="margin-top:20px">
    <p>ホームページの改修に伴い、アドレスが変更されました。</p>
    <p>約5秒後に自動的に遷移します。自動遷移しない場合は以下のリンクをクリックして下さい。</p>
    <a  href="https://www.outsense.jp">https://www.outsense.jp</a>
  </div>
</template>

<script>
import builder from '@/assets/ts/vue-builder';
import _ from 'lodash';

export default {
  data: {},
}
</script>

<style lang="sass">
body.bodytop
  background-color: white
  width: 100%
  height: 100vw
.fade-enter-active, .fade-leave-active
  transition: opacity .7s
.fade-enter, .fade-leave
  opacity: 0
</style>
