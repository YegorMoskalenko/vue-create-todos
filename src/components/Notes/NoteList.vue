<template>
    <NoteItem
        v-for="(note, id) in this.notes"
        :note="note"
        :id="id"
        @remove="onRemove"
    />
    <dialog-window v-model:showDialog="dialogVisibleNote" class="dialog__remove__note" @click="setDialogVisibleNote">
      <strong style="margin-right: 10px">Confirm the note deletion !!!</strong>
      <theme-button @click="removeNoteConfirm(this.onId)">Remove the Note</theme-button>
    </dialog-window>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
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
      setDialogVisibleNote: "notesAndTodos/setDialogVisibleNote"
    }),
    ...mapActions({
      removeNoteConfirm: 'notesAndTodos/removeNoteConfirm'
    }),
    onRemove(id){
      this.onId = id
      this.setDialogVisibleNote(true)
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

</style>