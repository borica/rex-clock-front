import {BaseService} from "@/services/BaseService";

export class AuthService extends BaseService{
    constructor() {
        super();
    }

    public async login(email: string, password: string): Promise<any> {
        this.apiUrl += '/auth/login'
        this.httpOptions.body = JSON.stringify({
            email: email,
            password: password,
        })

        return await this.postRequest()
    }
}