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

        const response = await this.postRequest()

        this.setSessionStorage(response.data.token, response.data.session)
    }

    private setSessionStorage(token: string, session: Object):void {
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('session', JSON.stringify(session))
    }

    public getToken(): object {
        return sessionStorage.getItem('token') || null
    }

    public getSession(): object {
        return JSON.parse(sessionStorage.getItem('session')) || null
    }
}