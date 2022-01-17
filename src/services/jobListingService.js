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
  console.log(response)
  return response.data
}

export async function deleteListingId(id){
  const response = await techfindAPI.delete(`/api/jobs/${id}`) 
  return response.data
}

export async function updateListingId(id, data){
  const response = await techfindAPI.put(`/api/jobs/${id}`,data) 
  return response.data
}

export async function appyListing(data){
  const response = await techfindAPI.post(`/api/apply`,data) 
  return response.data
}

export async function showApplied(){
  const response = await techfindAPI.get(`/api/applied`) 
  return response.data
}

export async function myApplied(){
  const response = await techfindAPI.get(`/api/my-application`) 
  return response.data
}

export async function downloadApplication(id){
  const response = await techfindAPI.get(`/api/download/${id}`) 
  console.log(response)
  return response.data
}

export async function deleteApplication(id){
  const response = await techfindAPI.delete(`/api/application/${id}`) 
  return response.data
}





