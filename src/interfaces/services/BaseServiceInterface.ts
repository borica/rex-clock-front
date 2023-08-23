export default interface BaseServiceInterface {
    apiUrl: String;
    httpOptions: HttpOptions

    deleteRequest(): Promise<any>
    getRequest(): Promise<any>
    patchRequest(): Promise<any>
    postRequest(): Promise<any>
    putRequest(): Promise<any>
    getQueryString(params: Object): string
}

interface HttpOptions {
    method: 'DELETE' |  'GET' | 'PATCH' | 'POST' | 'PUT',
    headers: Object,
    mode: 'cors',
    cache: 'no-cache',
    body?: string
}