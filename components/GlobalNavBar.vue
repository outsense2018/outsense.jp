<template>
  <div style="height:5vmax">
    <b-navbar id="topnav" toggleable="lg" fixed='top' style="padding-bottom:0">
      <b-container style="display:flex;align-items:flex-end;border-bottom: 1px solid grey">
        <b-navbar-brand style="padding:1vmax 0"><router-link to="/"><img style="height:3vmax;margin:0;padding:0" src="@/assets/rogo.png" alt="ロゴ"  /></router-link></b-navbar-brand>
        <b-dropdown id="nav-item" size="lg" variant="link" right no-caret>
          <template v-slot:button-content>
            <img src="@/assets/menuicon.png" style="height:3vmax"/>
          </template>
          <div class="scrollable-menu">
            <b-dropdown-item id="mozi" to="/">
              TOP
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item id="mozi" to="/space">
              Space Business
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item id="mozi" to="/living">
              Living Business
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item id="mozi" to="/protection">
              Protection Business
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
#nav-item
.scrollable-menu
  max-height: 30vh
  overflow-y: scroll
#mozi
  font-size: 1.2vmax
  font-family: "Arial"
</style>
