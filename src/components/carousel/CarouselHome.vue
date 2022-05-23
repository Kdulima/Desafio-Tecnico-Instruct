<template>
    <div class="carousel"  @keydown="checkSlide($event)" tabindex="0">
        <slot></slot>
        <button @click.prevent="next" class="btn btn-next">
          <i class="fa fa-angle-right"></i></button>
        <button @click.prevent="prev" class="btn btn-prev"><i class="fa fa-angle-left"></i></button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      index: 0,
      slides: [],
      slideDirection: '',
    };
  },
  computed: {
    slidesLength() {
      return this.slides.length;
    },
  },
  mounted() {
    this.slides = this.$children;
    // eslint-disable-next-line array-callback-return
    this.slides.map((slide, index) => {
      // eslint-disable-next-line no-param-reassign
      slide.index = index;
    });
  },
  methods: {
    next() {
      this.index += 1;
      if (this.index >= this.slidesLength) {
        this.index = 0;
      }
      this.slideDirection = 'slide-right';
    },
    prev() {
      this.index -= 1;
      if (this.index < 0) {
        this.index = this.slidesLength - 1;
      }
      this.slideDirection = 'slide-left';
    },
    checkSlide(event) {
      if (event.keyCode === 39) {
        this.next();
      } else if (event.keyCode === 37) {
        this.prev();
      } else {
        // eslint-disable-next-line no-useless-return
        return;
      }
    },
  },
};
</script>
<style>

</style>
