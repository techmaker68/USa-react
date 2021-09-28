import axios from "axios";

export default axios.create({
  baseURL: `https://192.168.0.163:45459/api`,
});
