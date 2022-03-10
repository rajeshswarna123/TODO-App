
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
const newTask=ref('bjbh');
const dueDate=ref();
const assignedTo=ref('');

function submitForm(e){
  allTasks.createTasks(Math.max(...allTasks.tasks.map(_=>_.id))+1, newTask.value, dueDate.value, assignedTo.value, session.user.id)
   console.log(newTask);
}

</script>
<template>
       <div class="section">
       <div class="container">
        <div class="columns">
          <div class="column is-3">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  Component
                </p>
                <button class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </header>
              <div class="card-content">
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                  <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">Save</a>
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
              </footer>
            </div>
          </div>
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
                  <form @submit.prevent="submitForm">
                  <p class="control has-icons-left">
                    <input class="input is-primary" type="text" placeholder="New Task" v-model="newTask">
                    {{newTask}}
                    <span class="icon is-left">
                      <i class="fas fa-calendar-plus" aria-hidden="true"></i>
                    </span>
                  </p>
                  <div>
                    <input type="date" class="input" v-model="dueDate"/>
                     <select v-model="assignedTo">
                      <option disabled selected>Assign to</option>
                      <option v-for="user in users.list" :value="user.id">{{user.handle}}</option>
                    </select>
                    <button  type="submit" class="button">Create</button>
                  </div>
                  </form>
                </div>
                <a class="panel-block columns" v-for="(task,i) in allTasks.tasks" :class="{'text-dec-line-through' : task.isCompleted==true}" v-show="(((currentTab=='All') || (currentTab=='Upcoming') || ((currentTab=='Current') && (!task.isCompleted)) || ((currentTab=='Completed') && task.isCompleted)) && ((task.isOwned == session.user.id) || (task.assignedTo == session.user.id)))">
                      <div class="column is-three-quarter">
                        <input type="checkbox" class="checkbox" v-model="task.isCompleted" :disabled="task.assignedTo!=session.user?.id">
                        {{task.message}}
                        <br />
                        {{moment(String(task.dueDate)).format('MMM-DD-YYYY') }}
                      </div>
                      <div class="select column is-one-quarter" v-if="task.isOwned==session.user.id">
                        <select v-model="task.assignedTo">
                          <option v-for="user in users.list" :value="user.id">{{user.handle}}</option>
                        </select>
                      </div>
                    <div v-if="task.isOwned!=session.user.id" class="column is-one-quarter">
                      {{users.list.find(u => u.id === task.assignedTo).handle}}
                    </div>
                </a>
              </article>
          </div>
          <div class="column is-3">
            <h1 class="title">Table of contents</h1>
            <h2 class="subtitle">Intra-page navigation</h2>
            <aside class="menu">
              <p class="menu-label">
                General
              </p>
              <ul class="menu-list">
                <li><a>Dashboard</a></li>
                <li><a>Customers</a></li>
              </ul>
              <p class="menu-label">
                Administration
              </p>
              <ul class="menu-list">
                <li><a>Team Settings</a></li>
                <li>
                  <a class="is-active">Manage Your Team</a>
                  <ul>
                    <li><a>Members</a></li>
                    <li><a>Plugins</a></li>
                    <li><a>Add a member</a></li>
                  </ul>
                </li>
                <li><a>Invitations</a></li>
                <li><a>Cloud Storage Environment Settings</a></li>
                <li><a>Authentication</a></li>
              </ul>
              <p class="menu-label">
                Transactions
              </p>
              <ul class="menu-list">
                <li><a>Payments</a></li>
                <li><a>Transfers</a></li>
                <li><a>Balance</a></li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
</template>


<style lang="scss" scoped>

</style>