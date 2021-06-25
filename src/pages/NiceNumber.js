import React, { Component } from 'react';
import { Steps } from 'primereact/steps';
import { InputText } from 'primereact/inputtext';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import classNames from 'classnames';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import logo from "../layout/images/logo-vetc.png";
import { Toast } from 'primereact/toast';
import { InputMask } from 'primereact/inputmask';
import { NiceNumberService } from '../service/NiceNumberService';

export default class NiceNumber extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeStep: 'select',
            activeIndex: 0,
            niceNumber: '',
            referralCode: '',
            approve1: false,
            approve2: false,
            name: '',
            phone: '',
            email: '',
            payMethod: 'VNPAY',
            disableRegisterButton: false
        };

        this.items = [
            {
                label: 'Chọn số tài khoản',
                command: (event) => {
                    this.setState({ activeStep: 'select' });
                }
            },
            {
                label: 'Thông tin liên hệ',
                command: (event) => {
                    this.setState({ activeStep: 'contact' });
                }
            },
            {
                label: 'Nạp tiền',
                command: (event) => {
                    this.setState({ activeStep: 'payment' });
                }
            }
        ];

        this.niceNumberService = new NiceNumberService();
        this.onRegisterClick = this.onRegisterClick.bind(this);
        this.onCheckNiceNumberClick = this.onCheckNiceNumberClick.bind(this);
        this.onNextSelectForm = this.onNextSelectForm.bind(this);
        this.onSelectStepHeader = this.onSelectStepHeader.bind(this);
        this.onNextContactForm = this.onNextContactForm.bind(this);
    }

    showError(detailMessage) {
        this.toast.show({severity: 'error', summary: 'Lỗi', detail: detailMessage});
    }

    showSuccess(detailMessage) {
        this.toast.show({severity: 'success', summary: 'Thông báo', detail: detailMessage});
    }

    showWarn(detailMessage) {
        this.toast.show({severity: 'warn', summary: 'Cảnh báo', detail: detailMessage});
    }

    validateSelectForm() {
        if (this.state.niceNumber === undefined || this.state.niceNumber === '') {
            this.showError('Số tài khoản không được để trống!');
            return false;
        }
        return true;
    }

    validateContactForm() {
        if (this.state.name === undefined || this.state.name === '') {
            this.showError('Họ và tên không được để trống!');
            return false;
        }
        if (this.state.phone === undefined || this.state.phone === '') {
            this.showError('Số điện thoại không được để trống!');
            return false;
        }
        var regexpPhone = /^\d{10,11}$/;
        if (!regexpPhone.test(this.state.phone)) {
            this.showError('Số điện thoại không hợp lệ!');
            return false;
        }
        if (this.state.email === undefined || this.state.email === '') {
            this.showError('Email không được để trống!');
            return false;
        }
        var regexpEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!regexpEmail.test(this.state.email)) {
            this.showError('Email không hợp lệ!');
            return false;
        }
        if (!this.state.approve1 || !this.state.approve2) {
            this.showError('Bạn phải đồng ý với các cam kết và điều khoản để có thể tiếp tục!');
            return false;
        }
        return true;
    }

    onNextContactForm() {
        if (!this.validateContactForm()) {
            return
        }else{
            this.setState({activeStep: 'payment', activeIndex: 2});
        }
    }

    onCheckNiceNumberClick() {
        if (!this.validateSelectForm()) {
            return
        }else {
            this.niceNumberService.check(this.state.niceNumber)
            .then(response => {
                const niceNumberStatus = response.body.data.status;
                if(niceNumberStatus === 'NAN' || niceNumberStatus === 'CANCELED'){
                    this.showSuccess('Số tài khoản chưa được đăng ký');
                }else{
                    this.showWarn('Số tài khoản đã được đăng ký');
                }
            })
            .catch(error => {
                // console.error('There was an error!', error.response.data.message);
                this.setState({ disableNextSelectForm: true });
                this.showError(error.response.data.message);
            });
        }
    }

    onNextSelectForm() {
        if (!this.validateSelectForm()) {
            return
        }else {
            this.niceNumberService.check(this.state.niceNumber)
                            .then(response => {
                                const niceNumberStatus = response.body.data.status;
                                if(niceNumberStatus === 'NAN' || niceNumberStatus === 'CANCELED'){
                                    this.setState({activeStep: 'contact', activeIndex: 1 });
                                }else{
                                    this.showWarn('Số tài khoản đã được đăng ký');
                                }
                            })
                            .catch(error => {
                                this.showError(error.response.data.message);
                            });
            }
    }

    onRegisterClick() {
        this.niceNumberService.register(this.state.niceNumber, this.state.referralCode, this.state.name, this.state.phone, this.state.email, this.state.payMethod)
                                .then(response => {
                                    const vnPayUrl = response.body.data.vnPayUrl;
                                    if (vnPayUrl === undefined || vnPayUrl === '') {
                                        this.showError('Đã có lỗi trong quá trình đăng ký, vui lòng thử lại!');
                                    }else{
                                        this.setState({disableRegisterButton: true});
                                        this.showSuccess('Bạn sẽ được chuyển sang trang thanh toán của nhà cung cấp, vui lòng đợi trong giây lát!');
                                        setTimeout(() => {
                                            window.location.assign(vnPayUrl);
                                        }, 
                                        3000);
                                    }
                                })
                                .catch(error => {
                                    this.showError(error.response.data.message);
                                })
    }

    onSelectStepHeader(e){
        this.setState({ activeIndex: e.index });
    }

    render() {
        return (
            <div className="container">
                <Toast ref={(el) => this.toast = el}></Toast>
                <div className="container_sidebar">
                    <div className="logo">
                        <img src={logo} alt="babylon-layout" style={{cursor: 'pointer'}}/>
                    </div>
                </div>
                <div className="container_main">
                    <div className="steps">
                        <div className="header">
                        <Steps model={this.items} activeIndex={this.state.activeIndex} onSelect={this.onSelectStepHeader} readOnly={true} />
                        </div>
                        <div className="body">
                            <div className={classNames("body select-number-form", {'active-step' : this.state.activeStep === 'select'})}>
                                <div className="p-fluid">
                                    <div className="p-field">
                                        <label htmlFor="niceNumber" className="p-col-fixed" style={{width:'250px'}}>SỐ TÀI KHOẢN</label>
                                        <div className="p-inputgroup">
                                        <InputMask className="p-inputtext" id="niceNumber" mask="E0299999999" value={this.state.niceNumber} placeholder="Nhập số tài khoản" onChange={(e) => this.setState({niceNumber: e.value})}></InputMask>
                                        <Button icon="pi pi-search" className="p-button-success" onClick={this.onCheckNiceNumberClick}/>
                                    </div>
                                    </div>
                                    <div className="p-field">
                                        <label htmlFor="referralCode" className="p-col-fixed" style={{width:'250px'}}>MÃ GIỚI THIỆU</label>
                                        <InputText id="referralCode" value={this.state.referralCode} onChange={(e) => this.setState({referralCode: e.target.value})} placeholder="Nhập mã giới thiệu"></InputText>
                                    </div>
                                    <div className="p-field">
                                        <div className="list-detail">
                                            <span>- MIỄN PHÍ số tài khoản tam hoa, tứ quý, ngày sinh, tự chọn</span>
                                            <br></br>
                                            <span>- MIỄN PHÍ dán thẻ Etag</span>
                                            <br></br>
                                            <span>- MIỄN PHÍ nạp tiền vào tài khoản VETC</span>
                                        </div>
                                    </div>
                                    {/* <div className="p-field">
                                        <Captcha siteKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onResponse={this.showResponse} />
                                    </div> */}
                                </div>
                                <div className="p-field">
                                    <Button className="p-button-success" label="TIẾP THEO" onClick={this.onNextSelectForm} />
                                </div>
                            </div>
                            <div className={classNames("body contact-form", {'active-step' : this.state.activeStep === 'contact'})}>
                                <div className="p-fluid">
                                    <div className="p-field">
                                        <label htmlFor="name" className="p-col-fixed" style={{width:'250px'}}>HỌ VÀ TÊN</label>
                                        <InputText id="name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} placeholder="Nhập họ và tên" />
                                    </div>
                                    <div className="p-field">
                                        <label htmlFor="phone" className="p-col-fixed" style={{width:'250px'}}>SỐ ĐIỆN THOẠI</label>
                                        <InputText id="phone" value={this.state.phone} placeholder="Nhập số điện thoại" maxLength="10" onChange={(e) => this.setState({phone: e.target.value})}/>
                                    </div>
                                    <div className="p-field">
                                        <label htmlFor="email" className="p-col-fixed" style={{width:'250px'}}>EMAIL</label>
                                        <InputText id="email" value={this.state.email} placeholder="Nhập email" onChange={(e) => this.setState({email: e.target.value})}/>
                                    </div>
                                    <div className="p-field-checkbox">
                                        <Checkbox inputId="cb1" checked={this.state.approve1} onChange={e => this.setState({approve1: e.checked})} />
                                        <label htmlFor="cb1">Tôi cam kết các thông tin cung cấp tại đây là hoàn toàn chính xác.</label>
                                    </div>
                                    <div className="p-field-checkbox">
                                        <Checkbox inputId="cb2" checked={this.state.approve2} onChange={e => this.setState({approve2: e.checked})} />
                                        <label htmlFor="cb2">Tôi đồng ý với các Điều kiện và Điều khoản của VETC.</label>
                                    </div>
                                </div>
                                <div className="p-field">
                                <Button className="p-button-success" label="TIẾP THEO" onClick={this.onNextContactForm} />
                                </div>
                            </div>
                            <div className={classNames("body payment-form", {'active-step' : this.state.activeStep === 'payment'})}>
                                <div className="p-fluid">
                                    <div className="p-field">
                                        <div className="list-warning-payment">
                                            <span><b>LƯU Ý: ĐĂNG KÝ SỐ ĐẸP SẼ CHỈ CÓ HIỆU LỰC SAU KHI NẠP TIỀN THÀNH CÔNG</b></span>
                                            <br></br>
                                            <span>Khoản tiền thanh toán sẽ được nạp tự động vào tài khoản VETC sau khi kích hoạt thành công</span>
                                        </div>
                                    </div>
                                    <div className="p-field-radiobutton">
                                        <RadioButton inputId="payMethod3" name="payMethod" value="VNPAY" onChange={(e) => this.setState({payMethod: e.value})} checked={this.state.payMethod === 'VNPAY'} />
                                        <label htmlFor="payMethod3">Nạp tiền qua VNPAY</label>
                                    </div>
                                    <div className="p-field-radiobutton">
                                        <RadioButton inputId="payMethod4" disabled={true} name="payMethod" value="TF" onChange={(e) => this.setState({payMethod: e.value})} checked={this.state.payMethod === 'TF'} />
                                        <label htmlFor="payMethod4">Nạp tiền qua chuyển khoản ngân hàng</label>
                                    </div>
                                    <div className="p-field">
                                        <div className="list-detail">
                                            <span>Người hưởng: <b>CÔNG TY TNHH THU PHÍ TỰ ĐỘNG VETC</b> - Số tài khoản: <b>16010000000626</b></span>
                                            <br></br>
                                            <span>Tại: <b>SỞ GIAO DỊCH III (HÀ NỘI) - NGÂN HÀNG TMCP ĐẦU TƯ VÀ PHÁT TRIỂN VIỆT NAM (BIDV)</b></span>
                                            <br></br>
                                            <span>Nội dung: <b>VETC_O_ABCXYZ</b></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="p-field">
                                    <Button className="p-button-success" label="ĐĂNG KÝ" disabled={this.state.disableRegisterButton} onClick={this.onRegisterClick}></Button>
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            
                        </div>
                    </div>
                </div>
            
            </div>
        );
    }
}