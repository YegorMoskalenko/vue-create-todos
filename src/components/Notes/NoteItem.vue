<template>
  <div class="note__item">
    <div class="note__content">
      <strong class="note__title">{{this.note.title}}</strong>
      <div class="note__todos">
        <div v-if="this.note.todos.length > 0" class="note__todos__content" v-for="todoSliced in this.note.todos.slice(0, 2)">
          {{todoSliced.todoTitle}}
        </div>
        <div v-else class="note__todos__content">
          You need to add todos !!!
        </div>
        <strong v-if="this.note.todos.length > 0" id="more__todos">. . .</strong>
      </div>
      <div class="note__btns">

        <theme-button class="note__btn" v-if="this.note.todos.length < 1" @click="$router.push(`/note-item/${this.id}`)">Add Todos</theme-button>
        <theme-button class="note__btn" v-if="this.note.todos.length > 0" @click="$router.push(`/note-item/${this.id}`)">Edit</theme-button>

        <theme-button class="note__btn" @click="emitId">Remove</theme-button>
      </div>
    </div>
  </div>
</template>

<script>
import NoteItemPage from "@/pages/NoteItemPage";
import {mapState} from 'vuex'
export default {
  components: {
    NoteItemPage
  },
  props:{
    note: {
      type: Object
    },
    id: Number
  },
  methods: {
    emitId(){
      this.$emit('remove', this.id)
    }
  },
  computed:{
    ...mapState({
      notes: state => state.notesAndTodos.notes
    }),
  }
}
</script>

<style lang="less" scoped>
@import "src/assets/styles/variables";
.note__item{
  align-items: center;
  border: 5px solid @theme-color;
  margin: 50px 50px 0 50px;
  border-radius: 13px;
  box-shadow: 8px 12px 15px @theme-color-2;

  .note__title{
    color: @theme-color-2;
    font-size: 25px
  }

  .note__content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 20px 10px 20px;

    .note__btns{
      .note__btn{
        margin-right: 20px;
      }
    }

    .note__todos{
      margin: 0 15px 0 15px;

      #more__todos{
        display: flex;
        color: @theme-color-2;
      }

      .note__todos__content{
        display: flex;
        color: @theme-color-2;
      }
    }
  }

  &:hover{
    filter: brightness(1.2);
    transition-duration: 0.5s;
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }
}
@media (max-width: 767px) {
  .note__item{
    .note__content{
      .note__btns{
        display: flex;
        flex-direction: column;

        .note__btn{
          margin: 5px;
        }
      }
    }
  }
}
@media (max-width: 425px) {
  .note__item{
    margin: 40px 20px 0 20px;
  }
}
@media (max-width: 370px) {
  .note__item{
    .note__content{
      .note__btns{
        .note__btn{
          font-size: 10px;
        }
      }
    }
    .note__title{
      font-size: 16px;
    }
  }
}
@media (min-width: 1280px) {
  .note__item{
    margin: 50px 100px 0 100px;
  }
}
</style>