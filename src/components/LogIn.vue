<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              v-model="username"
              type="text"
              placeholder="Enter Email"
              class="input input-bordered w-full max-w-sm text-white"
              @input="validateEmail($event)"
              @keyup="isError = false"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              v-model="password"
              @input="validatePassword($event)"
              type="password"
              placeholder="Enter Password"
              class="input input-bordered w-full max-w-sm text-white"
            />
            <label v-if="isError" class="label text-red-500 font-light text-sm">
              {{ errorMsg }}
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn" id='login' @click="login" :disabled="isSubmitted">Login</button>
          </div>
            <label class="text-white text-sm mt-4">Create a new account? <router-link to="/signup"  class="text-blue-500 font-semibold">Signup</router-link></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import store from '@/store';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const isError = ref(false);
const errorMsg = ref("");
const isSubmitted = ref(true);
const router = useRouter();

const login = async () => {
      if(username.value.length === 0 || password.value.length === 0) {
        errorMsg.value = "None of the fields can be empty";
        isError.value = true;
      }
      else {
        isError.value = false;
        isSubmitted.value = true;
        store.dispatch('authMod/login',{
          username: username.value,
          password: password.value
        })
        // if(status) {
          router.push('/projects')
        // }
      }
    }
const validatePassword = (e) => {
  const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/;
  const isValid = regex.test(e.target.value);
  if (isValid) {
    password.value = e.target.value
    isError.value = false;
    isSubmitted.value = false;
  } else {
    errorMsg.value =
      "Password must contain one uppercase, one lowercase, one digit and one special character. It should contain atleast 8 characters";
    isError.value = true;
    isSubmitted.value = true;
  }
};
const validateEmail = (e) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValid = emailRegex.test(e.target.value)
    if(isValid) {
        isError.value = false;
        username.value = e.target.value;
    }
}
</script>

<style scoped>
.hero {
  min-height: 88.5vh;
  background: linear-gradient(to bottom,#EEF1FF, #D2DAFF );
}
.hero-content {
  width: 80%;
}
.btn {
    background: #4c4da8;
}
.btn:hover {
    background-color: #48486b;
}
.error-message > a {
  color: red;
  text-decoration: none;
  cursor: text;
  /* display: none; */
}
.error-message {
  display: none;
}
.empty-error-message > a {
  color: red;
  text-decoration: none;
  cursor: text;
  /* display: none; */
}
.empty-error-message {
  display: none;
}
.disabled {
  cursor: not-allowed;
}
</style>
