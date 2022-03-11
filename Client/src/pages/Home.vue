
<script setup>
import { ref } from 'vue';
import moment from 'moment';

import { usetasks } from '../models/task'
import * as users from "../models/user";
import session from '../models/session'

// export default{
//   data(){
//     return {
//       newTask: 'hgvhg',
//       dueDate: '',
//       assignedTo:''
//     }
//   }
// }

const currentTab = ref( 'All' );
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
                    <li class="is-upcoming" :class="{ 'is-active': currentTab == 'Upcoming'}" @click="currentTab='Upcoming'">
                      <a>
                        <span class="icon is-small"><i class="fas fa-calendar-day" aria-hidden="true"></i></span>
                        <span>Upcoming</span>
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
                  <form @submit.prevent="submitForm" class="columns">
                  <div class="control has-icons-left column">
                    <input class="input is-primary" type="text" placeholder="New Task" v-model="newTask">
                    {{newTask}}
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
                </div>
                <a class="panel-block columns" v-for="(task,i) in allTasks.tasks" :class="{'text-dec-line-through' : task.isCompleted==true}" v-show="(((currentTab=='All') || (currentTab=='Upcoming') || ((currentTab=='Current') && (!task.isCompleted)) || ((currentTab=='Completed') && task.isCompleted)) && ((task.isOwned == session.user.id) || (task.assignedTo == session.user.id)))">
                      <div class="column is-three-quarter">
                        <input type="checkbox" class="checkbox" v-model="task.isCompleted" :disabled="task.assignedTo!=session.user?.id">
                        <br />
                        {{moment(String(task.dueDate)).format('MMM-DD-YYYY') }}
                      </div>
                      <div class="select column is-one-quarter" v-if="task.isOwned==session.user?.id">
                        <select v-model="task.assignedTo" class="select">
                          <option v-for="user in users.list" :value="user.id">{{user.handle}}</option>
                        </select>
                      </div>
                    <div v-if="task.isOwned!=session.user?.id" class="column is-one-quarter">
                      {{users.list.find(u => u.id === task.assignedTo).handle}}
                    </div>
                </a>
              </article>
          </div>
        </div>
      </div>
    </div>
</template>


<style lang="scss" scoped>

</style>