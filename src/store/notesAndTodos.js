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
    namespaced: true
}