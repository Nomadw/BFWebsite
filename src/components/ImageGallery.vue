<template name="ImageGallery">
  <v-container>
    <v-row>
      <v-col v-for="image in images.slice(this.startImage, this.endImage)"
             :key="image.pathLong"
             md-4>
        <v-img :src="image.pathLong" max-height="300px" max-width="500px" contain/>
      </v-col>
    </v-row>
    <v-row>
      <v-col md-12>
        <v-pagination
          v-model="currentPage"
          :length='pageCount'
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right">
        </v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['imagesPerPage'],
  data() {
    return {
      images: [],
      currentPage: 1,
      pageCount: 1,
      remainder: 0,
      startImage: 0,
      endImage: this.imagesPerPage,
    };
  },

  mounted() {
    this.importAll(require.context('../assets/images/', true, /\.jpg$/));
    this.getPageCount(this.images);
  },

  updated() {
    this.updateImageRange();
  },

  methods: {
    importAll(r) {
      r.keys()
        .forEach((key) => (this.images.push({
          pathLong: r(key),
          pathShort: key,
        })));
    },
    getPageCount(array) {
      this.pageCount = Math.floor(array.length / this.imagesPerPage);
      this.remainder = array.length % this.imagesPerPage;
      if (this.remainder > 0) {
        this.pageCount += 1;
      }
    },
    updateImageRange() {
      this.startImage = ((this.currentPage - 1) * this.imagesPerPage);
      this.endImage = this.currentPage * this.imagesPerPage;
    },
  },
};
</script>

<style scoped>

</style>
