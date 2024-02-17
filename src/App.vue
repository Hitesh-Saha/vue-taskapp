<template>
    <NavBar/>
    <!-- <LogIn 
      @login='logIn' 
      v-if="!isLoggedIn"/>
    <HomeComponent 
      :propprojects="Projects" 
      :home-button="isHomeTriggered" 
      v-else/> -->
    <router-view></router-view>
</template>

<script setup>
// import LogIn from './components/LogIn.vue'
import NavBar from './components/NavBar.vue'
// import HomeComponent from './components/HomeComponent.vue'
// import './style.css'

</script>

