import { createStore } from 'vuex'
import {notesAndTodos} from "@/store/notesAndTodos";
import VuexPersistence from 'vuex-persist'
const vuexLocalStorage = new VuexPersistence({
  key: 'vuex',
  storage: window.localStorage
})

export default createStore({
  modules: {
    notesAndTodos: notesAndTodos
  },
  plugins: [vuexLocalStorage.plugin]
})
