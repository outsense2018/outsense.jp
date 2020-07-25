import _ from 'lodash';

const emitErrorOnCatch = f =>
  function() {
    const ret = f.apply(this, arguments);
    if (ret instanceof Promise) {
      return ret.catch(e => {
        window.dispatchEvent(new CustomEvent('myunhandledrejection', { detail: e }));
      });
    } else {
      return ret;
    }
  };

const wrapFunction = window.onunhandledrejection !== undefined ? f => f : emitErrorOnCatch;

export default {
  wrap: wrapFunction,
  wrapObject(object) {
    return _.mapValues(object, wrapFunction);
  },
};
