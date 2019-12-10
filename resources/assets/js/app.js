import Vue from 'vue'
import VueRouter from 'vue-router'

require('./bootstrap');

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/login', component: require('./components/Login.vue') },
    ]
})

const app = new Vue({
    el: '#app',
    router,
})