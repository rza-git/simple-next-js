import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const DELETE = async (req, {params}) => {
    try {
        const {id} = params;

        const foundTodo = await prisma.todo.delete({
            where: {
                id: +id
            }
        })
    
        return NextResponse.json({message: "Todo deleted success"})
    } catch(err) {
        console.log(err)
        return NextResponse.json(err)
    }
}