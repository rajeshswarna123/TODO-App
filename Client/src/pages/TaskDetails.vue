
<script setup lang="ts">
import { ref } from "vue-demi";
import { useRoute } from "vue-router";
import { useSession } from "../models/session";
import { Task, usetasks } from "../models/task";

    const route = useRoute();
    const tasks = usetasks();
    const session = useSession();
    let task: Task;
    const comment = ref('');

    tasks.tasks.forEach(t => {
        if (t._id === route.params.id) {
            t.dueDate = new Date(t.dueDate);
            task = t;
            console.log(task);
        }
    });
    const userHandles = ref([]);
    if(!session.userHandles || (session.userHandles.length===0)){
    session.GetUserHandles().then(()=>{
        userHandles.value = session.userHandles;
    });
    }
    else
        userHandles.value = session.userHandles;
    
    function update(){

    }

    function addComment(){
        tasks.addComment(task._id, comment.value);
    }
    
</script>

<template>
    <div>
        <form class="form" @submit.prevent="update">
            <div class="field">
                <div class="control is-medium">
                    <input class="input is-medium" type="text" v-model="task.title">
                </div>
            </div>
            <div class="field">
                <div class="control is-medium">
                    <input class="input" type="date" v-model="task.dueDate"/>
                </div>
            </div>
            <div class="field">
                <div class="control is-medium">
                    <select v-model="task.assignedTo" class="select">
                        <option :v-for="user in userHandles" :value="user?._id">{{user?.handle}}</option>
                    </select>
                </div>
            </div>
            <button class="button is-primary is-light is-outlined">Update</button>
        </form>

        <form class="form mb-5" @submit.prevent="addComment">
            <textarea class="input" type="text" placeholder="Comment" v-model="comment"/>
            <button class="button is-primary is-light is-outlined">Add Comment</button>
        </form>
    </div>
</template>

<style scoped>

</style>