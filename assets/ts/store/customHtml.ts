import Vue from 'vue';
import { HtmlCustomForm } from '../generated-api';
import _ from 'lodash';

export default new Vue({
  data: () => ({
    allHtmlParts: [] as HtmlCustomForm[],
  }),
});
