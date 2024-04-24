import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import * as jose from "jose"
import { cookies } from 'next/headers';

const SECRET_KEY = new TextEncoder().encode(
    "Swe4g7c?UBm5Nrd96vhsVDtkyJFbqKMTm!TMw5BDRLtaCFAXNvbq?s4rGKQSZnUP"
)

export const POST = async (req, {params}) => {

    try {
        const {email, password} = await req.json();

        const foundUser = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(!foundUser) 
            throw {name: "InvalidCredentials"}

        const comparePassword = bcrypt.compareSync(password, foundUser.password)

        if(comparePassword) {
            
            const accessToken = await new jose.SignJWT({ 
                id: foundUser.id,
                email: foundUser.email 
            })
            .setProtectedHeader({ alg: "HS256" })
            .sign(SECRET_KEY);
            
            cookies().set({
                name: "accessToken",
                value: accessToken,
                maxAge: 60 * 60 * 24 * 7
            })

            return NextResponse.json({
                message: "Login success",
                accessToken
            }, {status: 200})
        } else {
            throw {name: "InvalidCredentials"}
        }

    } catch(err) {
        console.log(err);
        if(err.name === "InvalidCredentials") {
            return NextResponse.json({message: "Wrong Email or Password"})
        }
    }
}