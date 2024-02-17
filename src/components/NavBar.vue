<template>
    <div class="navbar bg-base-100">
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">TaskApp</a>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal p-0">
                <!-- <router-link to="/home" @click="home"><li><a>Home</a></li></router-link> -->
                <li @click="home" v-if="store.getters['authMod/isAuth']"><a>Home</a></li>
                <li @click="store.getters['authMod/isAuth'] ? logout() : login()"><a>{{ store.getters['authMod/isAuth'] ? 'Logout' : 'Login' }}</a></li>
                <!-- <li @click="login" v-if="store.getters['authMod/isAuth']"><a>LogIn</a></li> -->
                <!-- <router-link to="/" v-if="!userAuth"><li><a>Login</a></li></router-link> -->
                <!-- <router-link to="/" @click='logout'><li><a>Logout</a></li></router-link> -->
            </ul>
        </div>
    </div>
</template>

<script setup>
// import { computed } from 'vue'
import store from '@/store'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue';

const isLoggedIn = ref(false);
const router = useRouter();

const logout = () => {
    localStorage.removeItem('x-auth-token')
    store.commit("authMod/logout")
    // store.state.isLoggedIn = false
    router.push('/login')
}
const home = () => {
    store.commit('togglingTaskView',false)
    router.push('/projects');
}
const login = () => {
    router.push('/login')
}
// const userAuth = computed(() => {
//     return this.$store.getters.isAuth
// })
onMounted(() => {
    isLoggedIn.value = store.getters["authMod/isAuth"]
})
</script>

<style scoped>
.navbar {
    background-color: #48486b;
    color: white;
}
</style>