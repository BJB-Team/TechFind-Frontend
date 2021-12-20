import axios from 'axios';

const techfindAPI = axios.create ({
  baseURL: 'http://localhost:3000'
})

techfindAPI.interceptors.request.use(req=>{

  const token = sessionStorage.getItem("token")
  console.log("interceptors token", token)
  if(token){
      req.headers["Authorization"] = `Bearer ${token}`
  }
  return req
})

export default techfindAPI