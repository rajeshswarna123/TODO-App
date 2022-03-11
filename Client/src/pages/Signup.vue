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

        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-black">Signup</h3>
                    <hr class="login-hr">
                    <p class="subtitle has-text-black">Please Signup to proceed.</p>
                    <div class="box">
                        <form @submit.prevent="signup">
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" placeholder="First Name"  v-model="firstName" />
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" placeholder="Last Name"  v-model="lastName" />
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" placeholder="User Name"  v-model="username" />
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" placeholder="Email"  v-model="email" />
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Password" v-model="password" />
                                </div>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth"  >Sign Up <i class="fa fa-sign-in" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <router-link to="/login">Log In</router-link> 
                    </p>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped>

</style>