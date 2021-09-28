import axios from "axios";
import { getJwtToken } from '../services/UserStore';

const api = axios.create({
  baseURL: "https://desafio.pontue.com.br"
});

api.interceptors.request.use(async(config) => {
  const token = await getJwtToken();
  
  config.headers.Authorization = token ? `Bearer ${token}`: '';

  return config;
})

export default api;