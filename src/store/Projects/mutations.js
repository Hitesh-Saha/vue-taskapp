const projectMutations = {
    addProject(state, payload) {
        if(state.projects === null) {
            state.projects = []
        }
        state.projects.push(payload);
        // localStorage.setItem("projects", JSON.stringify(state.projects));
    }
}
export default projectMutations