import router from "../router";

import * as users from "../models/user";
import { useMessages } from "./messages";
import { api } from "./myFetch";
import { defineStore } from "pinia";


export const useSession = defineStore('session', {
    state: () => ({
        user: {} as users.User,
        destinationUrl: null as string | null,
        userHandles: [] as users.UserHandel[],
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

        async Signup(newUser: users.User) {
            return await this.api("users/", newUser );
        },

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
