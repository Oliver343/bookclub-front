import { createAuth0 } from '@auth0/auth0-vue';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);

app
.use(router)
.use(
  createAuth0({
    domain: "dev-5h5r7kyrg55wvmb4.us.auth0.com",
    clientId: "AbeIrcVw1VGaFDchhNtDe90C7oCIlKZV",
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })
);

app.mount('#app');