<script setup lang="ts">
import { ref } from "vue-demi";
import { usetasks } from "../models/task";
import * as users from "../models/user";
import session from '../models/session';
import moment from 'moment';

const currentTab = ref( 'All' );
let allTasks = ref([])
if(session?.user?.id){
    allTasks = usetasks().assignedTasks(session.user.id);
}
const newTask=ref();
const dueDate=ref();
const assignedTo=ref();
const isDescending=ref(false);

function sortBy(prop) {
    if(isDescending.value){
      this.allTasks.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
    else{
      this.allTasks.sort((a,b) => a[prop] > b[prop] ? -1 : 1)
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
                    <tr v-for="(task,i) in allTasks" :class="{'text-dec-line-through' : task.isCompleted==true}" v-show="(((currentTab=='All') || ((currentTab=='Current') && (!task.isCompleted)) || ((currentTab=='Completed') && task.isCompleted)) && ((task.isOwned == session.user.id) || (task.assignedTo == session.user.id)))">
                      <td><input type="checkbox" class="checkbox" v-model="task.isCompleted" :disabled="task.assignedTo!=session.user?.id"></td>
                      <th>{{task.message}}</th>
                      <td>{{moment(String(task.dueDate)).format('MMM-DD-YYYY') }}</td>
                      <td v-if="task.isOwned==session.user?.id">
                        <select v-model="task.assignedTo" class="select">
                          <option v-for="user in users.list" :value="user.id">{{user.handle}}</option>
                        </select>
                      </td>
                      <td v-if="task.isOwned!=session.user?.id">
                        {{users.list.find(u => u.id === task.assignedTo).handle}}
                      </td>
                      <td>
                          {{users.list.find(u => u.id === task.isOwned).handle}}
                      </td>
                    </tr>
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