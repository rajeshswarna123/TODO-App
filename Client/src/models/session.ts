import { reactive } from "vue";

import router from "../router";
import * as users from "../models/user";


const session = reactive({
    user: null as users.User | null,
})

export async function Login(handle: string, password: string) {
    const user = users.list.find(u => u.handle === handle);

    if (!user) {
        throw { message: "User not found" };
    }
    if(user.password !== password) {
        throw { message: "Incorrect password" };
    }

    session.user = user;
    router.push('/home');
}

export async function Signup(newUser: users.User) {
    const newUserId = Math.max(...users.list.map(_=>_.id))+1;
    users.list.push({
    email: newUser.email,
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    password: newUser.password,
    handle: newUser.handle,
    id: newUserId,
    pic: '',
    });
    
    session.user = users.list.find(_=>_.id==newUserId)||null;
    router.push('/tasks');
}

export function Logout() {
    session.user = null;
    router.push('/login');
}

export default session;