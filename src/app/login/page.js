'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";
import { login } from "@/fetching/auth";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    
    const handleSubmit = async () => {
        try {
            await login({email, password})
            router.push("/")
        } catch(err) {
            console.log(err)
        }
        
    }

    return (
        <div>
            <input type="text" onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" onChange={(e) => setPassword(e.target.value)}/>
            <button type="button" onClick={handleSubmit}>SUBMIT</button>
        </div>
    )
}

export default Login