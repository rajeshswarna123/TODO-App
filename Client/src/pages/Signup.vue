<script setup lang="ts">

import { Login, Signup } from "../models/session"
import {User} from "../models/user";


function signup()
{
    const user: User={
        firstName: firstName.value,
        lastName: lastName.value,
        handle: username.value,
        password: password.value,
        email: email.value,
        id:0,
        pic: ''
    }
    Signup(user);
}

</script>

<template>
     <div class="section">
         <h1 class="title">Signup</h1>
         <div>
            <label for="firstName">First Name</label>
            <input id="firstName" class="input" placeholder="First Name" v-model="firstName" />
        </div>
        <div>
            <label for="lastName">Last Name</label>
            <input id="lastName" class="input" placeholder="Last Name" v-model="lastName" />
        </div>
        <div>
            <label for="username">User Name</label>
            <input id="username" class="input" placeholder="User Name " v-model="username" />
        </div>
        <div>
            <label for="email">Email</label>
            <input id="email" class="input" placeholder="email" v-model="email" />
        </div>
        <div>
            <label for="password">Password</label>
            <input id="password" class="input" placeholder="Password" v-model="password" />
        </div>
        
        <button class="button is-primary my-5" @click="signup"> 
            <span class="icon">
               <i class="fa fa-sign-in"></i>
            </span>
            <span>Signup</span>
        </button>
        &nbsp;
        <router-link class="button is-warning my-5" to="/login">
            <span class="icon">
                <i class="fa fa-sign-in"></i>
            </span>
            <span>Login</span>
        </router-link>
    </div>
</template>

<style scoped>

</style>