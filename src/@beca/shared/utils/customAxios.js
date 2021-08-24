import axios from "axios";

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_BECA_API,
});

export default customAxios;
