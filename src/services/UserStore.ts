import AsyncStorage from "@react-native-async-storage/async-storage";

export const setUserId = (value: string) => {
  AsyncStorage.setItem("@Pontue:user.id", value);
}

export const getUserId = () => {
  return AsyncStorage.getItem("@Pontue:user.id");
}

export const setJwtToken = (value: string) => {
  AsyncStorage.setItem("@Pontue:jwt.token", value);
}

export const getJwtToken = () => {
  return AsyncStorage.getItem("@Pontue:jwt.token");
}