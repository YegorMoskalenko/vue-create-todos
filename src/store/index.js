import { createStore } from 'vuex'
import {notesAndTodos} from "@/store/notesAndTodos";

export default createStore({
  modules: {
    notesAndTodos: notesAndTodos
  }
})
