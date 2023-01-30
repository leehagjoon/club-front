import axios from "axios";
import { HOST } from "./constants";
const clientInstance = axios.create({
  baseURL: HOST,
});

export default clientInstance;
