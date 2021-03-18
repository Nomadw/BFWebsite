<template name=BFNavBar>
    <div id="navbar">
      <v-card v-for="item in items"
      :key="item.name"
      @click="direct(item.path)"
      class="nav-button"
      :id="item.id">
        <!--<v-icon>mdi-{{item.icon}}</v-icon>--><h2>{{item.name}}</h2>
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
#navbar {
    margin-top: 5px;
    display: flex;
}
#mobile-navbar {
    margin-top: 1px;
}
.nav-button {
    width: 20%;
    height: 40px;
    text-align: center;
}
.mobile-nav-button {
    text-align: center;
}
.nav-button:hover {
    background-color:dimgray;
}
</style>
