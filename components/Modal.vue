<template>
  <transition leave-active-class="duration-200">
    <div v-show="isOpen" :class="modalResponsiveClass" class="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:pb-0 ">
      <transition
        enter-active-class="duration-300 ease-out"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-show="isOpen" class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-black opacity-75" />
        </div>
      </transition>
      <transition
        enter-active-class="duration-300 ease-out"
        enter-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        enter-to-class="translate-y-0 opacity-100 sm:scale-100"
        leave-active-class="duration-200 ease-in"
        leave-class="translate-y-0 opacity-100 sm:scale-100"
        leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
      >
        <div
          v-show="isOpen"
          :class="modalSizeClass"
          class="flex flex-col px-5 py-4 overflow-hidden transition-all transform bg-white rounded-lg min-h-56 shadow-full xs:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <header class="flex items-center justify-between">
              <h4 class="text-lg font-bold text-yellow-600">
                {{ title }}
              </h4>
              <button class="inline-flex items-center justify-center w-8 h-8 transition-colors duration-150 rounded-full text-lightGray-400 bg-lightGray-100 active:bg-lightGray-200 focus:outline-none hover:bg-lightGray-200" aria-label="close" @click="$emit('close')">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" role="img" aria-hidden="true">
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd" />
                </svg>
              </button>
            </header>
          </div>
          <section class="modal-body">
            <slot name="modal-body">
              <!--                        I'm the default body!-->
            </slot>
          </section>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
const AVALIABLE_SIZES = ['sm', 'md', 'lg']
export default {
  name: 'Modal',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
      required: true
    },
    size: {
      type: String,
      required: false,
      default: 'md',
      validator (value) {
        return AVALIABLE_SIZES.includes(value)
      }
    },
    title: {
      type: String,
      required: true,
      default: 'Titulo Modal'
    }
  },
  computed: {
    modalSizeClass () {
      return this.size === 'sm'
        ? 'xs:max-w-sm'
        : this.size === 'lg'
          ? 'sm:max-w-4xl'
          : 'sm:max-w-md'
    },
    modalResponsiveClass () {
      return this.size === 'sm'
        ? 'xs:inset-0 xs:flex xs:items-center xs:justify-center'
        : 'sm:inset-0 sm:flex sm:items-center sm:justify-center'
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler (isOpen) {
        if (process.client) {
          if (isOpen) {
            document.body.classList.add('overflow-y-hidden', 'xs:mr-2')
          } else {
            setTimeout(() => {
              document.body.classList.remove('overflow-y-hidden', 'xs:mr-2')
            }, 200)
          }
        }
      }
    }
  }
}
</script>
