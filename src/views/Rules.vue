<template>
  <v-container>
    <div>
      <h1>Code of Conduct</h1>
      <p>By attending BristolFurs meets or joining BristolFurs chats, you agree to the rules set.
        Please review these rules and contact a member of committee if you have any questions.
      </p>
      <v-row>
        <v-card wrap>
          <h2>Meet rules</h2>
          <VueShowdown :markdown="meetRules" />
        </v-card>
        <v-card wrap>
          <h2>Chat rules</h2>
          <VueShowdown :markdown="chatRules" />
        </v-card>
      </v-row>
    </div>
  </v-container>
</template>

<script>
/* eslint import/no-webpack-loader-syntax: off */
// eslint-disable-next-line
import meetRules from 'raw-loader!@/assets/meetrules.txt';
import chatRules from 'raw-loader!@/assets/chatrules.txt';

export default {
  data() {
    return {
      chatRules,
      meetRules,
    };
  },
};
</script>

<style scoped>
.v-card {
  width: 50%;
  padding: 2px;
  text-align: left;
}
.p {
  white-space: pre;
  padding: 2px;
}
</style>
