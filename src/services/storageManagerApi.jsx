import axios from "axios";

const storageManagerApi = axios.create({
  baseURL: "http://localhost:3333/",
});

export default storageManagerApi;
