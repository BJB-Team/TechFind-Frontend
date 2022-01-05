import techfindAPI from "../config/api";

export async function getJobs(){
  const response = await techfindAPI.get("/api/jobs")
  return response.data
}

export async function createJob(data){
  const response = await techfindAPI.post("/api/jobs",data)  
  return response.data
}

export async function getJobLevel(){
  const response = await techfindAPI.get("/api/job/level")
  
  return response.data
}

export async function getJobType(){
  const response = await techfindAPI.get("/api/job/type")
  
  return response.data
}

export async function getJobListing(id){
  const response = await techfindAPI.get(`/api/jobs/${id}`)
  return response.data
}


export async function deleteListing(id){
  const response = await techfindAPI.delete(`/api/jobs/${id}`) 
      return response.data

  }

