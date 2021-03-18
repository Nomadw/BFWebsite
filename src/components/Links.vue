<template name=Links>
    <div id="linkstab">
        <v-col>
        <v-card v-show="opened" class="links" style="margin-top: 150px">
            <v-row>
                <v-card href="https://www.facebook.com/groups/BristolFurs">
                    <v-img
                    :src="require('@/assets/linklogos/facebook.png')"
                    maxHeight=75px
                    maxWidth=75px>
                    </v-img>
                </v-card>
                <v-card href="https://twitter.com/BristolFurs">
                    <v-img
                    :src="require('@/assets/linklogos/twitter.png')"
                    maxHeight=75px
                    maxWidth=75px>
                    </v-img>
                </v-card>
            </v-row>
            <v-row>
                <v-card href="https://t.me/BristolFurs">
                    <v-img
                    :src="require('@/assets/linklogos/telegram.png')"
                    maxHeight=75px
                    maxWidth=75px>
                    </v-img>
                </v-card>
                <v-card href="https://discord.gg/3FYyHmn">
                    <v-img
                    :src="require('@/assets/linklogos/discord.png')"
                    maxHeight=75px
                    maxWidth=75px>
                    </v-img>
                </v-card>
            </v-row>
        </v-card>
        <v-btn class="linkbutton" @click="tabpress()">
            <h2>Links</h2>
        </v-btn>
        </v-col>
    </div>
</template>

<script>
export default {
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    tabpress() {
      this.opened = !this.opened;
    },
  },
};
</script>

<style scoped>
.v-card .linkbutton {
    width: 100px;
    height: 40px;
}
.v-card .links {
    position: relative;
}
</style>
