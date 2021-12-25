import techfindAPI from "../config/api";

export async function getJobs(){
  const response = await techfindAPI.post("/api/jobs")
  console.log(response)
  return response.data
}

export async function createJob(data){
  const response = await techfindAPI.post("/api/jobs",data)
  console.log(response)
  return response.data
}

export async function getJobLevel(){
  const response = await techfindAPI.get("/api/job/level")
  console.log(response)
  return response.data
}

export async function getJobType(){
  const response = await techfindAPI.get("/api/job/type")
  console.log(response)
  return response.data
}



