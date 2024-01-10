import axios from "axios";
// import {APP_ENV} from "./env/main.ts";

const http_common = axios.create({
    baseURL: "http://vpd111.api.com",
    headers: {
        "Content-Type": "application/json"
    }
});

export default  http_common;