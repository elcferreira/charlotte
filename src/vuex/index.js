import Vue from 'vue'   // get vue
import Vuex from 'vuex' // get vuex

// use Vuex
Vue.use(Vuex)


// 
// state
//
const state = {
  // data
  siteData: {},  

  // new data
  newData : {
    id: '',
  }
}

// 
// Mutations for controler state
//
const mutations = {
  // Create intance for future request
  CREATE_INSTANCE(state, id) {
    Vue.set(state.siteData, state.newData.id, {
      complete: false,
      content: ''
    })
  },

  // edit id by request
  EDIT_ID( state, newId ) {
    state.newData.id = newId
  },
  
  // Add data new in siteData
  ADD_DATA( state, params ){
    Vue.set(state.siteData[params.id], 'complete', true);
    Vue.set(state.siteData[params.id], 'content', params.content)
  },

  // download complete
  COMPLETE_DATA(state) {
    state.completed = !state.completed
  },

  // Clear data
  CLEAR_DATA(state){
    state.newData.id = ''
  }
}


// 
// Actions for store :S
//
const actions = {
  
  // action get header
  getDataInit ({commit, state, dispatch }, params) {
    if ( params ) {

      // trate id
      params.name = (params.name !== undefined) ? params.name : '' ;

      // edit id
      commit('EDIT_ID', params.name)

      // Create instance
      commit('CREATE_INSTANCE', params.name)

      // future parms date
      // params.name
     
      var _link = 'https://www.raphaelfabeni.com.br/rv/hotels.json'

      // request
      Vue.http.get( _link ).then(response => {
        
        // sucess, detect is 200 get JSON, if 404 request by endpoint
        if ( response.status === 200 ) {
          // commit update
          commit('ADD_DATA', {
            id: params.name,
            content: response.body
          });
        }
      })
    }
  }
}

const getters = {
  data: state => state.siteData,
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
