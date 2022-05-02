<script setup lang="ts">
    import { Task, usetasks } from '../models/task';
    import { User } from '../models/user';
    import moment from 'moment';
import { ref } from 'vue-demi';

    const { task, user, userHandles, currentTab } = defineProps<{ task: Task, user: User, userHandles: any, currentTab: string }>();
    let editIt= ref(false);
    const tasks = usetasks();
    function update(){
        tasks.updateTask(task).then(()=>{
            editIt.value = false;
        });
    }
    function edit(){
        editIt.value = !editIt;
    }
</script>
<template>
    <tr :class="{'text-dec-line-through' : task.isCompleted==true}"
                    v-show="(currentTab=='All') || ((currentTab=='Current') && (!task.isCompleted)) || ((currentTab=='Completed') && task.isCompleted)">
                      <td><input type="checkbox" class="checkbox" v-model="task.isCompleted" :disabled="task.assignedTo!=user?._id"></td>
                      <th v-show="!editIt">{{task.title}}</th>
                      <th v-show="editIt"><input class="input" type="input" v-model="task.title"></th>
                      <td v-if="!editIt">{{moment(String(task.dueDate)).format('MMM-DD-YYYY') }}</td>
                      <td v-else><input type="" class="input" v-model="task.dueDate"/></td>
                      <td v-if="task.isOwned==user?._id">
                        <select v-model="task.assignedTo" class="select" v-if="editIt">
                          <option :v-for="user in userHandles" :value="user._id">{{user.handle}}</option>
                        </select>
                        <span v-else>{{userHandles.find(u => u._id === task.assignedTo)?.handle}}</span>
                      </td>
                      <td v-if="task.isOwned!=user?._id">
                        {{userHandles.find(u => u._id === task.assignedTo)?.handle}}
                      </td>
                      <td>
                        {{userHandles.find(u => u._id === task.isOwned)?.handle}}
                      </td>
                      <td v-if="!editIt"><button class="button is-primary is-light is-outlined" @click="edit()">Edit</button></td>
                      <td v-else>
                        <button class="button is-danger is-rounded">Cancel</button> 
                        <button class="button is-success is-rounded" @click="update()">Update</button>
                      </td>
                      {{editIt}}
                    </tr>
</template>

<style scoped>

</style>