import axios from "axios";

const API_URL = "http://10.6.9.45:3333/api/v1/";

export class NiceNumberService {

    check(niceNumber){
        return axios
                .post(API_URL + "nice-number/check", {
                    niceNumber
                })
                .then(response => {
                    return response.data
                });
    }

    register(niceNumber, referralCode, name, phone, email, payMethod){
        return axios.post(API_URL + "nice-number/register", {
            niceNumber,
            referralCode,
            name,
            phone,
            email,
            payMethod
        })
        .then(response => {
            return response.data
        });
    }
}

export default new NiceNumberService();