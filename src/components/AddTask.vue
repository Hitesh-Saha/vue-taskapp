<template>
    <div class="modal" id="addtask">
      <div class="modal-box relative">
        <a href="#" class="btn btn-sm btn-circle absolute right-2 top-2" @click="cancelFunction">✕</a>
        <h3 class="font-bold text-lg">Add a new Task to the Project</h3>
        <input v-model="task" type="text" placeholder="Enter Task" class="input input-bordered input-sm w-full max-w-sm text-white" />
        <select v-model="status" class="select select-bordered w-full max-w-xs text-white">
          <option disabled selected>Select Status</option>
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <div class="modal-action">
          <a href="#" class="btn" @click="submitTask">Submit</a>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const task = ref('');
const status = ref('Select Status');

const cancelFunction = () => {
  task.value = ''
  status.value = ''
};
const submitTask = () => {
  if(task.value.length === 0 || status.value.length === 0){
    return alert('Incomplete Information');
  } else {
      // this.$emit('submit-task',{
      // name: this.task,
      // status: this.status,
      // id: this.projectkey
    // })
    store.dispatch('projectMod/addTask', {
      name: task.value,
      status: status.value,
      id: new Date().getTime().toString(),
      projectId: ''
    })
    cancelFunction()
  }
};
</script>

<style scoped>
.modal{
    color: #4c4da8;
}
.modal-box {
    background: linear-gradient(to bottom,#EEF1FF, #D2DAFF );
}
.input{
    margin-top: 1rem;
}
.select{
    margin-top: 1rem;
    /* width: 80%; */
}
.btn {
    background: #4c4da8;
}
.btn:hover {
    background-color: #48486b;
}
</style>