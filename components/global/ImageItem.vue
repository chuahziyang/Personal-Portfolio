<template>
  <img src="~/assets/emob-1.jpg" />
</template>

<script>
export default {
  //declare props for the 'srcimg' and 'alt' of the image
  props: {
    srcimg: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  methods: {
    /* function to get and return the final url to our processed image
        using the require function */
    getImg() {
      try {
        // place the '~/' before 'assets/'
        const image = require(`~/assets/${this.srcimg}`);
        console.log(image);
        return image;
      } catch (err) {
        console.warn(err);
        // return null if any error
        return null;
      }
    },
  },
};
</script>
