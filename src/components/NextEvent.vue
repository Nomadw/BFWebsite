<template name="NextEvent">
<div>
      <h2 margin-top="10px">The Next Meet</h2>
      <p>{{ getNextMeetDate() }}</p>
</div>
</template>

<script>
/* eslint-disable */
/* eslint import/no-webpack-loader-syntax: off */
// eslint-disable-next-line

export default {
    data() {
      return {
      }
    },
    methods: {
      getNextMeetDate() {
        var d = new Date();
        var now = new Date();

        now.setHours(0,0,0,0);

        d.setDate(d.getDate() + (13 - d.getDay()) % 7);

        if(d < now)
        {
          d.setMonth(d.getMonth() + 1);
          d.setDate(d.getDate() + (13 - d.getDay()) % 7);
        }
        
        d.setHours(13);

        return d.toDateString();
      },
    }
};
</script>

<style scoped>

</style>
