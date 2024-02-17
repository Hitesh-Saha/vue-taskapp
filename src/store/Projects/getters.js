const projectGetters = {
    getAllProjects(state) {
        const projects = JSON.parse(localStorage.getItem("projects"));
        if(projects===undefined) {
            state.projects = []
        }
        else {
            state.projects = projects
        }
        return state.projects
    }
    // getProject(state) {
    //     const project = state.projects.filter
    // }
}
export default projectGetters