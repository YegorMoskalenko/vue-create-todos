<template>
  <div class="header">
    <div class="btns__in__header">
      <theme-button class="btn__create_note" @click="openDialog">Create the note</theme-button>
    </div>
  </div>
  <div class="note__list">
    <NoteList />
  </div>
  <div class="create__note__dialog">
    <dialog-window v-model:showDialog="dialogVisible">
      <FormNote @createNote="createNote"/>
    </dialog-window>
  </div>
</template>

<script>
import NoteList from "@/components/Notes/NoteList";
import FormNote from "@/components/Forms/FormNote";
import {mapState, mapMutations} from 'vuex'

export default {
  components: {
    NoteList,
    FormNote
  },
  data(){
    return {
      dialogVisible: false
    }
  },
  methods: {
    ...mapMutations({
      addNote: 'notesAndTodos/addNote'
    }),
    openDialog(){
      this.dialogVisible = true
    },
    createNote(note){
      this.addNote(note)
      this.dialogVisible = false
    }
  },
  computed: {
    ...mapState({
      notes: state => state.notesAndTodos.notes
    })
  }
}
</script>

<style lang="less" scoped>
@import "src/assets/styles/variables";
.header{
  background: @theme-color;
  height: 100px;
  box-shadow: 0 2px 5px @theme-color-2;

  .btns__in__header{
    height: 100px;
    display: flex;
    align-items: center;

    .btn__create_note{
      margin-left: 50px;
    }
  }
}
</style>