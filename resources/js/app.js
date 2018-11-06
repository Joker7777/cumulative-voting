
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Vuex from 'vuex'
import store from './store/store'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
// Vue.component('time-table', require('./components/TimeTable.vue'));
// Vue.component('book-bar', require('./components/BookBar.vue'));

Vue.component('main-page', require('./components/MainPage.vue'));

const app = new Vue({
    el: '#app',
    store
});