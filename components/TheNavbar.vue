<template>
  <div>
    <header class="flex flex-shrink-0">
      <div class="flex-shrink-0 px-4 py-4 bg-yellow-500 md:bg-yellow-700 md:w-56">
        <button class="block text-white hover:text-gray-400 md:hidden" @click="toggleS">
          <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM4 17a1 1 0 100 2h7a1 1 0 100-2H4z" />
          </svg>
        </button>
        <div class="hidden md:flex md:items-center md:w-full">
          <span class="text-sm text-xl font-medium tracking-widest text-white">
            apithy
          </span>
        </div>
      </div>

      <div class="flex items-center justify-end flex-1 pl-2 pr-6 bg-yellow-500 sm:justify-between lg:px-6">
        <!-- dropdown -->
        <div class="flex items-center ml-auto">
          <div id="dropdown" class="relative block">
            <button class="inline-flex items-center py-2 pl-6 pr-3 text-sm font-semibold text-white rounded-lg z-75 bg-kbis-800 hover:bg-kbis-700 focus:outline-none focus:shadow-none active:bg-kbis-900" @click="toggleAccountDropdown = true">
              Cuenta
              <svg class="w-6 h-6 ml-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z" />
              </svg>
            </button>
            <div v-if="toggleAccountDropdown" class="fixed inset-0 bg-black opacity-25 z-75" tabindex="-1" @click="toggleAccountDropdown = false" />
            <transition
              enter-class="transition-all transform scale-90 opacity-0"
              enter-active-class="transition duration-75 ease-out"
              enter-to-class="transform scale-100 opacity-100"
              leave-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-to-class="transform scale-90 opacity-0"
            >
              <div v-if="toggleAccountDropdown" class="absolute right-0 mt-3 text-left origin-top-right transform z-75">
                <div class="w-56 bg-white rounded-lg shadow-lg sm:w-64">
                  <div class="flex items-center px-6 py-4">
                    <div class="flex items-center justify-center flex-shrink-0 w-6 w-10 h-6 h-10 font-medium text-white uppercase bg-yellow-500 rounded-full ">
                      <span>IM</span>
                    </div>
                    <div class="ml-4">
                      <p class="font-semibold leading-none text-gray-900">
                        Isidro Martínez
                      </p>
                      <p class="">
                        <span class="text-sm leading-none text-gray-600">
                          Administrador
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="py-1 border-t-2 border-gray-200">
                    <a href="" class="flex items-center block px-6 py-3 leading-tight hover:bg-gray-200">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-gray-700">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span class="ml-3 text-sm">Tu Perfil</span>
                    </a>
                    <a href="" class="flex items-center block w-full px-6 py-3 leading-tight text-left hover:bg-gray-200" onclick="event.preventDefault();  document.getElementById('logout-form').submit();">
                      <svg viewBox="0 0 20 20" class="w-5 h-5 text-gray-700" fill="currentColor" focusable="false" aria-hidden="true">
                        <path d="M10 16a1 1 0 1 1 0 2c-4.411 0-8-3.589-8-8s3.589-8 8-8a1 1 0 1 1 0 2c-3.309 0-6 2.691-6 6s2.691 6 6 6zm7.707-6.707a.999.999 0 0 1 0 1.414l-3 3a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L14.586 11H10a1 1 0 1 1 0-2h4.586l-1.293-1.293a.999.999 0 1 1 1.414-1.414l3 3z" fill-rule="evenodd" />
                      </svg>
                      <span class="ml-3 text-sm"> Cerrar Sesión</span>
                    </a>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
        <!-- dropdown -->
      </div>
    </header>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'TheNavbar',
  data () {
    return {
      toggleAccountDropdown: false
    }
  },
  methods: {
    ...mapMutations({
      toggleS: 'sidebar/setToggleSidebar'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
