<script setup lang="ts">

import { ref } from "vue-demi";
import { Login, Signup } from "../models/session"
import {User} from "../models/user";
    const firstName= ref();
    const lastName= ref();
    const username= ref();
    const password= ref();
    const email= ref();

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

        <div class="page">
            <form class="form" @submit.prevent="signup">
                <div class="form__container">
                <div class="logo"><img class="logo__pic" src= "../../src/assets/images/fingerprint.svg" width="45"></div>
                <div class="fieldset">
                    <div class="field"><input class="input" type="text" placeholder="First Name" required v-model="firstName"></div>
                    <div class="field"><input class="input" type="text" placeholder="Last Name" required v-model="lastName"></div>
                    <div class="field"><input class="input" type="text" placeholder="User Name" required v-model="username"></div>
                    <div class="field"><input class="input" type="text" placeholder="Email" required v-model="email"></div>
                    <div class="field"><input class="input" type="password" placeholder="Password" required v-model="password"></div>
                </div><button class="btn">Sign Up</button>
                <div class="text">Can’t remember your password? <a href="#">Recover it</a>.</div>
                </div>
                <div class="form__footer">Already have an account? <router-link to="/signup">Log In</router-link></div>
            </form>
        </div>
    </div>
    
</template>

<style scoped>
@import url('../../src/assets/styles/form.scss');

</style>