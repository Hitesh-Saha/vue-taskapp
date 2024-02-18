import {createStore} from 'vuex';
// import router from '../router/index.js'
import projectModule from './Projects';
import authModule from './Auth';

const store = createStore({
    modules: {
        projectMod: projectModule,
        authMod: authModule
    },
    state() {
        return {
            isTaskView: false,
            // token: null,
            // isLoggedIn: false,
            // projects: [
            //     {
            //         id: 1,
            //         name: 'hello',
            //         description: 'this is a long description',
            //         tasks: []
            //     }
            // ]
        }
    },
    mutations: {
        togglingTaskView(state,payload) {
            state.isTaskView = payload
        },
        // setToken(state,payload) {
        //     state.token = payload.token
        //     state.isLoggedIn = true
        //     console.log(state.isLoggedIn)
        //     if(state.isLoggedIn) {
        //         router.replace('/home')
        //     }
        // }
    },
    actions: {
        // async login(context,payload) {
        //     const token = payload.username + parseInt(Math.random(1,5) * 100) *20
        //     localStorage.setItem('x-auth-token', JSON.stringify(token))
        //     context.commit('setToken',{token: token})
        // }
    },
    getters: {
        // isAuth(state) {
        //     return state.isLoggedIn
        // }
        isTaskView(state) {
            return state.isTaskView
        }
    }
})

export default store