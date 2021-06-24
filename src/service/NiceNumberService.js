import axios from "axios";

const API_URL = "http://localhost:3333/api/v1/";

class NiceNumberService {

    check(niceNumber){
        return axios.post(API_URL + "nice-number/check", {niceNumber})
                    .then(response => {return response.data});
    }

    register(){

    }
}

export default new NiceNumberService();