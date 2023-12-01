import axios from "axios";
import { PROD } from "./contants";


const instance = axios.create({
    // baseURL: 'https://quang-server.vercel.app'
        baseURL: PROD ? 'hihihehe.com' : 'http://localhost:12345',
    // timeout: 10 * 1000
});

export default instance;
