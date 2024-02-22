import { getProjects } from "@/services/firebase";
const projectMutations = {
    addProject(state, payload) {
        if(state.projects === null) {
            state.projects = []
        }
        state.projects.push(payload);
        // localStorage.setItem("projects", JSON.stringify(state.projects));
    },
    setAllProjects(state) {
        if(state.projects.length == 0) {
            getProjects()
            .then(res => {
                state.projects = res
            })
        }
    }
}
export default projectMutations