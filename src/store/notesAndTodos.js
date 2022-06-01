import VuexPersistence from 'vuex-persist'
const vuexLocalStorage = new VuexPersistence({
    supportCircular: true,
    key: 'vuex',
    storage: window.localStorage
})
export const notesAndTodos = {
    state: () => ({
        notes: [],
        dialogVisibleNote: false,
        getNotes: {}
    }),
    mutations: {
        setGetNotes(state, getNotes){
          state.getNotes = getNotes
        },
        setDialogVisibleNote(state, dialogVisibleNote){
          state.dialogVisibleNote = dialogVisibleNote
        }
    },
    actions: {
        removeNote({state, commit}, note){
            commit('setGetNotes', note)
            commit('setDialogVisibleNote', true)
        },
        removeNoteConfirm({state, commit}, id){
            state.notes.splice(id, 1)
            commit('setDialogVisibleNote', false)
        }
    },
    plugins: [vuexLocalStorage.plugin],
    namespaced: true
}