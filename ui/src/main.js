// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Element from 'element-ui';

import VueMarkdown from 'vue-markdown'
import mavonEditor from 'mavon-editor'

import func from './util/func';

import 'mavon-editor/dist/css/index.css'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
/* eslint-disable no-new */
Vue.use(Element);
Vue.use(func);
Vue.use(VueMarkdown);
Vue.use(mavonEditor);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
