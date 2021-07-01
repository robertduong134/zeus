import axios from "axios";

const API_URL = "http://10.101.242.215:1111/customer-service/api/v1/";

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