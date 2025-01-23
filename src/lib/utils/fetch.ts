import { IServerResponse } from './response'

interface CustomRequestInit extends RequestInit {
    body: any
}

export async function Fetch(
    input: string,
    init?: CustomRequestInit
): Promise<IServerResponse> {

    const response = await fetch(input, {
        ...init,
        body: JSON.stringify(init?.body)
    })
        .then((res) => res.json())
        .then((res: IServerResponse) => ({
            statusCode: res.statusCode,
            msg: res.msg,
            data: res.data,
            isError: res.statusCode >= 400
        }))
        .catch((err) => ({
            statusCode: 500,
            msg: 'Internal Server Error',
            isError: true
        }))

    return response

}

export async function sleep(ms: number){
    
    await new Promise((resolve) => { setTimeout(() => resolve('ok'), ms) })

}