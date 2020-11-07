<template>
  <div>
    <Modal :is-open="isModalVisible" title="Imagen Guardada" @close="isModalVisible = false" />
    <div class="flex flex-col w-full">
      <h1 class="mt-1 text-2xl font-medium leading-tight text-gray-900">
        Subir imagen
      </h1>
      <form class="flex flex-col" @submit.prevent="storeImage">
        <div class="flex flex-col my-5 space-y-5 md:flex-row md:space-x-8">
          <label class="block md:w-1/2">
            <span class="text-gray-700">Nombre</span>
            <input v-model="imageName" type="text" class="block w-full mt-1 form-input input-custom" placeholder="Rick & morty">
          </label>
          <label class="block md:w-1/2">
            <span class="text-gray-700">Descripción de la imagen</span>
            <textarea v-model="imageDescription" class="block w-full mt-1 form-textarea textarea-custom" rows="3" placeholder="Alguna descripción..." />
          </label>
        </div>
        <div
          class="relative flex flex-col items-center justify-center w-full h-auto p-2 transition duration-500 ease-in-out bg-yellow-100 rounded-lg"
          :class="{'bg-yellow-200' : dragging}"
          @drop.prevent="dropImage"
          @dragover.prevent="dragging=true"
          @dragleave="dragging=false"
          @dragend="dragging=false"
        >
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-16 h-16 text-yellow-600">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <div class="flex">
            <label for="files" class="text-yellow-700">
              <span class="font-bold cursor-pointer hover:underline">{{ file ? file.name : 'busca tu imagen en tu ordenador' }}</span>
              <span>o arrastrala</span>
            </label>
            <input id="files" type="file" accept="image/x-png,image/jpeg" class="hidden" @change="inputImage">
          </div>
        </div>
        <button v-if="isDataFull" class="self-end px-5 py-3 mt-5 font-medium leading-5 text-white transition-colors duration-150 bg-yellow-600 border border-transparent rounded-lg active:bg-yellow-600 hover:bg-yellow-700 focus:outline-none">
          Guardar imagen
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'tweakOpacity',
  data () {
    return {
      dragging: false,
      file: null,
      imageName: '',
      imageDescription: '',
      dateTime: '',
      isModalVisible: false
    }
  },
  computed: {
    isDataFull () {
      return this.file != null && this.imageName !== '' && this.imageDescription !== ''
    }
  },
  methods: {
    inputImage (event) {
      this.file = event.target.files[0]
    },
    dropImage (event) {
      this.dragging = false
      this.file = event.dataTransfer.files[0]
    },
    storeImage () {
      const today = new Date()
      const date = `${today.getFullYear()}${(today.getMonth() + 1)}${today.getDate()}`
      const time = `${today.getHours()}${today.getMinutes()}${today.getSeconds()}`

      const reader = new FileReader()
      reader.readAsDataURL(this.file)
      reader.onloadend = () => {
        const base64String = reader.result.replace('data:', '').replace(/^.+,/, '')
        const data = {
          id: `${date}${time}`,
          name: this.imageName,
          description: this.imageDescription,
          file: base64String
        }
        localStorage.setItem(`${date}${time}`, JSON.stringify(data))
      }

      this.isModalVisible = true
      setTimeout(() => {
        this.clearForm()
      }, 200)
    },
    clearForm () {
      this.file = null
      this.imageName = ''
      this.imageDescription = ''
    }
  }
}
</script>
