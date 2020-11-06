export const state = () => ({
  toggleSidebar: false
})

export const mutations = {
  setToggleSidebar (state) {
    state.toggleSidebar = !state.toggleSidebar
  }
}

export const getters = {
  toggleSidebar: state => state.toggleSidebar
}
