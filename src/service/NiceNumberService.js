import axios from "axios";

// const API_URL = "http://localhost:3333/api/v1/";
const API_URL = "http://103.74.113.47:1111/customer-service/api/v1/";

export class NiceNumberService {

    check(niceNumber, refCode){
        return axios
                .post(API_URL + "nice-number/check", {
                    niceNumber,
                    refCode
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

    checkResult(vnpTmnCode, vnpAmount, vnpBankCode, vnpBankTranNo, vnpCardType, vnpPayDate, vnpOrderInfo, vnpTransactionNo, vnpResponseCode, vnpTxnRef, vnpSecureHashType, vnpSecureHash){
        return axios.post(API_URL + "vnpay-transaction/check-result", {
            vnpTmnCode,
            vnpAmount,
            vnpBankCode,
            vnpBankTranNo,
            vnpCardType,
            vnpPayDate,
            vnpOrderInfo,
            vnpTransactionNo,
            vnpResponseCode,
            vnpTxnRef,
            vnpSecureHashType,
            vnpSecureHash
        })
        .then(response => {
            console.log(response.data);
            return response.data
        });
    }
}

export default new NiceNumberService();