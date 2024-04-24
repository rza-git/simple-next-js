import BASE_URL from "@/lib/baseURL";
import prisma from "@/lib/prisma";
import { headers, cookies } from "next/headers";

async function getData() {
   const data = await prisma.todo.findMany();
   return data;
}


export default async function Home() {
  const data = await getData();
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
}
