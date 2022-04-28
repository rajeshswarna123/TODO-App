<script setup lang="ts">
    import { Task } from '../models/task';
    import { User } from '../models/user';
    import moment from 'moment';

    const { task, user, userHandles, currentTab } = defineProps<{ task: Task, user: User, userHandles: any, currentTab: string }>();

    console.log(task);
</script>
<template>
    <tr :class="{'text-dec-line-through' : task.isCompleted==true}"
                    v-show="(currentTab=='All') || ((currentTab=='Current') && (!task.isCompleted)) || ((currentTab=='Completed') && task.isCompleted)">
                      <td><input type="checkbox" class="checkbox" v-model="task.isCompleted" :disabled="task.assignedTo!=user?.id"></td>
                      <th>{{task.title}}</th>
                      <td>{{moment(String(task.dueDate)).format('MMM-DD-YYYY') }}</td>
                      <td v-if="task.isOwned==user?.id">
                        <select v-model="task.assignedTo" class="select">
                          <option :v-for="user in userHandles" :value="user._id">{{user.handle}}</option>
                        </select>
                      </td>
                      <td v-if="task.isOwned!=user?.id">
                        {{userHandles.find(u => u._id === task.assignedTo)?.handle}}
                      </td>
                      <td>
                        {{userHandles.find(u => u._id === task.isOwned)?.handle}}
                      </td>
                    </tr>
</template>

<style scoped>

</style>