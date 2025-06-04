// store/equipment.js
export const state = () => ({
  selectedEquipment: null,
})

export const mutations = {
  setSelectedEquipment(state, equipment) {
    state.selectedEquipment = equipment
  },
}

export const actions = {
  selectEquipment({ commit }, equipment) {
    commit('setSelectedEquipment', equipment)
  },
}

export const getters = {
  selectedEquipment: (state) => state.selectedEquipment,
}
