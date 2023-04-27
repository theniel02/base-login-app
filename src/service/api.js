import axios from 'axios';

const API = {

    token: "",
    baseURL: "localhos:3333",

post: (route, data) => {
    axios({
        method: "post",
        url: this.baseURL+route,
        data: data,
        headers: {
            'User-Agent': '',
            'Token': this.token,
        }
      });
    } 
}

export default API;