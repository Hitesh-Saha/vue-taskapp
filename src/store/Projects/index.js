import projectMutations from './mutations';
import projectActions from './actions';
import projectgetters from './getters';

const projectModule = {
    namespaced: true,
    state() {
        return {
            projects: []
        }
    },
    mutations: projectMutations,
    actions: projectActions,
    getters: projectgetters
}

export default projectModule