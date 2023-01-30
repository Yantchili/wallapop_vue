import { User } from "@/models/user";

export interface UserState {
    user: User[]
}

function state(): UserState {
    return {
        user: [],

    }
}
export default state;