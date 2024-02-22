<template>
  <div class="Home">
        <!-- <div class="alert alert-error shadow-sm" v-if="deleteConfirmation">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Deleting the project will delete all the Tasks involved in the project. Are you sure You want to permanently delete the project: <b> {{ projects[projectKey].Name }}</b></span>
            </div>
            <div class="flex-none">
                <button class="btn btn-sm btn-ghost" @click='denydeletion' >Deny</button>
                <button class="btn btn-sm btn-primary" @click='acceptprojectdeletion'>OK</button>
            </div>
        </div> -->
    <div class="welcomeUser">
      <h1>Welcome {{ username }}!!!</h1>
      <a  href="#createproject" v-if="!isTaskView" class="tooltipContainer">
        <div class="ico-btn">
          <span class="ico-btn__plus"></span>
        </div>
        <span class="tooltiptext">Create Project</span>
      </a>
      <a href="#addtask" class="tooltipContainer" v-else>
        <div class="ico-btn">
          <span class="ico-btn__plus"></span>
        </div>
        <span class="tooltiptext">Add Task</span>
      </a>
    </div>
    <router-view></router-view>
    <CreateProject />
    <AddTask @submit-task="SubmitTask" :projectkey="projectKey" />
    <BaseModal/>
    <!-- <ProjectView
      :projectlist="projects"
      @delete-project="DeleteProject"
      @view-task="ViewTask"
      v-if="!isTaskView"
    /> -->
    <!-- <TaskView
      :projectlist="projects[projectKey]"
      :projectkey="projectKey"
      @edit-project="EditProject"
      @delete-project="DeleteProject"
      @back-home="BackToHome"
      @delete-task="DeleteTask"
      @edit-task="EditTask"
      v-else
    /> -->
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, onBeforeMount } from "vue";
// import ProjectView from "./ProjectView.vue";
import CreateProject from "../components/CreateProject.vue";
// import TaskView from "./TaskView.vue";
import AddTask from "../components/AddTask.vue";
import store from "@/store";
import BaseModal from "@/components/BaseModal.vue";
import { useRoute } from "vue-router";

// const isTaskView = ref(false);
const projectKey = ref(null)
// const projects = ref([])
const route = useRoute()
// const deleteConfirmation = ref(false)

// onMounted(() => {
//   // const projects = JSON.parse(localStorage.getItem("projects"));
//   // console.log(projects)
//   // store.commit('projectMod/addAllProject', projects)
//     // const projects = store.getters["projectMod/getProjects"];
//     isTaskView.value = store.getters["isTaskView"]
//   }
// )
// const submitProject = (data) => {
//   // if (projects.value === null) {
//   //   projects.value = [];
//   // }
//   // projects.value.push(data);
//   store.commit('projectMod/addProject', data)
//   // localStorage.setItem("projects", JSON.stringify(projects.value));
// }

// const DeleteProject = (index) => {
//   projectKey.value= index
//   deleteConfirmation.value= true
// }
// const acceptprojectdeletion = () => {
//   projects.value.splice(projectKey.value, 1);
//   store.commit('togglingTaskView', false)
//   isTaskView.value = false
//   localStorage.setItem("projects", JSON.stringify(projects.value));
//   deleteConfirmation.value = false
// }
// const denydeletion = () => {
//   deleteConfirmation.value= false
// }
// const ViewTask = (index) => {
//   store.commit('togglingTaskView',true);
//   isTaskView.value = true
//   projectKey.value = index;
// }
// const EditProject = (proj) => {
//   projects.value[proj.id].Name = proj.Name;
//   projects.value[proj.id].Desc = proj.Desc;
//   localStorage.setItem("projects", JSON.stringify(projects.value));
// }
// const EditTask = (task) => {
//   projects.value[task.id].Tasks[task.index].name = task.name
//   projects.value[task.id].Tasks[task.index].status = task.status
//   localStorage.setItem("projects", JSON.stringify(projects.value));
// }
// const BackToHome = () => {
//   store.commit('togglingTaskView',false);
//   isTaskView.value = false
// }
// const SubmitTask = (task) => {
//   projects.value[task.id].Tasks.push({
//     name: task.name,
//     status: task.status
//   });
//   localStorage.setItem("projects", JSON.stringify(projects.value));
// }
// const DeleteTask = (obj) => {
//   projects.value[obj.id].Tasks.splice(obj.index, 1);
//   localStorage.setItem("projects", JSON.stringify(projects.value));
// }
const username = computed(() => { return store.getters['authMod/getName'] })
const isTaskView = computed(() => { return store.getters['isTaskView'] })

// watch(route.params, (newVal) => {
//   if(newVal !== null || undefined) {
//     store.commit('togglingTaskView',true);
//   }
// })
onBeforeMount(() => {
  store.commit('projectMod/setAllProjects')
})
</script>

<style scoped>
.Home {
  display: flex;
  flex-direction: column;
}
.welcomeUser {
  /* box-shadow: 0 2px 8px rgb(0 0 0 / 26%); */
  padding: 0.5rem 1.8rem;
  /* background-color: #B1B2FF; */
  color: #4c4da8;
  font-weight: bold;
  width: 100%;
  /* margin: auto; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-radius: 10px; */
}
.welcomeUser > .btn {
  background: #4c4da8;
}
.welcomeUser > .btn:hover {
  background-color: #48486b;
}
.alert{
    width: 60%;
    margin: auto;
}

.ico-btn{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  border-radius: 50%;
  background:#4c4da8;
  transition: all .20s cubic-bezier(0.4, 0.0, 0.2, 1);
/*   border: 2px solid; */
}

.ico-btn__plus{
  width: 20px;
  height: 3px;
  background: white;
  border-radius: 2px;
  transition: all .25s cubic-bezier(0.4, 0.0, 0.2, 1);;
}

.ico-btn__plus::after{
  content: '';
  position: absolute;
  width: 20px;
  height: 3px;
  background: white;
  border-radius: 2px;
  transition: all .25s cubic-bezier(0.4, 0.0, 0.2, 1);
  
  transform: rotate(90deg);
}

.ico-btn:hover {
  transform: rotate(180deg);
  background-color: #48486b;
}

.tooltipContainer {
  display: inline-block;
  position: relative;
}

.tooltipContainer .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #4c4da8;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 8px;
  right: 115%;
}

.tooltipContainer .tooltiptext::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent transparent #4c4da8;
}
.tooltipContainer:hover .tooltiptext {
  visibility: visible;
}
</style>