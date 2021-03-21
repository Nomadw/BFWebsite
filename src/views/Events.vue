<template>
  <v-container>
    <v-row>
      <v-col xl>
        <div>
          <h1>Meets</h1>
          <p>Check here for the next meet and details on meets!
            Please be sure to check the rules before attending any BristolFurs meets.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6" cols="12">
        <next-event/>
        <v-card>
          <v-card-title><h2>Meet Details</h2></v-card-title>
          <v-card-text>
            <VueShowdown :markdown="eventDetails"/>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-title><h2>Upcoming Meets</h2></v-card-title>
          <v-card-text><VueShowdown :markdown="upcomingEvents"/></v-card-text>
        </v-card>
      </v-col>
      <v-col md="6" cols="12">
        <v-card>
          <v-card-title><h2>Meet FAQ</h2></v-card-title>
          <v-card-text><VueShowdown :markdown="meetfaq"/></v-card-text>
        </v-card>
      </v-col>
    </v-row>
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
  margin-top: 4px;
  margin-bottom: 4px;
}

.p {
  white-space: pre;
  padding: 2px;
}
</style>
