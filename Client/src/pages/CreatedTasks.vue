<script setup lang="ts">
import { ref } from "vue-demi";
import { usetasks } from "../models/task";
import * as users from "../models/user";
import {useSession} from '../models/session';
import moment from 'moment';
import TaskView from '../components/TaskView.vue';

const currentTab = ref( 'All' );
const session = useSession();
const tasks = usetasks();
tasks.createdTasks()

const userHandles = ref([]);
if(!session.userHandles){
  session.GetUserHandles().then(()=>{
    userHandles.value = session.userHandles;
  });
}
else
  userHandles.value = session.userHandles;


const newTask=ref();
const dueDate=ref();
const assignedTo=ref();
const isDescending=ref(false);

function sortBy(prop) {
    if(isDescending.value){
      this.tasks.cTasks.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
    else{
      this.tasks.cTasks.sort((a,b) => a[prop] > b[prop] ? -1 : 1)
    }
    isDescending.value=!isDescending.value;
}
</script>

<template>
    <div class="section">
       <div class="container">
        <div class="columns">
          <div class="column">
              <article class="panel">
                <div class="tabs is-boxed">
                  <ul>
                    <li class="is-current" :class="{ 'is-active': currentTab == 'Current'}" @click="currentTab='Current'">
                      <a>
                        <span class="icon is-small"><i class="fas fa-clipboard-list" aria-hidden="true"></i></span>
                        <span>Current</span>
                      </a>
                    </li>
                    <li class="is-completed" :class="{ 'is-active': currentTab == 'Completed'}" @click="currentTab='Completed'">
                      <a>
                        <span class="icon is-small"><i class="fas fa-calendar-times" aria-hidden="true"></i></span>
                        <span>Completed</span>
                      </a>
                    </li>
                    <li class="is-all" :class="{ 'is-active': currentTab == 'All'}" @click="currentTab='All'">
                      <a>
                        <span class="icon is-small"><i class="fas fa-calendar" aria-hidden="true"></i></span>
                        <span>All</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="panel-block">
                  <create-task />
                </div>
                <table class="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th @click="sortBy('message', isDescending)">Title</th>
                      <th @click="sortBy('dueDate', isDescending)">Due date</th>
                      <th>Assigned to</th>
                      <th>Owner</th>
                    </tr>
                  </thead>
                  <tbody>
                    <task-view v-for="task in tasks.cTasks" :key="task._id" :task="task" :user="session.user" :userHandles="userHandles" :currentTab="currentTab"></task-view>
                  </tbody>
                </table>
              </article>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>