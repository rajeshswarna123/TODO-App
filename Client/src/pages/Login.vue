<script setup lang="ts">
import { ref } from "vue-demi"
import { useSession } from "../models/session"

const session = useSession();

const username= ref();
const password= ref();
function rakhiLogin(){
    session.Login("rakeshn1@n.edu", "secret")
}

function login()
{
    if(username.value && password.value)
    {
        session.Login(username.value, password.value)
    }
}
</script>

<template>
    <div class="section">

        <div class="page">
            <form class="form" @submit.prevent="login">
                <div class="form__container">
                <div class="logo"><img class="logo__pic" src= "../../src/assets/images/fingerprint.svg" width="45"></div>
                <div class="fieldset">
                    <div class="field"><input class="input" type="text" placeholder="Email" v-model="username"></div>
                    <div class="field"><input class="input" type="password" placeholder="Password" v-model="password"></div>
                </div>
                    <button class="btn">Log In</button>
                    <button class="btn mt-4" @click="rakhiLogin">Rakhi Login</button>
                <div class="text">By creating an account, you agree and accept our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.</div>
                </div>
                <div class="form__footer">Don't Have an Account? <router-link to="/signup">Sign Up</router-link></div>
            </form>
        </div>
    </div>

</template>


<style scoped>
@import url('../../src/assets/styles/form.scss');

</style>