import { NextRequest, NextResponse } from 'next/server'

export default function AuthMiddleware(request: NextRequest){
    
    // const token = 'exists' // localStorage.getItem('jwt_token')
    // const isValidToken = false

    // const publicPaths = [
    //     '/signin', '/signup'
    // ]

    // if(publicPaths.includes(request.nextUrl.pathname)){

    //     if(isValidToken) return NextResponse.redirect(new URL('/', request.url))

    // }else{

    //     if(!isValidToken) return NextResponse.redirect(new URL('/signin', request.url))

    // }

    return NextResponse.next()

}