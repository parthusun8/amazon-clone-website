import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-c8441/us-central1/api' //The API {Cloud Funtion}
});

export default instance;