import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
library.add(faArrowRight);
library.add(faArrowLeft);


import './css/styles.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css';
import Swal from 'sweetalert2';

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.use(store)
.mount('#app');