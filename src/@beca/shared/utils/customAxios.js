import axios from "axios";
import { BECA_API } from "../../../config_";

const customAxios = axios.create({
  baseURL: BECA_API,
});

export default customAxios;
