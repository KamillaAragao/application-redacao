import api from "../utils/api";
import Auth from "../interfaces/Auth";
import { setJwtToken, setUserId } from "./UserStore";

export const authentication = async (form: Auth) => {
  const response = await api.post('auth/login', form);
  
  if(response.status === 200 && response.data){
    setJwtToken(response.data.access_token);
    setUserId(response.data.aluno_id);

    return true;
  }

  return false;
}