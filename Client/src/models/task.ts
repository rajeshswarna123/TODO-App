import { defineStore } from 'pinia'
import { useSession } from './session';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const usetasks = defineStore('tasks', {

    state: () => ({
        tasks: [] as Task[],
        aTasks: [] as Task[],
        cTasks: [] as Task[],
        session: useSession(),
    }),
    actions: {
        close(index: number) {
            this.tasks.splice(index, 1);
        },

        async createTasks(id: any, message: any, dueDate: any, assignedTo: any, userId: any , isCompleted: any= false){
            const newPost = await this.session.api('posts', {isCompleted: isCompleted,title: message, dueDate: new Date(dueDate),isOwned: userId,assignedTo: assignedTo});
            this.tasks.push(newPost);
        },

        // taskAssignement(taskId: number, userId: number){
        //     this.tasks.forEach(_=>
        //         {
        //             if(_.id==taskId)
        //                 _.assignedTo = userId
        //         });
        // },

        async getTasks(){
            const tasks = await this.session.api('tasks/currentUserTasks');
            this.tasks = tasks;
        },

        async assignedTasks(){
            const tasks = await this.session.api('tasks/assignedtasks');
            this.aTasks = tasks;
        },

        async createdTasks(){
            const tasks = await this.session.api('tasks/currentUserTasks');
            this.cTasks = tasks;
        }
    }
})

export interface Task {
    _id?: string;
    isCompleted: string;
    dueDate: string;
    isOwned: string;
    userId?: string;
    assignedTo: string[];
    title: string;
}