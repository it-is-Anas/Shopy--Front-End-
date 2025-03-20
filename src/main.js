import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@fortawesome/fontawesome-free/css/all.css';

import main from './Style/main.css'
import Auth from './Style/Auth.css'
import User_Home from './Style/User_Home.css'
import Animation from './Style/Animation.css'


import AppLoader from './components/Global/AppLoader.vue';
import AppMsg from './components/Global/AppMsg.vue';

const app = createApp(App);

app.component('AppLoader',AppLoader);
app.component('AppMsg',AppMsg);

app.use(store).use(router);


router.isReady()
.then(function(){
    app.mount('#app');
});



