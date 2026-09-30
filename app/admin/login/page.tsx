"use client";

import { useState } from "react";
import { login } from "@/lib/auth";
import { useRouter } from "next/navigation";


export default function LoginPage(){

  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");



  async function handleLogin(){

    try{

      await login(email,password);

      router.push("/admin/dashboard");

    }catch(err){

      setError("Email atau password salah");

    }

  }



  return (

    <main>

      <h1>
        Admin Login
      </h1>


      <input
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />


      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />


      <button onClick={handleLogin}>
        Login
      </button>


      {error && (
        <p>{error}</p>
      )}

    </main>

  );

}