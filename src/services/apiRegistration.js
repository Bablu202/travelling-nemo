import supabase from "./supabase";

export async function getRegisteredDetails() {
  const { data, error } = await supabase.from("nemo_registerForm").select("*");

  if (error) {
    console.log(error);
    throw new Error("error to fetch nemo From ");
  }
  return data;
}
