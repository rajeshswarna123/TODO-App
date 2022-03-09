<script setup lang="ts">
import { Login } from "../models/session"


function badLogin(){
    Login("Rajesh Sunny", "meme")
}

function login()
{
    Login(username.value, password.value)
}
</script>

<template>
    <div class="section">
         <h1 class="title">Login</h1>
        <div>
            <label for="username">User Name</label>
            <input id="username" class="input" placeholder="User Name " v-model="username" />
        </div>
        <div>
            <label for="password">Password</label>
            <input id="password" class="input" placeholder="Password" v-model="password" />
        </div>
        <button class="button is-primary my-5" @click="login"> 
            <span class="icon">
               <i class="fa fa-sign-in"></i>
            </span>
            <span>Login</span>
        </button>
        &nbsp;
        <router-link class="button is-warning my-5" to="/signup">
            <span class="icon">
                <i class="fa fa-sign-in"></i>
            </span>
            <span>Signup</span>
        </router-link>
    </div>
</template>


<style scoped>

</style>