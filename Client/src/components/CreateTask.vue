<script setup lang="ts">
import { ref } from "vue-demi";
import { usetasks } from "../models/task";
import { UserHandel } from "../models/user";
import {useSession} from '../models/session'

const session = useSession();
const allTasks = usetasks();
const newTask=ref();
const dueDate=ref();
const assignedTo=ref();
const userHandles = ref<UserHandel[]>();
if(!session.userHandles){
  session.GetUserHandles().then(()=>{
    userHandles.value = session.userHandles;
  });
}
else
  userHandles.value = session.userHandles;

function submitForm(){
  allTasks.createTasks(Math.max(...allTasks.tasks.map(_=>_.id))+1, newTask.value, dueDate.value, assignedTo.value, session.user._id,false);
}
</script>

<template>
    <form @submit.prevent="submitForm" class="columns mb-4 mx-auto">
                  <div class="control has-icons-left mx-2">
                    <input class="input is-primary form-control" type="text" placeholder="New Task" v-model="newTask">
                    <span class="icon is-left">
                      <i class="fas fa-calendar-plus" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div class="mx-2">
                    <input type="date" class="form-control" v-model="dueDate"/>
                     
                  </div>
                  <div class="mx-2">
                    <select v-model="assignedTo" class="form-select">
                      <option disabled selected>Assign to</option>
                      <option v-for="user in userHandles" :value="user._id">{{user.handle}}</option>
                    </select>
                  </div>
                    <button  type="submit" class="button mx-2">Create</button>
                  </form>
</template>

<style scoped>

</style>