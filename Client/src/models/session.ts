import router from "../router";

import * as users from "../models/user";
import { useMessages } from "./messages";
import { api } from "./myFetch";
import { defineStore } from "pinia";


export const useSession = defineStore('session', {
    state: () => ({
        user: null as users.User | null,
        destinationUrl: null as string | null,
        userHandles: null as [] | null,
    }),
    actions: {

        async Login(email: string, password: string) {
            const messages = useMessages();
        
            try {
                
                const user = await this.api("users/login", { email, password });
        
                if(user) {
        
                    messages.notifications.push({
                        type: "success",
                        message: `Welcome back ${user.firstName}!`,
                    });
        
                    this.user = user;
                    router.push(this.destinationUrl  ?? '/tasks');
                }
        
            } catch (error: any) {
                messages.notifications.push({
                    type: "danger",
                    message: error.message,
                });
                console.table(messages.notifications)
            }
        },

        // async Signup(newUser: users.User) {
        //     const newUserId = Math.max(...users.list.map(_ => _.id)) + 1;
        //     users.list.push({
        //         email: newUser.email,
        //         firstName: newUser.firstName,
        //         lastName: newUser.lastName,
        //         password: newUser.password,
        //         handle: newUser.handle,
        //         id: newUserId,
        //         pic: '',
        //     });

        //     this.user = users.list.find(_ => _.id == newUserId) || null;
        //     router.push('/tasks');
        // },

        Logout() {
            this.user = null;
            router.push('/login');
        },

        async GetUserHandles() {
            const messages = useMessages();
        
            try {
                
                const userHandles = await this.api("users/handles");
        
                if(userHandles) {
        
                    this.userHandles = userHandles;
                }
        
            } catch (error: any) {
                messages.notifications.push({
                    type: "danger",
                    message: error.message,
                });
                console.table(messages.notifications)
            }
        },

        async api(url: string, data?: any, method?: 'GET' | 'POST' | 'PUT' | 'DELETE'| 'PATCH', headers: any = {}) {
            const messages = useMessages();

            if (this.user?.token) {
                headers.Authorization = `Bearer ${this.user.token}`;
            }

            try {
                const response = await api(url, data, method, headers);
                if (response.errors?.length) {
                    throw { message: response.errors.join(', ') };
                }
                return await response.data;
            } catch (error: any) {
                messages.notifications.push({
                    type: "danger",
                    message: error.message,
                });
                //console.table(messages.notifications)
            }

        }
    },
})

export interface ApiResult {
    data: any;
    errors?: string[];
    success: boolean;
}
