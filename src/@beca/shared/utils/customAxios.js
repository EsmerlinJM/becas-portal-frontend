import axios from "axios";
import { getAuth } from "./auth";

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export function authAxios() {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getAuth()?.token}`,
    },
  });
}

export default customAxios;
