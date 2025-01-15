import { sign, decode } from 'jsonwebtoken'

const privateKey = process.env.JWT_PRIVATE || 'private'

interface ISignUser {
    email: string
}

export function jwtSignUser({
    email
}: ISignUser){

    const token = sign({
        email
    }, privateKey, {
        expiresIn: '7d'
    })

    return token

}

export function jwtDecodeUser(token: string){

    const decodedUser = decode(token)

    return decodedUser

}