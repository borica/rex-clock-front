import { BaseService } from '@/services/BaseService'
import { useAuthStore } from "@/store/auth/AuthStore"

export class AuthService extends BaseService{
    constructor() {
        super();
    }

    public async login(email: string, password: string): Promise<any> {
        this.apiUrl = this.apiUrl + '/auth/login'
        this.httpOptions.body = JSON.stringify({
            email: email,
            password: password,
        })

        const response = await this.postRequest()

        if (response) {
            this.setSessionStorage(response.data.token, response.data.session)
            const authStore = useAuthStore()
            authStore.setIsAuthUser(true)
        }
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

    public static isAuthenticated(): boolean {
        return sessionStorage.getItem('token') || false
    }
}