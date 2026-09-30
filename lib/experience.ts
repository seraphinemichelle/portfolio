import { supabase } from "./supabase";
export async function getExperiences() {
  const { data, error } = await supabase
    .from("experiences")
    .select("*")
    .order("id");

  if (error) {
    console.log(error);
    return [];
  }

  return data ?? [];
}