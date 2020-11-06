<template>
  <div :class="toggleSidebar ? 'transform translate-x-0 transition-transform duration-300 ease-out' : 'transform -translate-x-full transition-transform duration-200 ease-in'" class="fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto bg-gray-100 border-r md:w-56 md:static md:block md:transform md:translate-x-0 md:transition-none">
    <div class="flex items-center justify-between block px-4 mt-3 md:hidden">
      <span class="text-sm text-xl font-medium tracking-widest text-yellow-500">
        apithy
      </span>
      <button class="text-gray-900 lg:hidden" @click="toggleS">
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z" />
        </svg>
      </button>
    </div>
    <nav class="flex flex-col mt-8 md:mt-5 ">
      <div class="flex flex-col px-3 mx-3">
        <ul>
          <li>
            <nuxt-link to="/" class="sidebar-link group hover:bg-gray-200" @click.native="toggleS">
              <span class="flex items-center">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="icon-sidebar group-hover:text-yellow-600">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span class="ml-3 group-hover:text-yellow-900">Galeria</span>
              </span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/upload" class="sidebar-link group hover:bg-gray-200" @click.native="toggleS">
              <span class="flex items-center justify-center ">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="icon-sidebar group-hover:text-yellow-600">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <span class="ml-3 group-hover:text-yellow-900">Subir Imagen</span>
              </span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'TheSidebar',
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
