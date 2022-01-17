import axios from 'axios';

const techfindAPI = axios.create ({
  baseURL: 'https://upbeat-dubinsky-90fa31.netlify.app'
})

techfindAPI.interceptors.request.use(req=>{

  const token = sessionStorage.getItem("token")

  if(token){
      req.headers["Authorization"] = `Bearer ${token}`
  }
  console.log("interceptors token", token)
  return req
})

export default techfindAPI