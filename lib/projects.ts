import { supabase } from "./supabase";


export async function getProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("id");


  if (error) {
    console.log(error);
    return [];
  }


  return data.map((project) => ({
    ...project,
    tech: project.tech.split(", "),
  }));
}