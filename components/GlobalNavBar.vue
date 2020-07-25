<template>
  <div>
    <b-navbar id="topnav" toggleable="lg" fixed='top'>
      <b-container>
        <b-navbar-brand><img class="d-block mx-auto my-1" src="@/assets/outsense.png" alt="ロゴ" width="256" height="64"/></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto" id="nav-item">
            <b-nav-item-dropdown text="TOP" class="border" style="padding-left:10px;padding-right:10px">
              <b-dropdown-item to="/">
                OUR BUSINESS
              </b-dropdown-item>
              <b-dropdown-item to="/" class="border">
                What can ORIGAMI-Tech do?
              </b-dropdown-item>
              <b-dropdown-item to="/" class="border">
                OUR COMPANY
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/" class="border">
              BUSINESS
            </b-nav-item>
            <b-nav-item to="/" class="border" style="padding-left:10px;padding-right:10px">
              TECH  
            </b-nav-item>
            <b-nav-item to="/" class="border">
               COMPANY 
            </b-nav-item>
            <b-nav-item to="/" class="border">
               MEMBER 
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <!-- <b-navbar id="titlebar" toggleable="lg" type="dark" variant="primary">
      <b-container>
        <b-navbar-brand tag="h1">
          <icon
            type="circle-arrow-left"
            style="color: white; vertical-align: middle; cursor: pointer;"
            v-on:click.native="backUrl"
          />
          <span style="vertical-align: middle;">bbbb</span>
        </b-navbar-brand>
      </b-container>
    </b-navbar> -->
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Icon from '@/components/Icon.vue';

export default Vue.extend({
  components: { Icon },
  props: {
    // title: String as PropType<string>,
  },
  computed: {
    // currentPath(): string {
    //   return this.$route.path;
    // },
  },
  methods: {
    backUrl() {
      history.back();
    },
  },
});
</script>

<style lang="sass">
#topnav
  background-color: white
  padding-top: 0
  font-size: 16px
  .navbar-brand
    font-size: 12pt
#titlebar
  .navbar-brand
    font-size: 22pt
    margin-bottom: 0
    padding-top: 0
#nav-item
  background-color: orange
  .nav-link
    color: white
    padding-left: 4px
    padding-right: 4px
    padding-top: 2px
    padding-bottom: 2px

</style>
