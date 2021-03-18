import Vue from 'vue';
import Vuetify from 'vuetify';
import VueShowdown from 'vue-showdown';
import router from '@/router';
import colors from 'vuetify/lib/util/colors';
import App from './App.vue';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

Vue.use(VueShowdown, {
  flavor: 'github',
  options: {
    emoji: false,
  },
});

Vue.config.productionTip = false;

const vuetify = new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    dark: false,
    themes: {
      light: {
        primary: colors.blue,
        secondary: colors.grey.darken1,
        accent: colors.indigo,
        error: colors.red,
        info: colors.blue,
        warning: colors.amber,
        success: colors.green,
        background: '#EDEDED',
        toolbar: colors.grey.lighten3,
        footer: colors.grey.lighten2,
        sidebar: '#C9C9C9',
        cards: '#e1e1e1',
        dragover: '#C9C9C9',
        progress: colors.grey.darken3,
      },
      dark: {
        primary: colors.blue,
        secondary: colors.grey.darken1,
        accent: colors.indigo,
        error: colors.red,
        info: colors.blue,
        warning: colors.amber,
        success: colors.green,
        background: '#121212',
        toolbar: colors.grey.darken3,
        footer: colors.grey.darken2,
        sidebar: '#363636',
        cards: '#1e1e1e',
        dragover: '#363636',
        progress: colors.grey.lighten5,
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});

/* eslint-disable no-new */
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
