import {createRouter, createWebHistory} from 'vue-router'
// import store from '../store/index.js' 
import LogIn from '../components/LogIn.vue'
import HomeView from '../views/HomeView.vue'
import TaskView from '../views/TaskView.vue'
import ProjectView from '../views/ProjectView.vue'
import SignUp from '../components/SignUp.vue'

const routes = [
    {
        path: '/',
        meta: {requiresAuth: true},
        // redirect: '/login'
    },
    {
        path: '/projects', 
        name: 'homeView', 
        component: HomeView, 
        meta: {requiresAuth: true}, 
        children: 
        [
            {
                path:'/projects', 
                name: 'projectView', 
                component: ProjectView, 
                props: true 
            },
            {
                path: '/projects/:projectId', 
                name:'taskView', 
                component: TaskView, 
                props: true 
            }
        ]
    },
    {
        path: '/login', 
        name: 'login', 
        component: LogIn
    },
    {
        path: '/signup', 
        name: 'signup', 
        component: SignUp
    },
    {
        path: '/:notfound(.*)', 
        redirect: '/login'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// router.beforeEach(async (to, from, next) => {
//     if(to.meta.requiresAuth) { 
//         if(!store.getters['authMod/isAuth'] && to.name !== 'login') {
//             next({name: 'login'})
//         }
//         else{
//             next()
//         }
//     }

// })


export default router
