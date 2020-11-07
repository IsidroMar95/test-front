<template>
  <div>
    <div v-if="slides.length <= 0" class="flex flex-col w-full h-full">
      <img src="@/static/images/empty-state.gif" alt="animation" class="mx-auto">
    </div>
    <template v-else>
      <Modal :is-open="isModalVisible" siz="lg" :title="infoModal.name" @close="isModalVisible = false">
        <template v-slot:modal-body>
          <div class="w-64 h-64 mx-auto bg-center bg-cover" :style="bgImage(infoModal.file)" />
        </template>
      </Modal>

      <div class="relative flex items-center justify-center max-w-screen-sm mx-auto overflow-hidden carousel">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="bg-center bg-cover rounded-lg cursor-pointer slide"
          :style="bgImage(slide.file)"
          @click="showInfo(slide)"
        >
          <h4 class="text-red-900">
            {{ slide.name }}
          </h4>

          <div class="carousel-controls">
            <button class="absolute left-0 flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-yellow-600 border border-transparent rounded-lg active:bg-yellow-600 hover:bg-yellow-700 focus:outline-none" @click.stop="previous">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
              </svg>
            </button>
            <button class="absolute right-0 flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-yellow-600 border border-transparent rounded-lg active:bg-yellow-600 hover:bg-yellow-700 focus:outline-none" @click.stop="next">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      slides: [],
      isModalVisible: false,
      infoModal: {}
    }
  },
  mounted () {
    this.getSlides()
  },
  methods: {
    next () {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous () {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    },
    getSlides () {
      this.slides = Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key)))
    },
    bgImage (file) {
      return `background-image: url(data:image/png;base64,${file})`
    },
    showInfo (slide) {
      this.isModalVisible = true
      this.infoModal = slide
    }
  }
}
</script>
<style>

.carousel {
      min-height: 25em;
}
.slide {
  flex: 0 0 20em;
  height: 20em;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
