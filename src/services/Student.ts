import api from "../utils/api";
import { getUserId } from '../services/UserStore';

export const getDissertation = async()=> {
  const id = await getUserId();
  const response = await api.get(`index/aluno/${id}`);

  if(response.status === 200){
    return response.data.data;
  }

  return [];
}

export const getDissertationById = async(id: string)=> {
  const response = await api.get(`redacao/${id}`);

  if(response.status === 200){
    return response.data.data;
  }

  return {};
}