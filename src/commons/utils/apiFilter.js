import axios from "axios";

export default function api({request}) {
    return axios({...request, withCredentials: true});
}