import React, { Component } from 'react';
import { Steps } from 'primereact/steps';
import { InputText } from 'primereact/inputtext';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { Captcha } from 'primereact/captcha';
import classNames from 'classnames';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import logo from "../layout/images/logo-vetc.png";
import { Toast } from 'primereact/toast';
import { InputMask } from 'primereact/inputmask';


export default class NiceNumber extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeStep: 'select',
            activeIndex: 0,
            niceNumber: null,
            referralCode: null,
            approve1: false,
            approve2: false,
            name: null,
            phone: null,
            email: null,
            payMethod: 'TF'
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

        this.onPaymentClick = this.onPaymentClick.bind(this);
    }

    onPaymentClick() {
        this.toast.show({severity: 'success', summary: 'Success', detail: 'Hoàn thành'});
    }

    render() {
        return (
            <div className="container">
                <Toast ref={(el) => this.toast = el}></Toast>
                <div class="container_sidebar">
                    <div className="logo">
                        <img src={logo} alt="babylon-layout" style={{cursor: 'pointer'}}/>
                    </div>
                </div>
                <div class="container_main">
                    <div className="steps">
                        <div className="header">
                        <Steps model={this.items} activeIndex={this.state.activeIndex} onSelect={(e) => this.setState({ activeIndex: e.index })} readOnly={false} />
                        </div>
                        <div className="body">
                            <div className={classNames("body select-number-form", {'active-step' : this.state.activeStep === 'select'})}>
                                <div className="p-fluid">
                                    <div className="p-field">
                                        <label htmlFor="niceNumber" className="p-col-fixed" style={{width:'250px'}}>SỐ TÀI KHOẢN</label>
                                        <div className="p-inputgroup">
                                        <InputMask className="p-inputtext" id="niceNumber" mask="E02-9999-9999" value={this.state.niceNumber} placeholder="E02-9999-9999" onChange={(e) => this.setState({niceNumber: e.value})}></InputMask>
                                        <Button icon="pi pi-search" className="p-button-success"/>
                                    </div>
                                    </div>
                                    <div className="p-field">
                                        <label htmlFor="referralCode" className="p-col-fixed" style={{width:'250px'}}>MÃ GIỚI THIỆU</label>
                                        <InputText id="referralCode" value={this.state.referralCode} onChange={(e) => this.setState({referralCode: e.target.value})} placeholder="VETC568ABZ"></InputText>
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
                                    <div className="p-field">
                                        <Captcha siteKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onResponse={this.showResponse} />
                                    </div>
                                </div>
                                <div className="p-field">
                                    <Button className="p-button-success" label="TIẾP THEO" onClick={() => this.setState({activeStep: 'contact', activeIndex: 1})} />
                                </div>
                            </div>
                            <div className={classNames("body contact-form", {'active-step' : this.state.activeStep === 'contact'})}>
                                <div className="p-fluid">
                                    <div className="p-field">
                                        <label htmlFor="name" className="p-col-fixed" style={{width:'250px'}}>HỌ VÀ TÊN</label>
                                        <InputText id="name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} placeholder="Nguyễn Văn A" />
                                    </div>
                                    <div className="p-field">
                                        <label htmlFor="phone" className="p-col-fixed" style={{width:'250px'}}>SỐ ĐIỆN THOẠI</label>
                                        <InputText id="phone" value={this.state.phone} placeholder="0988777666" maxLength="10" onChange={(e) => this.setState({phone: e.target.value})}/>
                                    </div>
                                    <div className="p-field">
                                        <label htmlFor="email" className="p-col-fixed" style={{width:'250px'}}>EMAIL</label>
                                        <InputText id="email" value={this.state.email} placeholder="vetc@gmail.com" onChange={(e) => this.setState({email: e.target.value})}/>
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
                                <Button className="p-button-success" label="TIẾP THEO" onClick={() => this.setState({activeStep: 'payment', activeIndex: 2})} />
                                </div>
                            </div>
                            <div className={classNames("body payment-form", {'active-step' : this.state.activeStep === 'payment'})}>
                                <div className="p-fluid">
                                    <div className="p-field">
                                        <div className="list-detail">
                                            <span><b>LƯU Ý: ĐĂNG KÝ SỐ ĐẸP SẼ CHỈ CÓ HIỆU LỰC SAU KHI NẠP TIỀN THÀNH CÔNG</b></span>
                                            <br></br>
                                            <span>Khoản tiền thanh toán sẽ được nạp tự động vào tài khoản VETC sau khi kích hoạt thành công</span>
                                        </div>
                                    </div>
                                    <div className="p-field-radiobutton">
                                        <RadioButton inputId="payMethod1" disabled={true} name="payMethod" value="CC" onChange={(e) => this.setState({payMethod: e.value})} checked={this.state.payMethod === 'CC'} />
                                        <label htmlFor="payMethod1">Nạp tiền qua thẻ tín dụng</label>
                                    </div>
                                    <div className="p-field-radiobutton">
                                        <RadioButton inputId="payMethod2" disabled={true} name="payMethod" value="ATM" onChange={(e) => this.setState({payMethod: e.value})} checked={this.state.payMethod === 'ATM'} />
                                        <label htmlFor="payMethod2">Nạp tiền qua thẻ ATM nội địa/Internet Banking (Miễn phí thanh toán)</label>
                                    </div>
                                    <div className="p-field-radiobutton">
                                        <RadioButton inputId="payMethod3" disabled={true} name="payMethod" value="EW" onChange={(e) => this.setState({payMethod: e.value})} checked={this.state.payMethod === 'EW'} />
                                        <label htmlFor="payMethod3">Nạp tiền qua ví điện tử (VNPAY, MOMO, ZALOPAY)</label>
                                    </div>
                                    <div className="p-field-radiobutton">
                                        <RadioButton inputId="payMethod4" name="payMethod" value="TF" onChange={(e) => this.setState({payMethod: e.value})} checked={this.state.payMethod === 'TF'} />
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
                                    <Button className="p-button-success" label="ĐĂNG KÝ" onClick={this.onPaymentClick}></Button>
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