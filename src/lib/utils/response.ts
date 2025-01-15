export interface IServerResponse {
    statusCode: number
    msg: string
    data?: any
    isError?: boolean
}

export interface IClienteResponse {
    statusCode?: number | 'waiting'
    msg?: string
    data?: any
    isError?: boolean
}

export interface IActionResponse {
    status: 'error' | 'success'
    msg?: string
    data?: any
}