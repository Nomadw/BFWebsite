<template>
  <v-container>
    <div>
      <h1>Meets</h1>
      <p>Check here for the next meet and details on meets!
        Please be sure to check the rules before attending any BristolFurs meets.
      </p>
      <v-row>
      <v-col>
        <v-card>
         <next-event/>
        </v-card>
        <v-card>
          <h2>Meet Details</h2>
          <VueShowdown :markdown="eventDetails" />
        </v-card>
        <v-card>
          <h2>Upcoming Meets</h2>
          <VueShowdown :markdown="upcomingEvents" />
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <h2>Meet FAQ</h2>
          <VueShowdown :markdown="meetfaq" />
        </v-card>
      </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
/* eslint import/no-webpack-loader-syntax: off */
// eslint-disable-next-line
import upcomingEvents from 'raw-loader!@/assets/events/UpcomingEvents.txt';
import eventDetails from 'raw-loader!@/assets/events/EventDetails.txt';
import NextEvent from '@/components/NextEvent.vue';
import meetfaq from 'raw-loader!@/assets/meetfaq.txt';

export default {
  components: { NextEvent },
  data() {
    return {
      upcomingEvents,
      eventDetails,
      meetfaq,
    };
  },
};
</script>

<style scoped>
.v-card {
  padding: 2px;
  text-align: left;
}
.p {
  white-space: pre;
  padding: 2px;
}
</style>
