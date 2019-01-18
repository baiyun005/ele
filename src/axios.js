import axios from "axios"
const baseURL=process.env.NODE_ENV=="development" ? "http://localhost:8080" : ""
axios.defaults.baseURL=baseURL
export default axios