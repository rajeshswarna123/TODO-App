<script setup lang="ts">
import { ref } from "vue-demi"
import { Login } from "../models/session"

const username= ref();
const password= ref();
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

        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-black">Login</h3>
                    <hr class="login-hr">
                    <p class="subtitle has-text-black">Please login to proceed.</p>
                    <div class="box">
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" placeholder="Your Email" autofocus=""  v-model="username" />
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Your Password" v-model="password" />
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                  <input type="checkbox">
                  Remember me
                </label>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth"  @click="login">Login <i class="fa fa-sign-in" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <router-link to="/signup">Sign Up</router-link> &nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>


<style scoped>

</style>