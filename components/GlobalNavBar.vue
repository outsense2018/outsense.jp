<template>
  <div>
    <b-navbar id="topnav" toggleable="lg" fixed='top'>
      <b-container fluid>
        <b-navbar-brand><router-link to="/"><img style="height:3vw" src="@/assets/rogo.png" alt="ロゴ"  /></router-link></b-navbar-brand>
        <b-dropdown id="nav-item" size="lg" variant="link" right no-caret>
          <template v-slot:button-content>
            <img src="@/assets/menuicon.png" style="height:3vw"/>
          </template>
          <b-dropdown-item to="/vision">
            Vision
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item to="/portfolio">
            Portfolio
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
import builder from '@/assets/ts/vue-builder';
import Vue from 'vue';
import Icon from '@/components/Icon.vue';
import _ from 'lodash';

export default builder()
.withComponents({ Icon })
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
