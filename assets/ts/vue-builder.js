import Vue from 'vue';
// import asyncWrapper from '@/assets/js/asyncWrapper';

export default function() {
  const options = {};

  const obj = {
    withProps(props) {
      options.props = props;
      return obj;
    },
    withHead(head) {
      options.head = head;
      return obj;
    },
    withComponents(components) {
      options.components = components;
      return obj;
    },
    withData(arg) {
      Object.assign(options, arg);
      return obj;
    },
    withProperties({ methods, computed }) {
      options.methods = methods;
      options.computed = computed;
      return obj;
    },
    withLifecycles(arg) {
      Object.assign(options, arg);
      return obj;
    },
    build() {
      return Vue.extend(options);
    },
  };

  return obj;
}
