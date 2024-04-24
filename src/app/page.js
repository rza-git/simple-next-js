import BASE_URL from "@/lib/baseURL";
import prisma from "@/lib/prisma";
import { headers, cookies } from "next/headers";
import TodoList from "@/components/TodoList";

async function getData() {
   console.log(headers(), "<<<<<")
   const data = await prisma.todo.findMany();
   return data;
}


export default async function Home() {
  const data = await getData();
  return (
    <div>
      
      <TodoList todos={data}/>
    </div>
  );
}
