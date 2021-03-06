import axios from 'axios';

const techfindAPI = axios.create ({
  baseURL: 'https://techfind-backend.herokuapp.com'
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