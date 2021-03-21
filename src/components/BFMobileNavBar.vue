<template name=BFMobileNavBar>
    <div id="mobile-navbar">
      <v-card class="nav-button" @click="tabpress()">
            <h2>Menu</h2>
        </v-card>
        <v-card v-show="opened" wrap>
            <v-row v-for="item in items"
                  :key="item.name"
                  @click="direct(item.path)"
                  :id="item.id">
                <v-card class="nav-button pa-0 ma-0">
                  <!--<v-icon>mdi-{{item.icon}}</v-icon>--><h3>{{item.name}}</h3>
                </v-card>
            </v-row>
        </v-card>
    </div>
</template>

<script>
/* eslint max-len: ["error", { "code": 110 }] */

export default {
  props: ['items'],
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    direct(page) {
      this.$router.push(page);
    },
    tabpress() {
      this.opened = !this.opened;
    },
  },
};
</script>

<style scoped>
#mobile-navbar {
    margin-top: 1px;
}
.nav-button {
    width: 20%;
    height: 40px;
    text-align: center;
    position: relative;
}
.nav-button:hover {
    background-color:dimgray;
}
</style>
