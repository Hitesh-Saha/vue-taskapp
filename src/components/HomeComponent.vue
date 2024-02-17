<template>
  <div class="Home">
    <div class="welcomeUser">
      <h1>Welcome Hitesh!!!</h1>
      <a href="#createproject" class="btn" v-if="!isTaskView">Create Project</a>
      <a href="#addtask" class="btn" v-else>Add Task</a>
    </div>
    <CreateProject 
      @submit-project="SubmitProject"/>
    <AddTask 
      @submit-task="SubmitTask" 
      :projectkey='projectKey' />
    <ProjectList 
      :projectlist='projects' 
      @delete-project="DeleteProject" 
      @view-task="ViewTask" 
      v-if="!isTaskView" />
    <TaskList 
      :projectlist='projects[projectKey]' 
      :projectkey='projectKey' 
      @edit-project='EditProject' 
      @delete-project="DeleteProject" 
      @back-home="BackToHome" 
      @delete-task="DeleteTask" 
      @edit-task="EditTask" 
      v-else/>
  </div>
</template>

<script>
import ProjectList from './ProjectList.vue'
import CreateProject from './CreateProject.vue'
import TaskList from './TaskList.vue'
import AddTask from './AddTask.vue'

export default {
  name: 'HomeComponent',
  components: {
    ProjectList,
    CreateProject,
    TaskList,
    AddTask
  },
  // props: ['propprojects'],
  data() {
    return {
      isTaskView:false,
      projectKey: null,
      projects: this.propprojects,
      // projects: [
        // {
        //   Name: 'Vue Project',
        //   Desc: 'this is a demo'
        // }
      // ],
      // tasks: [
        // [
        //   {
        //     name: 'Learn vue.js',
        //     status: 'InProgress'
        //   },
        //   {
        //     name: 'Learn react.js',
        //     status: 'InProgress'
        //   },
        // ],
        // [
        //   {
        //     name: 'Learn node.js',
        //     status: 'InProgress'
        //   },
        //   {
        //     name: 'Learn azure.js',
        //     status: 'InProgress'
        //   },
        // ]
      // ],
    }
  },
  methods: {
    SubmitProject(proj) {
      if(this.projects === null) {
        this.projects = []
      }
      this.projects.push(proj)
      localStorage.setItem('projects',JSON.stringify(this.projects))
    },
    DeleteProject(index) {
      this.projects.splice(index,1)
      this.isTaskView=false
      localStorage.setItem('projects',JSON.stringify(this.projects))
    },
    ViewTask(index) {
      this.isTaskView=true
      this.projectKey=index
    },
    EditProject(proj) {
      this.projects[proj.id].Name=proj.Name
      this.projects[proj.id].Desc=proj.Desc
      localStorage.setItem('projects',JSON.stringify(this.projects))
    },
    BackToHome() {
      this.isTaskView=false
    },
    SubmitTask(task) {
      this.projects[task.id].Tasks.push({
        name:task.name,
        status:task.status
      })
      localStorage.setItem('projects',JSON.stringify(this.projects))
    },
    DeleteTask(obj) {
      this.projects[obj.id].Tasks.splice(obj.index,1)
      localStorage.setItem('projects',JSON.stringify(this.projects))
    }
  }
}
</script>

<style scoped>
.Home{
  display:flex;
  flex-direction: column;
}
.welcomeUser{
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
.btn {
    background: #4c4da8;
}
.btn:hover {
    background-color: #48486b;
}
</style>