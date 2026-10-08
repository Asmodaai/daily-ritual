import { initializeFormValidation } from './i18n.js';
import { createSSRApp } from 'vue'
import App from './App.vue'
import './style.css'
import './photography.css'

createSSRApp(App).mount('#app')

initializeFormValidation();
