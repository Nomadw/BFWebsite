<template>
  <v-container>
    <div>
      <h1>The Venue</h1>
      <v-col cols="auto">
      <v-card wrap>
        <v-row>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.233484716489!2d-2.5958372839583927!3d51.45386947962645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718e783961f4d1%3A0xc4c597231be31119!2sThe%20Boardroom!5e0!3m2!1sen!2suk!4v1597346335156!5m2!1sen!2suk" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </v-row>
        <v-row>
         <p>Our venue is The Boardroom, situated on St Nick's Street, BS1 1UB Bristol!
            Visit  their Facebook  <a href=https://www.facebook.com/theboardroombristol>here</a>  and their website  <a href=https://theboardroombristol.com>here</a>!</p>
        </v-row>
      </v-card>
      </v-col>
      <v-card wrap>
        <v-col>
          <h2>Cocktails!</h2>
        <p>The Boardroom sells a few cocktails specifically themed for BristolFurs meets -
        Menus will be put out during the meets but you could ask for one of these at any time!</p>
        </v-col>
        <v-col>
          <v-row>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-img :src="require('@/assets/venue/drinks/bathwater.jpg')" contain
                maxHeight=200px maxWidth=200px
                v-bind="attrs"
                v-on="on">
                </v-img>
              </template>
            <span>Dragon's Bathwater</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-img :src="require('@/assets/venue/drinks/redpanda.jpg')" contain
                maxHeight=200px maxWidth=200px
                v-bind="attrs"
                v-on="on">
                </v-img>
             </template>
            <span>Red Panda</span>
            </v-tooltip>
          </v-row>
          <v-row>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-img :src="require('@/assets/venue/drinks/whitebear.jpg')" contain
                maxHeight=200px maxWidth=200px
                v-bind="attrs"
                v-on="on">
                </v-img>
              </template>
            <span>White Bear</span>
            </v-tooltip>
          </v-row>
        </v-col>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  components: {

  },
};
</script>

<style scoped>
.v-card {
  display: flex;
}
iframe {
  display: wrap;
  width: 600px;
  height: 400px;
}
p {
  padding: 10px;
}
.v-row {
  margin-top: 10px;
}
</style>
