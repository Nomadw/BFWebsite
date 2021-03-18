<template>
  <v-container id="background">
    <div id="background">
      <h1>Welcome to BristolFurs!</h1>
    <v-col>
      <v-card>
        <VueShowdown :markdown="Welcome" />
      </v-card>
      <v-card @click="toevents()">
          <next-event />
      </v-card>
    <v-card>
      <ImageGallery
      imagesPerPage="5" />
    </v-card>
    </v-col>
    </div>
  </v-container>
</template>

<script>
/* eslint import/no-webpack-loader-syntax: off */
// eslint-disable-next-line
import Welcome from 'raw-loader!@/assets/Welcome.txt';
import ImageGallery from '@/components/ImageGallery.vue';
import NextEvent from '@/components/NextEvent.vue';

export default {
  components: {
    ImageGallery,
    NextEvent,
  },
  data() {
    return {
      Welcome,
    };
  },
  methods: {
    toevents() {
      this.$router.push('/events');
    },
  },
};
</script>

<style scoped>
#background {
   background-image: url('/assets/logo.png');
}
.v-card {
  padding: 2px;
  text-align: center;
}
.p {
  white-space: pre;
  padding: 2px;
}
.v-img {
  padding: 5px;
}
</style>
