<template>
    <div>
        <div class="text-sm breadcrumbs">
            <ul>
                <li @click="BackToHome"><a>Home</a></li>  
                <li>{{project.title}}</li>
            </ul>
        </div>
        <div class="flex w-full">
            <div class="grid tasklist" style="width:70%">
                <div class="task-header">
                    <header>TaskList</header>
                </div>
                <div class="tasks">
                    <div v-if="project.tasks === undefined || project.tasks.length === 0" class='NoTask'>
                        <div>No Tasks</div>
                    </div>
                    <div v-for="(task,index) in project.tasks" :key="index">
                        <div style="width: 20%;">{{task.status}}</div>
                        <!-- <div style="width: 20%;"  v-else>
                            <select v-model="taskStatus" class="select select-bordered w-full max-w-xs">
                                <option disabled selected>Select Status</option>
                                <option>To Do</option>
                                <option>In Progress</option>
                                <option>Done</option>
                            </select>
                        </div> -->
                        <div style="width: 70%;">{{task.name}}</div>
                        <!-- <div style="width: 70%;" v-else>
                            <input v-model="taskName" type="text" placeholder="Enter Task" class="input input-bordered input-sm w-full max-w-sm" />
                        </div> -->
                        <div class='btnGroup'>
                            <button class="btn" @click='editTask(index)' >Edit</button>
                            <button class="btn" @click='deleteTask(index)' >Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider divider-horizontal"></div>
            <!-- <div class="grid ProjectDetails" style="width:30%" v-if="!taskEditable">
                <div class="EditProjectHeader">
                    <header>Edit The Project Details</header>
                </div>
                <input v-model='projectTitle' @keyup="SubmitProject" type="text" placeholder="Enter Project Title" class="input input-bordered input-md w-full max-w-sm" />
                <textarea v-model='projectDesc' @keyup="SubmitProject" class="textarea textarea-bordered w-full max-w-sm" placeholder="Enter Description..." ></textarea>
                <div class="btnGroup">
                    <a href="#" class="btn" @click="DeleteProject">Delete</a>
                </div>
            </div>
            <div class="grid ProjectDetails" style="width:30%" v-if="taskEditable">
                <div class="EditProjectHeader">
                    <header>Edit The Task</header>
                </div>
                <input v-model="taskName" type="text" placeholder="Enter Task" class="input input-bordered input-sm w-full max-w-sm" />
                <select v-model="taskStatus" class="select select-bordered w-full max-w-xs">
                    <option disabled selected>Select Status</option>
                    <option>To Do</option>
                    <option>In Progress</option>
                    <option>Done</option>
                </select>
                <div class="btnGroup">
                    <a href="#" class="btn" @click="submitTask(taskIndex)">Submit</a>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script setup>
import store from '@/store';
import {ref, defineProps, onMounted} from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps(['projectlist', 'projectkey'])
// const projectTitle = ref(props.projectlist.Name);
// const projectDesc= ref(props.projectlist.Desc);
const projectTitle = ref('');
const projectDesc= ref('');
const taskEditable= ref(false);
const taskName= ref('');
const taskStatus= ref('');
const taskIndex= ref(null);
const route = useRoute();
const projectId = ref('');
const project = ref({});

// const SubmitProject = () => {
//     this.$emit('edit-project',{
//     Name: projectTitle.value,
//     Desc: projectDesc.value,
//     id: props.projectkey
// })
// }
// const DeleteProject = () => {
//     this.$emit('delete-project',props.projectkey)
// }
// const BackToHome = () => {
//     this.$emit('back-home')
// }
// const deleteTask = (index) => {
//     this.$emit('delete-task',{
//         id: props.projectkey,
//         index: index
//     })
// }
// const editTask = (index) => {
//     taskEditable.value = true
//     taskIndex.value = index
//     taskName.value = props.projectlist.Tasks[index].name
//     taskStatus.value = props.projectlist.Tasks[index].status
// }
// const submitTask = (index) => {
//     this.$emit('edit-task',{
//         id: props.projectkey,
//         index: index,
//         name: taskName.value,
//         status: taskStatus.value
//     })
//     taskEditable.value = false
// }
onMounted(() => {
    console.log('hey')
    projectId.value = route.params.projectId;
    console.log(projectId.value)
    const projects = store.getters["projectMod/getAllProjects"];
    const selectedProject = projects.filter((item) => {
        return item.id.trim() == projectId.value.trim()
    })
    console.log(selectedProject)
    project.value = selectedProject[0]
    projectTitle.value = project.value.title
    projectDesc.value = project.value.description
})
//   created() {
//       const id = this.$route.params.projectId
//       const projects = JSON.parse(localStorage.getItem('projects'))
//       this.projectlist = projects[id]
// created() {
//       const id = this.$route.params.projectId
//       const projects = JSON.parse(localStorage.getItem('projects'))
//       this.projectlist = projects[id]
//       this.projectkey = id
//       this.projectTitle = this.projectlist.Name
//       this.projectDesc = this.projectlist.Desc
//   }
//   }
</script>

<style scoped>
.breadcrumbs {
    padding: 0.5rem 1.8rem;
}
.flex {
    display: flex;
}
.tasklist {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: center; */
}
.task-header > header {
    box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
    margin: 1rem;
    border-radius: 10px;
    padding: 0.5rem 1.8rem;
    background-color: #48486b;
    color: white;
    text-align: center;
    width: 100%;
    font-size: 1.5rem;
}
.tasks {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    max-height: 70%;
    overflow: auto;
}
.tasks > div {
    box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
    border-radius: 10px;
    padding: 0.5rem;
    background-color: #B1B2FF;
    color: #4c4da8;
    font-weight: bold;
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    font-size: 1rem;
}
.NoTask {
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
.ProjectDetails {
    /* display: flex;
    flex-direction: column; */
    gap: 1.5rem;
    /* justify-content: center; */
    align-items: center;
    padding: 0rem 1.8rem 0rem 0rem;
    /* max-height: 15rem !important; */
}
.EditProjectHeader > header {
    box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
    margin: 1rem 0rem;
    border-radius: 10px;
    padding: 0.5rem 1.8rem;
    background-color: #48486b;
    color: white;
    text-align: center;
    width: 100%;
    font-size: 1.5rem;
}
</style>