export const notesAndTodos = {
    state: () => ({
        notes: [],
        dialogVisibleNote: false,
        //noteId for adding todoItem to notes[noteId].todos
        noteId: 0,
        //two-way binding of todoTitle change
        todoTitleModel: ''
    }),
    mutations: {
        addNote(state, note){
            state.notes.push(note)
        },
        changeNoteId(state, noteId){
            state.noteId = noteId
        },
        addTodo(state, todo){
            state.notes[state.noteId].todos.push(todo)
        },
        todoDoneMutation(state, todo){
            todo.completed = true
        },
        todoNotDoneMutation(state, todo){
            todo.completed = false
        },
        changeTodoTitleModel(state, todoTitleModel){
            state.todoTitleModel = todoTitleModel
        },
        changeTodoTitle(state, todo){
            todo.todoTitle = state.todoTitleModel
        },
        setDialogVisibleNote(state, dialogVisibleNote){
          state.dialogVisibleNote = dialogVisibleNote
        },
        removeNoteConfirmMutation(state, id){
            state.notes.splice(id, 1)
        },
        removeTodoMutation(state, todoId){
            state.notes[state.noteId].todos.splice(todoId, 1)
        }
    },
    namespaced: true
}