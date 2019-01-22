import axios from "axios"
const baseURL=process.env.NODE_ENV=="development" ? "http://ele.kassing.cn" : ""
axios.defaults.baseURL=baseURL
export default axios