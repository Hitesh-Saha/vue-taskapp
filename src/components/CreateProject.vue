<template>
    <div class="modal" id="createproject">
      <div class="modal-box relative">
        <a href="#" class="btn btn-sm btn-circle absolute right-2 top-2" @click="closeModal">✕</a>
        <h3 class="font-bold text-lg">Create a new Project</h3>
        <input v-model="projectTitle" @keyup="validate" type="text" placeholder="Enter Project Title" class="input input-bordered input-sm w-full max-w-sm" />
        <textarea v-model="projectDescription" class="textarea textarea-bordered w-full max-w-sm" placeholder="Enter Description..."></textarea>
        <div class="modal-action">
          <a href="#" class="btn" @click="submitProject">Submit</a>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['submit-project']);
const projectTitle = ref('');
const projectDescription = ref('');

const closeModal = () => {
  projectTitle.value = ''
  projectDescription.value = ''
  // emit('onCloseModal')
}
const submitProject = () => {
  if(projectTitle.value.trim() === '' || projectDescription.value.trim() === ''){
    return alert('Incomplete Information');
  } else {
    emit('submit-project',{
      id: new Date().getTime().toString(),
      title: projectTitle.value,
      description: projectDescription.value,
      tasks: []
    })
    closeModal();
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
.textarea{
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