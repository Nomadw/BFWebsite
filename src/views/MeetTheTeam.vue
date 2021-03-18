<template>
  <v-container class="theteam">
    <div>
      <h1>The Team</h1>
      <div class="sidepanel">
        <v-card v-for="item in items"
        :key="item.name"
        v-bind:class="{ 'teamcard crew': item.stafftype == 'crew',
        'teamcard committee': item.stafftype == 'committee'}"
        :id="item.name"
        @click="select(item.name)"
        outlined
        wrap>
        <v-col cols="auto">
        <v-img
        :src="require('@/assets/team/avatars/' + item.name + '.jpg')"
        maxHeight=75px
        maxWidth=75px>
        </v-img>

        <h3>{{ item.name }}</h3>
        </v-col>
        </v-card>
      </div>
      <div class="mainview">
          <v-card class="profile" v-show="selectedItem == 'none'" wrap>
            <p>If you're looking for a member of staff at the meets, look out for the people
              wearing staff lanyards!
              Yellow indicates a member of crew, and Red indicates a member of the BristolFurs
              Committee.
              Click on a member of staff from the list to read a short profile!</p>
          </v-card>
          <v-card v-for="item in items"
            :key="item.name"
            class="profile"
            :id="item.name"
            v-show="selectedItem == item.name">
            <v-col cols="auto">
            <h2>{{ item.name }}</h2>
            <h2>{{ item.pronouns }}</h2>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
              <v-img
              :src="require('@/assets/team/fullviews/' + item.name + '.jpg')"
              maxHeight=900px
              maxWidth=300px
              contain
              v-bind="attrs"
              v-on="on"
              v-bind:altText="item.alttext">
              </v-img>
              </template>
              <span>{{ item.alttext }} </span>
            </v-tooltip>
            </v-col>

            <v-col>
            <p>{{ item.profile }}</p>
            </v-col>
            </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
/* eslint import/no-webpack-loader-syntax: off */
import Azuretxt from 'raw-loader!@/assets/team/texts/Azure.txt';
import Beatxt from 'raw-loader!@/assets/team/texts/Bea.txt';
import Chiitxt from 'raw-loader!@/assets/team/texts/Chii.txt';
import Keyotxt from 'raw-loader!@/assets/team/texts/Keyo.txt';
import Kirintxt from 'raw-loader!@/assets/team/texts/Kirin.txt';
import Vergetxt from 'raw-loader!@/assets/team/texts/Verge.txt';
import Pudglytxt from 'raw-loader!@/assets/team/texts/Pudgly.txt';

export default {
  data() {
    return {
      selectedItem: 'none',
      items: [
        {
          name: 'Chii',
          stafftype: 'committee',
          profile: Chiitxt,
          pronouns: '(She/Her)',
          alttext: 'Art by Gemdog',
        },
        {
          name: 'Azure',
          stafftype: 'committee',
          profile: Azuretxt,
          pronouns: '(He/Him)',
          alttext: 'Art by Ember-Dragoness',
        },
        {
          name: 'Bea',
          stafftype: 'committee',
          profile: Beatxt,
          pronouns: '(She/Her)',
          alttext: 'Art by Heartlily',
        },
        {
          name: 'Pudgly',
          stafftype: 'crew',
          profile: Pudglytxt,
          pronouns: '(He/Him)',
          alttext: 'Art by ',
        },
        {
          name: 'Verge',
          stafftype: 'crew',
          profile: Vergetxt,
          pronouns: '(He/Him)',
          alttext: 'Art by ',
        },
        {
          name: 'Kirin',
          stafftype: 'crew',
          profile: Kirintxt,
          pronouns: '(He/Him)',
          alttext: 'Art by RutanQuilin (Himself)',
        },
        {
          name: 'Keyo',
          stafftype: 'crew',
          profile: Keyotxt,
          pronouns: '(They/Them)',
          alttext: 'Art by TookFur',
        },
      ],
    };
  },
  methods: {
    select(choice) {
      if (this.selectedItem !== choice) {
        this.selectedItem = choice;
      } else {
        this.selectedItem = 'none';
      }
    },
  },
};
</script>

<style scoped>
.v-card {
  display: flex;
}
.mainview .v-card {
  width: 100%;
}
#sidepanel {
  display: flex;
}
.teamcard {
  float: left;
  text-align: center;
  margin-right: 10px;
  margin-bottom: 10px;
}
p {
  padding: 10px;
  font-size: 18pt;
  text-align: left;
}
h2 {
  padding: 2px;
  text-align: center;
}
h3 {
  padding: 2px;
  text-align: center;
}
.sidepanel .v-card:hover {
  background-color:dimgray;
  cursor: pointer;
}
.teamcard.crew {
  background-color: yellow;
  color: blue;
  float: right;
}
.teamcard.committee {
  background-color: red;
  color: white;
}
</style>
