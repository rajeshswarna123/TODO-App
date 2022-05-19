<script setup lang="ts">
import { ref } from "vue-demi";
import { Task, usetasks } from "../models/task";
import { UserHandel } from "../models/user";
import {useSession} from '../models/session'
import router from "../router";

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

  const list =ref<Task[]>([]);
  function getTasksByKeyword(event){
    allTasks.getTasksByKeyword(event.input).then(tasks=>{
      list.value = tasks ?? [];
    });
  }

  function selectItem(item) {
    router.push(`/task/${item._id}`);
	}
</script>

<template>
<div class=" mb-4 mx-auto">
  <form @submit.prevent="submitForm" class="columns">
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
                  <div>
                    <vue3-simple-typeahead
                    id="typeahead_id"
                    placeholder="Search Tasks"
                    :items="list"
                    :minInputLength="1"
                    :itemProjection="
                    (item) => {
                      return item.title;
                    }"
                    @onInput="getTasksByKeyword"
                    @selectItem="selectItem"
                  >
                  </vue3-simple-typeahead>
                  </div>
</div>
</template>

<style scoped>
:deep(.simple-typeahead-input) {
  position: relative;
    width: 100%;
        display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    box-shadow: inset 0 0.0625em 0.125em rgb(10 10 10 / 5%);
    max-width: 100%;
}

:deep(.simple-typeahead-input:hover){
    border-color: #b5b5b5;
}
</style>