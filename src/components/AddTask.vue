<template>
    <div class="modal" id="addtask">
      <div class="modal-box relative">
        <a href="#" class="btn btn-sm btn-circle absolute right-2 top-2" @click="CancelFunction">✕</a>
        <h3 class="font-bold text-lg">Add a new Task to the Project</h3>
        <input v-model="task" type="text" placeholder="Enter Task" class="input input-bordered input-sm w-full max-w-sm" />
        <select v-model="status" class="select select-bordered w-full max-w-xs">
          <option disabled selected>Select Status</option>
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <div class="modal-action">
          <a href="#" class="btn" @click="SubmitTask">Submit</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AddTask',
  props: ['projectkey'],
  data() {
    return {
        task: '',
        status: 'Select Status',
        tasks: [
          {
            name: 'Vue Project',
            status: 'To Do'
          },
        ]
    }
  },
  methods: {
    CancelFunction() {
      this.task = ''
      this.status = ''
    },
    SubmitTask() {
      if(this.task.length === 0 || this.status.length === 0){
        return alert('Incomplete Information');
      } else {
          this.$emit('submit-task',{
          name: this.task,
          status: this.status,
          id: this.projectkey
        })
      }
      this.task=''
      this.status='Select Status'
    },
  }
}
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