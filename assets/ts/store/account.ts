import Vue from 'vue';
import { LoginInfo } from '../generated-api';

export default new Vue({
  data: () => ({
    account: undefined as undefined | LoginInfo,
  }),
  computed: {
    isLogined(): boolean {
      return this.account !== undefined;
    },
  },
});
