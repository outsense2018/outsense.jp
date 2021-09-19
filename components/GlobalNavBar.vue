<template>
  <div style="height:min(80px, 5vmax)">
    <b-navbar id="topnav" toggleable="lg" fixed='top' style="padding-bottom:0">
      <b-container style="display:flex;align-items:self-end;">
        <b-navbar-brand style="padding:1vmax 0"><router-link to="/"><img style="height:min(48px, 3vmax);margin:1vh 0;padding:0" src="@/assets/rogo.png" alt="ロゴ"  /></router-link></b-navbar-brand>
        <div align="right" style="margin-bottom:1vh">
          <div class="box">
            <b-collapse is-nav>
              <b-navbar-nav>
                <b-nav-item href="/strength" no-caret id="mozi">STRENGTH</b-nav-item>
                <b-nav-item href="/service" no-caret id="mozi">SERVICE</b-nav-item>
                <b-nav-item href="/project" no-caret id="mozi">PROJECT</b-nav-item>
                <b-nav-item href="/company" no-caret id="mozi">COMPANY</b-nav-item>
                <b-nav-item href="/contact" no-caret id="mozi">CONTACT</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </div>
          <div class="box">
            <b-dropdown id="nav-item" size="lg" variant="link" right no-caret>
              <template v-slot:button-content>
                <img src="@/assets/menuicon.png" style="height:min(32px, 3vmax);margin-bottom:1vh"/>
              </template>
              <div class="scrollable-menu">
                <b-dropdown-item id="mozi" to="/">
                  TOP
                </b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item id="mozi" to="/strength">
                  STRENGTH
                </b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item id="mozi" to="/service">
                  SERVICE
                </b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item id="mozi" to="/project">
                  PROJECT
                </b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item id="mozi" to="/company">
                  COMPANY
                </b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item id="mozi" to="/members">
                  MEMBER
                </b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item id="mozi" to="/news">
                  NEWS
                </b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item id="mozi" to="/contact">
                  CONTACT
                </b-dropdown-item>
              </div>
            </b-dropdown>
          </div>
        </div>
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
  font-family: 'Noto Sans JP'
.box
  display: inline-block
</style>
