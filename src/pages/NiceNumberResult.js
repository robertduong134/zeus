import React, { Component } from 'react';
import { NiceNumberService } from '../service/NiceNumberService';

export default class NiceNumberResult extends Component {

    constructor(props) {
        super(props);

        const queryParams = new URLSearchParams(window.location.search);
        const vnp_TmnCode = queryParams.get('vnp_TmnCode');
        const vnp_Amount = queryParams.get('vnp_Amount');
        const vnp_BankCode = queryParams.get('vnp_BankCode');
        const vnp_BankTranNo = queryParams.get('vnp_BankTranNo');
        const vnp_CardType = queryParams.get('vnp_CardType');
        const vnp_PayDate = queryParams.get('vnp_PayDate');
        const vnp_OrderInfo = queryParams.get('vnp_OrderInfo');
        const vnp_TransactionNo = queryParams.get('vnp_TransactionNo');
        const vnp_ResponseCode = queryParams.get('vnp_ResponseCode');
        const vnp_TxnRef = queryParams.get('vnp_TxnRef');
        const vnp_SecureHashType = queryParams.get('vnp_SecureHashType');
        const vnp_SecureHash = queryParams.get('vnp_SecureHash');

        this.state = {
            vnpTmnCode: vnp_TmnCode === null ? '' : vnp_TmnCode,
            vnpAmount: vnp_Amount === null ? '' : vnp_Amount,
            vnpBankCode: vnp_BankCode === null ? '' : vnp_BankCode,
            vnpBankTranNo: vnp_BankTranNo === null ? '' : vnp_BankTranNo,
            vnpCardType: vnp_CardType === null ? '' : vnp_CardType,
            vnpPayDate: vnp_PayDate === null ? '' : vnp_PayDate,
            vnpOrderInfo: vnp_OrderInfo === null ? '' : vnp_OrderInfo,
            vnpTransactionNo: vnp_TransactionNo === null ? '' : vnp_TransactionNo,
            vnpResponseCode: vnp_ResponseCode === null ? '' : vnp_ResponseCode,
            vnpTxnRef: vnp_TxnRef === null ? '' : vnp_TxnRef,
            vnpSecureHashType: vnp_SecureHashType === null ? '' : vnp_SecureHashType,
            vnpSecureHash: vnp_SecureHash === null ? '' : vnp_SecureHash,
            transactionStatus : ''
        };

        this.niceNumberService = new NiceNumberService();
    }

    componentDidMount() {
        this.niceNumberService.checkResult(this.state.vnpTmnCode, this.state.vnpAmount, this.state.vnpBankCode, this.state.vnpBankTranNo, 
            this.state.vnpCardType, this.state.vnpPayDate, this.state.vnpOrderInfo, this.state.vnp_TransactionNo,
            this.state.vnpResponseCode, this.state.vnpTxnRef, this.state.vnpSecureHashType, this.state.vnpSecureHash)
            .then(response => {
                console.log(response);
                this.setState({ transactionStatus: response.body.transactionStatus});
            })
            .catch(error => {
                this.setState({ transactionStatus: 'Đã có lỗi xảy ra vui lòng liên hệ tổng đài 19006010 để kiểm tra trạng thái giao dịch!'});
            });
    }

    render() {
        return (
            <div className="container">
                <div className="p-fluid">
                    <div className="p-field">
                        <span><b>KẾT QUẢ NẠP TIỀN</b></span>
                        <br></br>
                        <br></br>
                        <span>vnpTmnCode: {this.state.vnpTmnCode}</span>
                        <br></br>
                        <br></br>
                        <span>vnpAmount: {this.state.vnpAmount}</span>
                        <br></br>
                        <br></br>
                        <span>vnpBankCode: {this.state.vnpBankCode}</span>
                        <br></br>
                        <br></br>
                        <span>vnpBankTranNo: {this.state.vnpBankTranNo}</span>
                        <br></br>
                        <br></br>
                        <span>vnpCardType: {this.state.vnpCardType}</span>
                        <br></br>
                        <br></br>
                        <span>vnpPayDate: {this.state.vnpPayDate}</span>
                        <br></br>
                        <br></br>
                        <span>vnpOrderInfo: {this.state.vnpOrderInfo}</span>
                        <br></br>
                        <br></br>
                        <span>vnpTransactionNo: {this.state.vnpTransactionNo}</span>
                        <br></br>
                        <br></br>
                        <span>vnpResponseCode: {this.state.vnpResponseCode}</span>
                        <br></br>
                        <br></br>
                        <span>vnpTxnRef: {this.state.vnpTxnRef}</span>
                        <br></br>
                        <br></br>
                        <span>vnpSecureHashType: {this.state.vnpSecureHashType}</span>
                        <br></br>
                        <br></br>
                        <span>vnpSecureHash: {this.state.vnpSecureHash}</span>
                        <br></br>
                        <br></br>
                        <h1>Trạng thái giao dịch: {this.state.transactionStatus}</h1>
                    </div>
                </div>
            </div>
            
        )
    }
}