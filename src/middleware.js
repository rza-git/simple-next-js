import { NextResponse } from "next/server";
import * as jose from "jose"
const SECRET_KEY = new TextEncoder().encode(
    "Swe4g7c?UBm5Nrd96vhsVDtkyJFbqKMTm!TMw5BDRLtaCFAXNvbq?s4rGKQSZnUP"
)

export async function middleware(request) {

    const loginPath = ["/login", "/api/login"]

    if(loginPath.some((v) => v === request.nextUrl.pathname)) {
        return NextResponse.next();
    } else {
        const newHeaders = new Headers(request.headers);
        const accessToken = request.cookies.get("accessToken");
        if(accessToken) {
            const {payload} = await jose.jwtVerify(accessToken.value, SECRET_KEY)
            
            newHeaders.set('user_id', payload.id)
            return NextResponse.next({
                request: {
                   headers: newHeaders
                }
            });
        } else {
            return NextResponse.redirect(new URL("/login", request.url))
        }
    }
}

export const config = {
    matcher: ["/login", "/api/:function*", "/todos/:function*", "/"]
}