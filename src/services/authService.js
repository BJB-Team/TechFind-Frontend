import techfindAPI from "../config/api";

export async function signUp(data){
  const response = await techfindAPI.post("/auth/sign_up",data)
  console.log(response)
  return response.data
}

export async function login(data){
  const response = await techfindAPI.post("/auth/sign_in",data)
  console.log(response)
  return response.data
}

export async function companyProfile(){
  const response = await techfindAPI.get("/auth/profile")
  console.log(response)
  return response.data
}
