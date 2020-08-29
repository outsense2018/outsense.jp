<template>
  <div>
    <global-nav-bar
      :title="title"
    ></global-nav-bar>
    <nuxt class="mt-1"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GlobalNavBar from '@/components/GlobalNavBar.vue';
import Icon from '@/components/Icon.vue';
import _ from 'lodash';

export default Vue.extend({
  components: {
    GlobalNavBar,
    Icon,
  },
  data() {
    return {
      title: '-',
      processing: false,
    };
  },
  async mounted() {
  },
  computed: {
  },
  methods: {
  },
  async created() {
  },
});
</script>

<style lang="sass">
body
  overflow-y: scroll
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
$primary: hsl(218, 47%, 46%)
$navbar-padding-y: 0.1rem
$zindex-dropdown: 1032
$btn-disabled-opacity: .35
$card-border-color: #AAA !important
$list-group-border-color: #AAA

button[disabled]
  cursor: not-allowed

select
  -moz-appearance: none
  -webkit-appearance: none
  appearance: none

table.cell-responsive
  td
    max-width: 7.5em
    overflow-x: auto

span.glyphicon
  margin: 0 0.2em

legend.overflow-x-auto
  overflow-x: auto

.form-changed
  background-color: #fef7eb !important
  border-color: #fbb03b !important

.form-changed:focus
  box-shadow: 0px 0px 0px 3px rgba(251, 176, 59, 0.4) !important

.cursor-pointer
  cursor: pointer

@import 'bootstrap/scss/bootstrap.scss'
@import 'bootstrap-vue/src/index.scss'

@each $color, $value in $theme-colors
  .btn-outline-#{$color}:hover
    background-color: lighten($value, 45%)
    color: $value

// bootstrap3 glyphicons
$bootstrap-sass-asset-helper: false
$icon-font-path:          "../node_modules/bootstrap-sass/assets/fonts/bootstrap/"
$icon-font-name:          "glyphicons-halflings-regular"
$icon-font-svg-id:        "glyphicons_halflingsregular"
@import 'node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_glyphicons'
</style>
