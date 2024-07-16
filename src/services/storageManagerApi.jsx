import axios from "axios";

const storageManagerApi = axios.create({
  baseURL: "https://friendly-funicular-jxjw7xv7wr3576j-3333.app.github.dev/",
});

export default storageManagerApi;
