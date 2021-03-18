import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Events from '@/views/Events.vue';
import MeetTheTeam from '@/views/MeetTheTeam.vue';
import Venue from '@/views/Venue.vue';
import Rules from '@/views/Rules.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/events',
    name: 'Events',
    component: Events,
  },
  {
    path: '/theteam',
    name: 'MeetTheTeam',
    component: MeetTheTeam,
  },
  {
    path: '/venue',
    name: 'Venue',
    component: Venue,
  },
  {
    path: '/rules',
    name: 'Rules',
    component: Rules,
  },
];

Vue.use(Router);

const router = new Router({ routes });

export default router;
