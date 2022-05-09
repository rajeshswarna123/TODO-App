
<script setup lang="ts">
import moment from "moment";
import { ref } from "vue-demi";
import { useRoute } from "vue-router";
import router from "../router";

import { useSession } from "../models/session";
import { Task, usetasks } from "../models/task";
import { getComments, addComment, Comment } from "../models/comment";
import { UserHandel } from "../models/user";


    const route = useRoute();
    const tasks = usetasks();
    const session = useSession();
    let task: Task;
    const comments=ref<Comment[]>([]);
    let comment:Comment;
    const commentText = ref("");
    const taskId = route.params.id as string; 

    tasks.tasks.forEach(t => {
        if (t._id === taskId) {
            t.dueDate = moment(t.dueDate).format('YYYY-MM-DD');
            task = t;
            console.log(task);
        }
    });
    const userHandles = ref<UserHandel[]>();
    if(!session.userHandles || (session.userHandles.length===0)){
    session.GetUserHandles().then(()=>{
        userHandles.value = session.userHandles;
    });
    }
    else
        userHandles.value = session.userHandles;

    getComments(taskId).then(res => {
        comments.value = res;
        comments.value.forEach(c => {
            c.userHandel = userHandles.value?.find(u => u._id === c.userId)?.handle;
        });
    });
    
    
    function update(){
        tasks.updateTask(task._id, task).then(()=>{
            router.push({path:'/tasks'});
        });
    }

    function createComment(isReply: boolean){
        comment={
            taskId:task._id,
            text: commentText.value,
            isReply:isReply
        }
        addComment(comment).then(res=>{
            router.push({path:'/tasks'});
        });
    }

    function deleteTask(){
        tasks.deleteTask(task._id).then(()=>{
            router.push({path:'/tasks'});
        });
    }
    
</script>

<template>
    <div>
        <div class="my-3 py-3 d-flex justify-content-between align-items-center">
            <h3>Task Details</h3>
            <span class="icon" role="button" @click="deleteTask()">
                <i class="fas fa-trash" style="color:red"></i>
            </span>
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
                        <label for="floatingSelectGrid">Assign to</label>
                    </div>
                    
                </div>
            </div>
            <button class="button is-primary btn-success">Update Task</button>
        </form>
        <hr />
        <div class="my-3 py-3">
            <h3>Comments</h3>
        </div>
        <div v-for="c in comments" class="my-3 py-3">
            <div class="card">
                <div class="card-header">
                    <div class="card-header-title">
                        {{c?.userHandel}}
                    </div>
                    <div class="card-header-icon">
                        <span class="icon">
                            <i class="fas fa-user"></i>
                        </span>
                    </div>
                </div>
                <div class="card-content">
                    <div class="content">
                        {{c?.text}}
                    </div>
                </div>
            </div>
        </div>
        <form class="form my-3" @submit.prevent="createComment(false)">
            <div class="field form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px" v-model="commentText"></textarea>
                <label for="floatingTextarea2">Comment</label>
            </div>
            <button class="button is-primary is-light is-outlined">Add Comment</button>
        </form>
    </div>
</template>

<style scoped>

</style>