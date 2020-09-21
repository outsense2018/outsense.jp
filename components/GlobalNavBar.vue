<template>
  <div>
    <b-navbar id="topnav" toggleable="lg" fixed='top'>
      <b-container fluid>
        <b-navbar-brand><router-link to="/"><img class="d-block mx-auto my-1" style="height:3vw" src="@/assets/rogo.png" alt="ロゴ"  /></router-link></b-navbar-brand>
        <b-dropdown id="nav-item" size="lg" variant="link" right toggle-class="text-decoration-none" no-caret>
          <template v-slot:button-content>
            <img src="@/assets/item1.png" style="height:3vw"/><span class="sr-only">Search</span>
          </template>
          <b-dropdown-item to="/vision">
            Vision
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item to="/portfolio">
            Portofolio
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item to="/technology">
            Technology
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item to="/members">
            Members
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item to="/company">
            Company
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item to="/history">
            History
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item to="/contact">
            Contact / Access
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item to="/earth">
            Business on the Earth
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item to="/space">
            Business on the Moon
          </b-dropdown-item>
        </b-dropdown>
      </b-container>
    </b-navbar>
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
  border-bottom: 1px solid grey
  height: 5vw
#nav-item
  padding-top: 0
  margin-right: 0
  font-family: "Arial"
</style>
