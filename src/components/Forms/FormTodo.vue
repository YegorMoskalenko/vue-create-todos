<template>
  <div class="todo">
    <div class="todo__content">
      <theme-input
          id="todo__input"
          placeholder="Write a todo"
          v-model="todo.todoTitle"
      />
      <theme-button style="margin-left: 20px" @click="createTodoEmit">Create todo</theme-button>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  data(){
    return {
      todo: {
        todoTitle: ''
      },
      idParam: this.$route.params.id
    }
  },
  methods: {
    createTodoEmit(){
      this.todo.complited = false
      this.$emit('createTodo', this.todo)
    }
  },
  computed: {
    ...mapState({
      notes: state => state.notesAndTodos.notes
    }),
    inputFocus(){
      return document.querySelector('#todo__input').focus()
    }
  },
  mounted() {
    this.inputFocus
  }
}
</script>

<style lang="less">
@import "src/assets/styles/variables";
.todo{
  .todo__content{
    #todo__input{
      width: 500px;
    }
  }
}
</style>