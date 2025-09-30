import axios from "axios";

export default function api() {
    return axios.create({withCredentials: true});
}