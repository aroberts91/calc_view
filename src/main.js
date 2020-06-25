import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import axios from 'axios';

Vue.config.productionTip = false

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    sum: '0',
    prev_sum: '0',
    display_history: false,
    prev_sum_list: [{
      id: 1,
      sum: '2+9',
      rslt: '11'
    },
      {
        id: 2,
        sum: '66+8',
        rslt: '74'
      },
      {
        id: 3,
        sum: '85x2',
        rslt: '170'
      }]
  },
  mutations: {
    updateSum(state, payload) {
      if( state.sum === '0' ) state.sum = '';

      if( payload.text === 'AC' ) {
        state.sum = '0';
        state.prev_sum = '0';
        return;
      }

      if( payload.text === 'x' ) payload.text = '*';

      const { text } = payload;

      if( payload.rslt ) return state.sum = text;

      state.sum += isNaN(text) ? ` ${text} ` : text;
    },
    updatePrevSum(state, payload) {
      state.prev_sum = payload.text;
    },
    toggleHistory(state) {
      state.display_history = !state.display_history;
    },
    loadHistory(state) {
      axios.get('http://localhost:80/calc/load')
          .then((response) => {
            state.prev_sum_list = response.data.res
          });
    }
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
