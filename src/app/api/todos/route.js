import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from 'next/headers'
import { headers } from "next/headers";


export const GET = async (req, {params}) => {
    try {
        const userId = +headers().get("user_id")
        const data = await prisma.todo.findMany({
            where: {
                userId
            }
        });

        return NextResponse.json({
            data
        })
    } catch(err) {
        console.log(err)
        return NextResponse.json({message: "Internal Server Error"})
    }
}