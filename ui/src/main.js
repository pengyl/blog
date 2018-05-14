// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import elementui from  'element-ui';
import VueMarkdown from 'vue-markdown'
import mavonEditor from 'mavon-editor'

import func from './util/func';
import 'mavon-editor/dist/css/index.css'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/mine.css';
Vue.config.productionTip = false;
Vue.use(elementui);
Vue.use(func);
Vue.use(VueMarkdown);
Vue.use(mavonEditor);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
