"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";


type Project = {
  id: number;
  number: string;
  title: string;
  category: string;
};


export default function Dashboard(){

  const [projects,setProjects] = useState<Project[]>([]);



  async function getProjects(){

    const {data,error} = await supabase
      .from("projects")
      .select("id, number, title, category")
      .order("id");


    if(error){
        console.log("SUPABASE ERROR:", error);
        return;
    }


    console.log("SUPABASE DATA:", data);

    setProjects(data);

  }



  useEffect(()=>{

    getProjects();

  },[]);



  return (

    <main style={{padding:"40px"}}>

      <h1>
        Admin Dashboard
      </h1>


      <h2>
        Projects
      </h2>



      <div>

        {projects.map((project)=>(

          <div
            key={project.id}
            style={{
              border:"1px solid #ddd",
              padding:"15px",
              marginBottom:"10px"
            }}
          >

            <p>
              {project.number}
            </p>

            <h3>
              {project.title}
            </h3>

            <span>
              {project.category}
            </span>


          </div>

        ))}


      </div>


    </main>

  );

}