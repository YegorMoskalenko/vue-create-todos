<template>
  <div class="note__item__page">
    <div class="__links">
      <theme-button @click="$router.push('/')">Back to NoteList</theme-button>
    </div>
    <div class="__title">
      <strong class="note__title">{{this.notes[this.id].title}}</strong>
    </div>
    <div class="__todos">
      <theme-button id="add__todo" @click="openForm">Add Todo</theme-button>
      <strong class="title-todos">TODOS:</strong>
      <transition-group name="todos">
      <TodoItem
          @removeTodo="removeTodo"
          v-if="this.notes[this.id].todos.length >= 1"
          v-for="(todo, todoId) in this.notes[this.id].todos"
          :todo="todo"
          :todoId="todoId"
          :key="todoId"
      />
        <div v-else>
          <h3 class="else__todos__title">You need to add todos!</h3>
        </div>
      </transition-group>
    </div>

    <dialog-window v-model:showDialog="dialogVisible">
        <FormTodo @createTodo="createTodo"/>
    </dialog-window>

    <dialog-window v-model:showDialog="dialogVisibleTodo" class="dialog__remove__todo">
      <strong>Confirm todo deletion !!!</strong>
      <theme-button @click="removeTodoСonfirm">Remove Todo</theme-button>
    </dialog-window>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import FormTodo from "@/components/Forms/FormTodo";
import TodoItem from "@/components/Todos/TodoItem";
export default {
  components: {
    FormTodo,
    TodoItem
  },
  data(){
    return {
      id: this.$route.params.id,
      dialogVisible: false,
      dialogVisibleTodo: false,
      getTodoId: {}
    }
  },
  computed: {
    ...mapState({
      notes: state => state.notesAndTodos.notes
    }),
  },
  methods: {
    ...mapMutations({
      addTodo: 'notesAndTodos/addTodo',
      changeNoteId: 'notesAndTodos/changeNoteId',
      removeTodoMutation: 'notesAndTodos/removeTodoMutation'
    }),
    openForm(){
      this.dialogVisible = true
    },
    createTodo(todo){
      this.changeNoteId(this.id)
      this.addTodo(todo)
      this.dialogVisible = false
    },
    removeTodo(todoId){
      this.dialogVisibleTodo = true
      this.getTodoId = todoId
    },
    removeTodoСonfirm(){
      this.changeNoteId(this.id)
      this.removeTodoMutation(this.getTodoId)
      this.dialogVisibleTodo = false
    }
  }
}
</script>

<style lang="less">
@import "src/assets/styles/variables";
.note__item__page{
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dialog__remove__todo{
    .dialog__content{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #b3ffde !important;
    }
  }

  .note__title{
    font-size: 30px;
    width: auto;
    height: auto;
    padding: 20px 40px;
    background: @theme-color;
    color: @theme-color-2;
    border: 3px solid @theme-color-2;
    border-radius: 100px;
    box-shadow: 4px 8px 8px @theme-color-2;
  }

  .__todos{
    margin-top: 80px;

    #add__todo{
      margin-left: 150px;
    }

    .else__todos__title{
      color: @theme-color-2;
      display: flex;
      justify-content: center;
      margin-top: 30px;
    }

    .title-todos{
      font-size: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: @theme-color-2;
      border-bottom: 2px solid @theme-color-2;
    }
  }
  .__links{
    margin-bottom: 50px;
  }
}
@media (max-width: 767px) {
  .note__item__page{
    .__todos{
      #add__todo{
        margin-left: 60px;
      }
    }
  }
}
@media (max-width: 425px) {
  .note__item__page{
    .note__title{
      font-size: 16px;
    }
    .__todos{
      #add__todo{
        margin-left: 20px;
      }
    }
  }
}
@media (max-width: 340px) {
  .note__item__page{
    .__todos{
      #add__todo{
        margin-left: 45px;
      }
    }
  }
}
@media (min-width: 375px) {
  .note__item__page{
    .__todos{
      .title-todos{
        width: 100vw;
      }
    }
  }
}
.todos-item {
  display: inline-block;
  margin-right: 10px;
}
.todos-enter-active,
.todos-leave-active {
  transition: all 1s ease;
}
.todos-enter-from,
.todos-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>