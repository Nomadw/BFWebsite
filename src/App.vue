<template>
  <v-app>
     <v-app-bar app fixed clipped-left>
       <v-img
        alt="BristolFurs Logo"
        v-if="$vuetify.theme.dark"
        :src="require('./assets/logo_dark.png')"
        max-height="50px"
        max-width="50px"
        aspect-ratio="1"
        />
      <v-img
        alt="BristolFurs Logo"
        v-else
        :src="require('./assets/logo.png')"
        max-height="50px"
        max-width="50px"
        aspect-ratio="1"
        />
        <h1 margin-top="10px">BristolFurs</h1><h5> Beta</h5>
        <v-spacer></v-spacer>
        <next-event-inline />
        <Links />
      </v-app-bar>
      <BFNavBar v-if="!this.isMobile" :items="this.items" top-margin="20px"/>
      <BFMobileNavBar v-else :items="this.items" top-margin="20px"/>
    <v-main paddingTop="0px">
      <router-view />
    </v-main>
    <v-footer app fixed>
      <v-switch
       v-model="darkTheme">
      </v-switch>
      <v-spacer></v-spacer>
      <div>Site by Azure, {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import BFNavBar from '@/components/BFNavBar.vue';
import BFMobileNavBar from '@/components/BFMobileNavBar.vue';
import Links from '@/components/Links.vue';
import NextEventInline from './components/NextEventInline.vue';

export default {
  name: 'App',
  components: {
    BFNavBar,
    BFMobileNavBar,
    Links,
    NextEventInline,
  },
  data() {
    return {
      status: '',
      isMobile: '',
      darkTheme: '',
      items: [
        {
          name: 'Home', path: '/', icon: 'plus', id: 'home',
        },
        {
          name: 'Meets', path: '/events', icon: 'events', id: 'events',
        },
        {
          name: 'Team', path: '/theteam', icon: 'account-supervisor', id: 'team',
        },
        {
          name: 'Venue', path: '/venue', icon: 'map', id: 'venue',
        },
        {
          name: 'Rules', path: '/rules', icon: 'alert-circle', id: 'rules',
        },
      ],
    };
  },
  mounted() {
    if (localStorage.darkTheme) {
      this.darkTheme = localStorage.darkTheme;
      this.$vuetify.theme.dark = this.darkTheme;
    }
    this.onResize();
    window.addEventListener('resize', this.onResize, { passive: true });
  },
  watch: {
    darkTheme(setting) {
      localStorage.darkTheme = setting;
      this.$vuetify.theme.dark = setting;
    },
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true });
    }
  },
};

</script>

<style>
.img:hover {
  cursor: pointer;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.h1 {
  margin-top: -50px;
}
.v-card {
  padding: 4px;
  text-align: left;
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>
