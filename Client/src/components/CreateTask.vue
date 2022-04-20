<script setup lang="ts">
import { ref } from "vue-demi";
import { usetasks } from "../models/task";
import * as users from "../models/user";
import session from '../models/session'

const allTasks = usetasks();
const newTask=ref();
const dueDate=ref();
const assignedTo=ref();

function submitForm(e){
  allTasks.createTasks(Math.max(...allTasks.tasks.map(_=>_.id))+1, newTask.value, dueDate.value, assignedTo.value, session.user.id)
   console.log(newTask);
}
</script>

<template>
    <form @submit.prevent="submitForm" class="columns">
                  <div class="control has-icons-left column">
                    <input class="input is-primary" type="text" placeholder="New Task" v-model="newTask">
                    <span class="icon is-left">
                      <i class="fas fa-calendar-plus" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div>
                    <input type="date" class="input" v-model="dueDate"/>
                     
                  </div>
                  <div class="column">
                    <select v-model="assignedTo" class="select">
                      <option disabled selected>Assign to</option>
                      <option v-for="user in users.list" :value="user.id">{{user.handle}}</option>
                    </select>
                  </div>
                    <button  type="submit" class="button">Create</button>
                  </form>
</template>

<style scoped>

</style>