<template>
<div class="note">
  <div class="note__content">
    <theme-input
        id="note__input"
        placeholder="Write a title"
        v-model="note.title"
    />
    <theme-button style="margin-left: 20px" @click="createNote">Create a note</theme-button>
  </div>
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
  data(){
    return {
      note: {
        title: ''
      }
    }
  },
  methods: {
    createNote(){
      if(this.notes.length >= 1){
        this.note.id = this.notes[this.notes.length - 1].id + 1
      }
      else {
        this.note.id = 1
      }
      this.note.todos = []
      this.$emit('createNote', this.note)
    }
  },
  computed: {
    ...mapState({
      notes: state => state.notesAndTodos.notes
    }),
    inputFocus(){
      return document.querySelector('#note__input').focus()
    }
  },
  mounted() {
    this.inputFocus
  }
}
</script>

<style lang="less">
@import "src/assets/styles/variables";

</style>