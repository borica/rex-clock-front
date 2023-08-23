import type BaseServiceInterface from "@/interfaces/BaseServiceInterface";

export abstract class BaseService implements BaseServiceInterface {
    protected apiUrl: String;
    protected httpOptions: HttpOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'no-cache',
    }

    protected constructor() {
        this.apiUrl = import.meta.env.VITE_REX_CLOCK_API_URL
    }

    protected async postRequest(): Promise<any> {
        this.httpOptions.method = 'POST'
        const request = this.createRequest()
        const response = await fetch(request)

        return response.json()
    }

    protected async getRequest(): Promise<any> {
        const request = this.createRequest()

        return await fetch(request)
            .json()
            .catch((err) => console.log(err))
    }

    protected async deleteRequest(): Promise<any> {
        this.httpOptions.method = 'DELETE'
        const request = this.createRequest()

        return await fetch(request)
            .json()
            .catch((err) => console.log(err))
    }

    protected async patchRequest(): Promise<any> {
        this.httpOptions.method = 'PATCH'
        const request = this.createRequest()

        return await fetch(request)
            .json()
            .catch((err) => console.log(err))
    }

    protected async putRequest(): Promise<any> {
        this.httpOptions.method = 'PUT'
        const request = this.createRequest()

        return await fetch(request)
            .json()
            .catch((err) => console.log(err))
    }

    protected getQueryString(params: Object): string
    {
        return '?' + new URLSearchParams(params).toString()
    }

    private createRequest(): Request
    {
        return new Request(
            this.apiUrl,
            this.httpOptions
        )
    }
}