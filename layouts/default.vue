<template>
  <div class="flex flex-col h-screen">
    <TheNavbar />
    <div class="flex flex-1 overflow-hidden">
      <TheSidebar />
      <div class="flex flex-col flex-auto">
        <main class="flex-1 overflow-y-scroll bg-gray-100">
          <div class="flex overflow-auto">
            <div class="flex-1 overflow-y-auto">
              <div class="container flex-grow mx-auto mt-6 mb-10">
                <div class="flex flex-col md:px-5">
                  <nuxt />
                </div>
              </div>
            </div>
          </div>
        </main>
        <TheFooter />
      </div>
    </div>
    <div v-if="toggleSidebar" class="fixed inset-0 z-10 bg-black opacity-25 md:hidden" tabindex="-1" @click="toggleS" />
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      toggleSidebar: 'sidebar/toggleSidebar'
    })
  },
  methods: {
    ...mapMutations({
      toggleS: 'sidebar/setToggleSidebar'
    })
  }
}
</script>
