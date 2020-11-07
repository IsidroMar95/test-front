<template>
  <div class="flex flex-col h-screen">
    <TheNavbar />
    <div class="flex flex-1 overflow-hidden">
      <TheSidebar />
      <div class="flex flex-col flex-1">
        <main class="flex-1 overflow-y-scroll bg-gray-100">
          <div class="container p-5 mx-auto">
            <nuxt />
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
