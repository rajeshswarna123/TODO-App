
<script setup lang="ts">
import moment from "moment";
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
            t.dueDate = moment(t.dueDate).format('YYYY-MM-DD');
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
        tasks.updateTask(task._id, task).then(()=>{
            console.log('updated');
        });
    }

    function addComment(){
        tasks.addComment(task._id, comment.value);
    }
    
</script>

<template>
    <div>
        <div class="my-3 py-3">
            <h3>Task Details</h3>
        </div>
        <form class="form" @submit.prevent="update">
            <div class="field">
                <div class="control is-medium">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInputGrid" v-model="task.title">
                        <label for="floatingInputGrid">Task Title</label>
                    </div>
                </div>
            </div>
            <div class="field">
                <div class="control is-medium">
                     <div class="form-floating">
                        <input class="form-control" id="floatingInputGrid"  type="date" v-model="task.dueDate">
                        <label for="floatingInputGrid">Due Date</label>
                    </div>
                    <!-- <input class="input" type="date" v-model="task.dueDate"/> -->
                </div>
            </div>
            <div class="field">
                <div class="control is-medium">
                    <div class="form-floating">
                        <select v-model="task.assignedTo" class="form-select"  id="floatingSelectGrid" aria-label="Floating label select example">
                            <option v-for="user in userHandles" :value="user?._id">{{user?.handle}}</option>
                        </select>
                        <label for="floatingSelectGrid">Works with selects</label>
                    </div>
                    
                </div>
            </div>
            <button class="button is-primary is-light is-outlined">Update Task</button>
        </form>
        <hr />
        <form class="form mb-5" @submit.prevent="addComment">
            <div class="field form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px" v-model="comment"></textarea>
                <label for="floatingTextarea2">Comments</label>
            </div>
            <button class="button is-primary is-light is-outlined">Add Comment</button>
        </form>
    </div>
</template>

<style scoped>

</style>