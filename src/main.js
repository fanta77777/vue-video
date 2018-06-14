// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//main.js是我们的入口文件，主要作用是初始化vue实例，并引入所需要的插件
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './base/rem'
import VueLazyload from 'vue-lazyload'
import Toast from './components/common/Toast.js';
import promise from 'es6-promise';

//axios在ie下的兼容性问题 vue webpack es6-promise
promise.polyfill();

Vue.use(Toast);
Vue.use(VueLazyload, {
  loading: 'http://www.wclimb.site/images/imgLoading.svg'
})
//关闭生产提示（控制台）
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})