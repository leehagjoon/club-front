import axios from "axios";

const clientInstance = axios.create({
  baseURL: 8080,
});

export default clientInstance;
