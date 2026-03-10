import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4969cba7dcc14f41bf1783c6496e99e2",
  },
});
