<template>
  <span :class="glyphiconClass" v-on="listeners"></span>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    type: { type: String, default: '' },
  },
  computed: {
    listeners() {
      return this.$listeners;
    },
    glyphiconClass() {
      return 'glyphicon glyphicon-' + this.type;
    },
  },
});
</script>
