import { getProjects } from "@/services/firebase"

const projectGetters = {
    getAllProjects(state) {
        // const projects = JSON.parse(localStorage.getItem("projects"));
        if(state.projects.length == 0) {
            getProjects()
            .then(res => {
                state.projects = res
                return state.projects;
            })
        }
        else {
            return state.projects; 
        }
        // return state.projects
    }
    // getProject(state) {
    //     const project = state.projects.filter
    // }
}
export default projectGetters