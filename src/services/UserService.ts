import {BaseService} from '@/services/BaseService'
import type UserInterface from "@/interfaces/types/UserInterface";

export class UserService extends BaseService{
    constructor() {
        super();
    }

    public async createUser(user: UserInterface): Promise {
        this.apiUrl = this.apiUrl + '/users'
        this.httpOptions.body = JSON.stringify(user)

        return await this.postRequest()
    }
}