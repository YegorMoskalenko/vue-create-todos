<template>
  <div class="todos__content">
    <div class="todos__titles__actions">
      <strong class="text__done" v-if="this.todo.completed === true">Done</strong>
      <div class="todos__titles">
        <h4 class="todo__title">{{this.todo.todoTitle}}</h4>
      </div>
      <div class="todos__actions">
        <theme-button v-if="this.todo.completed === true" class="btns__actions" @click="this.todo.completed = false">Not done</theme-button>
        <theme-button v-else class="btns__actions" @click="this.todo.completed = true">Done</theme-button>

        <theme-button class="btns__actions btn__edit" @click="this.dialogVisibleTodoEdit = true">Edit Todo</theme-button>
        <theme-button class="btns__actions" @click="$emit('removeTodo', this.todoId)">Remove Todo</theme-button>
      </div>
    </div>

    <dialog-window v-model:showDialog="dialogVisibleTodoEdit" class="dialog__edit">
      <theme-input placeholder="Edit todo" v-model="this.todoTitleModel" id="input__edit"/>
      <theme-button @click="pushEdit">Edit</theme-button>
    </dialog-window>

  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return {
      idParam: this.$route.params.id,
      dialogVisibleTodoEdit: false,
      todoTitleModel: ''
    }
  },
  props: {
    todo: {
      type: Object
    },
    todoId: Number
  },
  methods: {
    pushEdit(){
      this.todo.todoTitle = this.todoTitleModel
      this.dialogVisibleTodoEdit = false
      this.todoTitleModel = ''
    }
  },
  computed: {
    ...mapState({
      notes: state => state.notesAndTodos.notes
    }),
  }
}
</script>

<style lang="less">
@import "src/assets/styles/variables";
.todos__content{

  .dialog__edit{
    display: flex;
    justify-content: space-between;
  }

  .dialog__edit{
    .dialog__content{
      display: flex;
      justify-content: space-between;
    }
  }

  .todos__titles__actions{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: @theme-color;
    border: 2px solid @theme-color-2;
    border-radius: 12px;
    padding: 10px 25px;
    margin: 20px 80px 0 80px;
    box-shadow: 4px 8px 8px @theme-color-2;

    .text__done{
      color: green;
      margin: 15px;
    }

    .todos__titles{
      display: flex;
    }

    .btns__actions{
      margin: 5px;
    }

    .todos__actions{
      display: flex;
      justify-content: center;
    }

    &:hover{
      filter: brightness(1.2);
      transition-duration: 0.5s;
      -webkit-transform: scale(1.05);
      -ms-transform: scale(1.05);
    }
  }
}
.todo__done{
  text-decoration: line-through;
}
@media (max-width: 600px) {
  .todos__content {
    .todos__titles__actions{
      .todos__actions{
        display: flex;
        flex-direction: column;
      }
    }
  }
}
@media (max-width: 575px) {
  .todos__content {
    .todos__titles__actions{
      margin: 20px 20px 0 20px;
    }
  }
}
@media (max-width: 475px) {
  .dialog__edit{
    #input__edit{
      width: 250px;
    }
  }
}
@media (max-width: 425px) {
  .dialog__window {
    .dialog__content{
      min-width: 0 !important;
    }
  }
}
@media (min-width: 575px) {
  .dialog__edit{
    #input__edit{
      width: 400px;
      margin-right: 10px
    }
  }
}
</style>