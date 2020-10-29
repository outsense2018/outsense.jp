<template>
  <div>
    <b-navbar id="topnav" toggleable="lg" fixed='top'>
      <b-container fluid>
        <b-navbar-brand><router-link to="/"><img style="height:3vw;margin:0;padding:0" src="@/assets/rogo.png" alt="ロゴ"  /></router-link></b-navbar-brand>
        <b-dropdown id="nav-item" size="lg" variant="link" right no-caret>
          <template v-slot:button-content>
            <img src="@/assets/menuicon.png" style="height:3vw"/>
          </template>
          <div class="scrollable-menu">
            <b-dropdown-item id="mozi" to="/news">
              News
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item id="mozi" to="/vision">
              Vision
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item id="mozi" to="/portfolio">
              Portfolio
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item id="mozi" to="/earth">
              Business(Earth)
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item id="mozi" to="/space">
              Business(Space)
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item id="mozi" to="/technology">
              Technology
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item id="mozi" to="/members">
              Members
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item id="mozi" to="/company">
              Company
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item id="mozi" to="/history">
              History
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item id="mozi" to="/contact">
              Contact / Access
            </b-dropdown-item>
          </div>
        </b-dropdown>
      </b-container>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import builder from '@/assets/ts/vue-builder';
import Vue from 'vue';
import _ from 'lodash';

export default builder()
.withData({
  data() {
    return {}
  }  
}).build();
</script>

<style lang="sass">
#topnav
  background-color: white
  padding-top: 0
  border-bottom: 1px solid grey
  height: 6vw
#nav-item
  padding-top: 0
  margin-right: 0
.scrollable-menu
  max-height: 30vw
  overflow-y: scroll
#mozi
  font-size: 1.2vmax
  font-family: "Arial"
</style>
