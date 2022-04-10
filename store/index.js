import { parsesJSON } from '~/utils'

const state = () => ({
  menuOpened: false,
  theme: 'dark',
  members: {
    status: 'init',
    error: null,
    data: []
  },
  index: {
    status: 'init',
    error: null,
    data: []
  }
})

const mutations = {
  GET_MEMBERS (state, payload) {
    state.members.data = payload
    state.members.status = 'success'
  },
  GET_INDEX (state, payload) {
    state.index.data = payload
    state.index.status = 'success'
  }
}

const getters = {
  getMembers: state => parsesJSON(state.members),
  getIndex: state => parsesJSON(state.index)
}

const actions = {
  async getMembers ({ commit }, params, callback) {
    const storeMembers = await this.$content('members')
      .fetch()

    commit('GET_MEMBERS', storeMembers)
  },
  async getIndex ({ commit }, params, callback) {
    const storeIndex = await this.$content('index')
      .fetch()

    commit('GET_INDEX', storeIndex)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
