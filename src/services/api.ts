import api from "../config/axios";
import { LoginFormValues, RegisterFormValues } from "../model/login";

export const loginUser = (values: LoginFormValues) => {
  return api.post("login", values);
};

export const register = (data: RegisterFormValues) => {
  return api.post("register", data);
};
export const getDoctor = (limit: number) => {
  return api.get(`get-doctor/${limit}`);
};

export const fetchDoctor = (choose: string) => {
  return api.get(`get-all-doctor/${choose}`);
};
export const createMarkdown = (data) => {
  return api.post("markdown", data);
};
export const getDoctorDetail = (id: number) => {
  return api.get(`get-doctor-detail/${id}`);
};
