<template>
    <div class="projectList">
      <div v-if="projectList === null" class='NoProject'>
        <div>No Projects</div>
      </div>
      <div v-else v-for="project in projectList" :key="project.id">
        <div>{{project.title}}</div>
        <div class="btnGroup">
          <button class="btn" @click='viewTask(project.id)'>View</button>
          <button class="btn" @click='editProject(project.id)'>Edit</button>
          <button class="btn" @click='deleteProject(project.id)'>Delete</button>
        </div>
      </div>
    </div>
</template>

<script setup>
import { defineEmits, onMounted, ref, computed } from 'vue';
import store from '@/store';
import { useRouter } from 'vue-router';

const emit = defineEmits(['view-task', 'delete-project']);
// const projectList = ref([]);
const router = useRouter();

const deleteProject = (index) =>{
  // emit('delete-project',index)

}
const viewTask = (id) => {
  // emit('view-task',index)
  // store.commit('togglingTaskView',true);
  router.push('/projects/'+id)
}
const editProject = (id) => {
  EditModal.showModal()
}
onMounted(async () => {
  // projectList.value = store.getters["projectMod/getAllProjects"];
  store.commit('togglingTaskView',false);
})

const projectList = computed(() => {return store.getters["projectMod/getAllProjects"]})
</script>

<style scoped>
.projectList {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2rem;
}
.projectList > div {
    box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
    border-radius: 10px;
    padding: 0.5rem;
    background-color: #B1B2FF;
    color: #4c4da8;
    font-weight: bold;
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    font-size: 1rem;
}
.NoProject {
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  height: 5rem;
}
.btnGroup {
  display: flex;
  gap: 1rem;
}
.btn {
    background: #4c4da8;
}
.btn:hover {
    background-color: #48486b;
}
</style>