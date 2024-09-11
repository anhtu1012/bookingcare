import api from "../config/axios";
import { LoginFormValues, RegisterFormValues } from "../model/login";

export const loginUser = (values: LoginFormValues) => {
  return api.post("login", values);
};

export const register = (data: RegisterFormValues) => {
  return api.post("register", data);
};
