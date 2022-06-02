<template>
  <transition-group name="notes">
    <NoteItem
        v-for="(note, id) in this.notes"
        :note="note"
        :id="id"
        :key="id"
        @remove="onRemove"
    />
  </transition-group>
    <dialog-window v-model:showDialog="this.dialogVisibleNote" class="dialog__remove__note" @click="this.setDialogVisibleNote">
      <strong style="margin-right: 10px">Confirm the note deletion !!!</strong>
      <theme-button @click="removeNoteConfirm">Remove the Note</theme-button>
    </dialog-window>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import NoteItem from "@/components/Notes/NoteItem";
export default {
  data(){
    return {
      onId: 0
    }
  },
  components: {
    NoteItem
  },
  methods: {
    ...mapMutations({
      setDialogVisibleNote: "notesAndTodos/setDialogVisibleNote",
      removeNoteConfirmAction: "notesAndTodos/removeNoteConfirmMutation"
    }),
    onRemove(id){
      this.onId = id
      this.setDialogVisibleNote(true)
    },
    removeNoteConfirm(){
      this.removeNoteConfirmAction(this.onId)
      this.setDialogVisibleNote(false)
    }
  },
  computed:{
    ...mapState({
      notes: state => state.notesAndTodos.notes,
      dialogVisibleNote: state => state.notesAndTodos.dialogVisibleNote
    })
  }
}
</script>

<style lang="less" scoped>
@import "src/assets/styles/variables";
.dialog__remove__note{
  .dialog__content{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.notes-item {
  display: inline-block;
  margin-right: 10px;
}
.notes-enter-active,
.notes-leave-active {
  transition: all 1s ease;
}
.notes-enter-from,
.notes-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>