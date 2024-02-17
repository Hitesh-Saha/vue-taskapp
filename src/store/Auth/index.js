import authMutations from './mutations';
import authActions from './actions';
import authgetters from './getters';

const authModule = {
    namespaced: true,
    state() {
        return {
            username: '',
            isLoggedIn: true,
            token: null
        }
    },
    mutations: authMutations,
    actions: authActions,
    getters: authgetters
}

export default authModule