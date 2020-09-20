import Vue from 'vue';
import Vuex from 'vuex';
import { createVuexStore } from 'vuex-simple';
import { TasksStore } from './store';
const instance = new TasksStore();

Vue.use(Vuex)

export default createVuexStore(instance, {
  strict: false,
  modules: {},
  plugins: []
});