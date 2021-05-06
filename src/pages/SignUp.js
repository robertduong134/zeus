import React, { Component } from 'react';
import classNames from 'classnames';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import { Checkbox } from 'primereact/checkbox';
import { InputMask } from 'primereact/inputmask';
import { CascadeSelect } from 'primereact/cascadeselect';

import logo from "../layout/images/logo-vetc.png";
import bannerlogo from "../layout/images/extensions/babylon-icon.png";
import hd1 from "../layout/images/extensions/bg-header.png";
import hd2 from "../layout/images/extensions/bg-header-2.png";
import hd3 from "../layout/images/extensions/bg-header-3.png";

export default class SignUp extends Component {

    constructor() {
        super();
        this.state = {
            activeTab: 'register',
            activeCard: '',
            dropdownTime: null,
            date: null,
            dropdownHear: null,
            group1: null,
            val1: null,
            val2: null,
            val3: null,
            checked: null,
            dropdownCustType: null,

            custType: null,
            name: null,
            gender: null,
            dob: null,
            idNo: null,
            idIssueDate: null,
            idIssuePlace: null,
            taxCode: null,
            taxEffectDate: null,
            phone: null,
            email: null,
            plate: null,
            provinceCode: null,
            districtCode: null,
            precintCode: null,
            referalCode: null,
            accountNumber: null,
            accountNumberStatus: null,

            selectedArea: null,

            approve1: false,
            approve2: false,

            payMethod: ''
        }
        this.createCustTypeSelect();
        this.createAreaSelect();
    }

    createAreaSelect(){
        this.cascadeSelectArea = [
            {
                name: 'Thành phố Hà Nội',
                code: 'HNA',
                states: [
                    {
                        name: 'Quận Hà Đông',
                        code: 'HDO',
                        cities: [
                            { cname: 'Phường Mộ Lao', code: 'A-SY' },
                            { cname: 'Phường Hà Cầu', code: 'A-NE' },
                            { cname: 'Phường Dương Nội', code: 'A-WO' }
                        ]
                    },
                    {
                        name: 'Quận Đống Đa',
                        code: 'DDA',
                        cities: [
                            { cname: 'Phường Tây Sơn', code: 'A-BR' },
                            { cname: 'Phường Thái Hà', code: 'A-TO' }
                        ]
                    },

                ]
            },
            {
                name: 'Canada',
                code: 'CA',
                states: [
                    {
                        name: 'Quebec',
                        cities: [
                            { cname: 'Montreal', code: 'C-MO' },
                            { cname: 'Quebec City', code: 'C-QU' }
                        ]
                    },
                    {
                        name: 'Ontario',
                        cities: [
                            { cname: 'Ottawa', code: 'C-OT' },
                            { cname: 'Toronto', code: 'C-TO' }
                        ]
                    },

                ]
            },
            {
                name: 'United States',
                code: 'US',
                states: [
                    {
                        name: 'California',
                        cities: [
                            { cname: 'Los Angeles', code: 'US-LA' },
                            { cname: 'San Diego', code: 'US-SD' },
                            { cname: 'San Francisco', code: 'US-SF' }
                        ]
                    },
                    {
                        name: 'Florida',
                        cities: [
                            { cname: 'Jacksonville', code: 'US-JA' },
                            { cname: 'Miami', code: 'US-MI' },
                            { cname: 'Tampa', code: 'US-TA' },
                            { cname: 'Orlando', code: 'US-OR' }
                        ]
                    },
                    {
                        name: 'Texas',
                        cities: [
                            { cname: 'Austin', code: 'US-AU' },
                            { cname: 'Dallas', code: 'US-DA' },
                            { cname: 'Houston', code: 'US-HO' }
                        ]
                    }
                ]
            }
        ];
    }

    createCustTypeSelect(){
        this.dropdownCustTypes = [
            {label: 'Chọn loại khách hàng', value: null },
            {label: 'Khách hàng cá nhân', value: 'I'},
            {label: 'Khách hàng doanh nghiệp', value: 'C'}
        ]
    }

    render() {
        return (
        <div className="wizard-body">
            <div className="wizard-wrapper">
                <div className="wizard-header">
                    <div className="wizard-logo">
                        <img src={logo} alt="babylon-layout" style={{cursor: 'pointer'}}/>
                    </div>
                </div>

                <div className="wizard-content">
                    <div className="wizard-card">
                        <div className="wizard-card-header">
                            <div className="wizard-card-header-banner">
                                <div className="banner-logo">
                                    <img src={bannerlogo}
                                        alt="babylon-layout" />
                                </div>
                                <div
                                    className={classNames("banner-image banner-1", { 'active-banner': this.state.activeTab === 'register' })}>
                                    <h1>Đăng ký tài khoản VETC</h1>
                                    <img src={hd1} alt="babylon-layout" />
                                </div>
                                <div
                                    className={classNames("banner-image banner-2", { 'active-banner': this.state.activeTab === 'tier' })}>
                                    <h1>Chọn số tài khoản VETC</h1>
                                    <img src={hd2}
                                        alt="babylon-layout" />
                                </div>
                                <div
                                    className={classNames("banner-image banner-3", { 'active-banner': this.state.activeTab === 'payment' })}>
                                    <h1>Nạp tiền vào tài khoản VETC</h1>
                                    <img src={hd3}
                                        alt="babylon-layout" />
                                </div>
                            </div>
                            <div className="wizard-card-tabs">
                                <div
                                    className={classNames("wizard-card-tab register-tab", { 'selected-tab': this.state.activeTab === 'register' })}
                                    onClick={() => this.setState({activeTab: 'register'})}>
                                    ĐĂNG KÝ TÀI KHOẢN
                                </div>
                                <div
                                    className={classNames("wizard-card-tab tier-tab", { 'selected-tab': this.state.activeTab === 'tier' })}
                                    onClick={() => this.setState({activeTab: 'tier'})}>
                                    CHỌN SỐ TÀI KHOẢN
                                </div>
                                <div
                                    className={classNames("wizard-card-tab payment-tab", { 'selected-tab': this.state.activeTab === 'payment' })}
                                    onClick={() => this.setState({activeTab: 'payment'})}>
                                    NẠP TIỀN
                                </div>
                            </div>
                        </div>

                        <div
                            className={classNames("wizard-card-content register", { 'active-content': this.state.activeTab === 'register' })}>
                            <div className="warning">
                                <i className="pi pi-exclamation-circle"></i>
                                <p>Đối với loại tài khoản dành cho khách hàng doanh nghiệp cần phải nhập đầy đủ thông tin Mã số thuế.</p>
                            </div>
                            <div className="wizard-forms-wrapper p-grid p-nogutter">
                                <div className="p-col-12 p-md-3 wizard-forms">
                                    <label htmlFor="custtype" className="form-label">Loại khách hàng</label>
                                    <Dropdown id="custtype"
                                        options={this.dropdownCustTypes} value={this.state.dropdownCustType}
                                        onChange={event => this.setState({dropdownCustType: event.value})} />

                                    <label htmlFor="name" className="form-label">Họ và tên</label>
                                    <InputText id="name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} placeholder="Nguyễn Văn A" />

                                    <label htmlFor="dob" className="form-label">Ngày sinh</label>
                                    <InputMask id="dob" mask="99/99/9999" value={this.state.dob} placeholder="31/12/2021" slotChar="dd/mm/yyyy" onChange={(e) => this.setState({dob: e.value})}></InputMask>
                                </div>

                                <div className="p-col-12 p-md-3 wizard-forms">
                                    <label htmlFor="idNo" className="form-label">Số CMND/CCCD</label>
                                    <InputText id="idNo" value={this.state.idNo} onChange={(e) => this.setState({idNo: e.target.value})} placeholder="090099009999" />

                                    <label htmlFor="idIssueDate" className="form-label">Ngày cấp CMND/CCCD</label>
                                    <InputMask id="idIssueDate" mask="99/99/9999" value={this.state.idIssueDate} placeholder="31/12/2021" slotChar="dd/mm/yyyy" onChange={(e) => this.setState({idIssueDate: e.value})}></InputMask>

                                    <label htmlFor="idIssuePlace" className="form-label">Nơi cấp CMND/CCCD</label>
                                    <InputText id="idIssuePlace" value={this.state.idIssuePlace} onChange={(e) => this.setState({idIssuePlace: e.target.value})} placeholder="Hà Nội" />
                                </div>

                                <div className="p-col-12 p-md-3 wizard-forms">
                                    <label htmlFor="phone" className="form-label">Số điện thoại</label>
                                    <InputText id="phone" value={this.state.phone} placeholder="0988777666" onChange={(e) => this.setState({phone: e.target.value})}/>

                                    <label htmlFor="email" className="form-label">Email</label>
                                    <InputText id="email" value={this.state.email} placeholder="vetc@gmail.com" onChange={(e) => this.setState({email: e.target.value})}/>

                                    <label htmlFor="plate" className="form-label">Biển số xe</label>
                                    <InputText id="plate" value={this.state.plate} placeholder="34B56789T" onChange={(e) => this.setState({plate: e.target.value})}/>
                                </div>

                                <div className="p-col-12 p-md-3 wizard-forms">
                                    <label htmlFor="area" className="form-label">Địa chỉ</label>
                                    <CascadeSelect id="area"  value={this.state.selectedArea} options={this.cascadeSelectArea}  optionLabel={"cname"} optionGroupLabel={"name"} optionGroupChildren={['states', 'cities']}
                                    style={{minWidth: '14rem'}} placeholder={"Chọn địa chỉ"} onChange={event => this.setState({selectedArea: event.value})}/>

                                    <label htmlFor="taxCode" className="form-label">Mã số thuế</label>
                                    <InputText id="taxCode" value={this.state.taxCode} placeholder="0123456789" onChange={(e) => this.setState({taxCode: e.target.value})} />

                                    <label htmlFor="taxEffectDate" className="form-label">Ngày hiệu lực Mã số thuế</label>
                                    <InputMask id="taxEffectDate" mask="99/99/9999" value={this.state.taxEffectDate} placeholder="31/12/2021" slotChar="dd/mm/yyyy" onChange={(e) => this.setState({taxEffectDate: e.value})}></InputMask>
                                </div>
                                
                                <div className="wizard-button">
                                    <Button className="continue-button" label="TIẾP TỤC"
                                        onClick={() => this.setState({activeTab: 'tier'})} />
                                </div>
                            </div>
                        </div>

                        <div
                            className={classNames("wizard-card-content tier", { 'active-content': this.state.activeTab === 'tier' })}>
                            <div className="warning">
                                <i className="pi pi-exclamation-circle"></i>
                                <p>Số tài khoản sẽ không thể thay đổi sau khi được cấp.</p>
                            </div>
                            <div className="wizard-forms-wrapper p-grid p-nogutter">
                                <div className="p-col-12 p-md-4 wizard-forms">
                                    <label htmlFor="accountNumber" className="form-label">Số tài khoản</label>
                                    <div className="p-inputgroup">
                                        <InputMask className="p-inputtext" id="accountNumber" mask="E02-9999-9999" value={this.state.accountNumber} placeholder="E02-9999-9999" onChange={(e) => this.setState({accountNumber: e.value})}></InputMask>
                                        <Button icon="pi pi-search" className="p-button-warning"/>
                                    </div>
                                    <small id="accountNumber-help" className="p-d-block">Nhập và kiểm tra số tài khoản VETC mà bạn muốn đăng ký.</small>

                                    <label htmlFor="accountNumberStatus" className="form-label">Trạng thái số tài khoản</label>
                                    <InputText id="accountNumberStatus" value={this.state.accountNumberStatus} onChange={(e) => this.setState({accountNumberStatus: e.target.value})} className="p-inputtext" disabled="true" placeholder="Khả dụng"></InputText>
                                </div>

                                <div className="p-col-12 p-md-2 wizard-forms">

                                </div>

                                <div className="p-col-12 p-md-6 wizard-forms">
                                    <label htmlFor="referalCode" className="form-label">Mã giới thiệu</label>
                                    <InputText id="referalCode" value={this.state.referalCode} onChange={(e) => this.setState({referalCode: e.target.value})} className="p-inputtext" placeholder="VETC568ABZ"></InputText>
                                
                                    <div style={{ marginTop: "50px", color: "#ffffff" }}>
                                        <Checkbox inputId="cb1" checked={this.state.approve1}
                                            onChange={e => this.setState({approve1: e.checked})} />
                                        <label htmlFor="cb1" className="p-checkbox-label p-ml-2">Tôi cam kết các thông tin đã cung cấp tại đây hoàn toàn chính xác.</label>
                                    </div>

                                    <div style={{ marginTop: "24px", color: "#ffffff" }}>
                                        <Checkbox inputId="cb2" checked={this.state.approve2}
                                            onChange={e => this.setState({approve2: e.checked})} />
                                        <label htmlFor="cb2" className="p-checkbox-label p-ml-2">Tôi đồng ý với các Điều kiện và Điều khoản của VETC Online.</label>
                                    </div>
                                </div>
                                
                                <div className="wizard-button">
                                    <Button className="continue-button" label="TIẾP TỤC"
                                        onClick={() => this.setState({activeTab: 'payment'})} />
                                </div>
                            </div>

                        </div>

                        <div
                            className={classNames("wizard-card-content payment", { 'active-content': this.state.activeTab === 'payment' })}>
                            <div className="wizard-forms-wrapper">
                                <div className="warning">
                                    <i className="pi pi-exclamation-circle"></i>
                                    <p>LỰA CHỌN HÌNH THỨC NẠP TIỀN</p>
                                </div>
                                <div className="wizard-forms">
                                    <div className="p-field-radiobutton">
                                        <RadioButton inputId="payMethod1" name="payMethod" value="CC" onChange={(e) => this.setState({payMethod: e.value})} checked={this.state.payMethod === 'CC'} />
                                        <label htmlFor="payMethod1">Nạp tiền qua thẻ tín dụng</label>
                                    </div>
                                    <div className="p-field-radiobutton">
                                        <RadioButton inputId="payMethod2" name="payMethod" value="ATM" onChange={(e) => this.setState({payMethod: e.value})} checked={this.state.payMethod === 'ATM'} />
                                        <label htmlFor="payMethod2">Nạp tiền qua thẻ ATM nội địa/Internet Banking (Miễn phí thanh toán)</label>
                                    </div>
                                    <div className="p-field-radiobutton">
                                        <RadioButton inputId="payMethod3" name="payMethod" value="EW" onChange={(e) => this.setState({payMethod: e.value})} checked={this.state.payMethod === 'EW'} />
                                        <label htmlFor="payMethod3">Nạp tiền qua ví điện tử (VNPAY, MOMO, ZALOPAY)</label>
                                    </div>
                                    <div className="p-field-radiobutton">
                                        <RadioButton inputId="payMethod4" name="payMethod" value="TF" onChange={(e) => this.setState({payMethod: e.value})} checked={this.state.payMethod === 'TF'} />
                                        <label htmlFor="payMethod4">Nạp tiền qua chuyển khoản ngân hàng</label>
                                    </div>
                                </div>
                                <div className={classNames('transfer-note', {'selected': this.state.payMethod === 'TF'})}>
                                    <p>Người hưởng: <b>CÔNG TY TNHH THU PHÍ TỰ ĐỘNG VETC</b> - Số tài khoản: <b>16010000000626</b></p>
                                    <p>Tại: <b>SỞ GIAO DỊCH III (HÀ NỘI) - NGÂN HÀNG TMCP ĐẦU TƯ VÀ PHÁT TRIỂN VIỆT NAM (BIDV)</b></p>
                                    <p>Nội dung: <b>VETC_O_ABCXYZ</b></p>
                                </div>
                                <div className={classNames('transfer-note', {'selected': this.state.payMethod !== 'TF'})}>
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                </div>
                            </div>

                            <div className="wizard-button">
                                <div
                                    className={classNames('order-summary order-default', { 'selected-order': this.state.payMethod === '' })}>
                                    <p>CHƯA CHỌN HÌNH THỨC NẠP TIỀN</p>
                                    <span>Vui lòng chọn một hình thức nạp tiền.</span>
                                </div>
                                <div
                                    className={classNames('order-summary order-beginner', { 'selected-order': this.state.payMethod === 'CC' })}>
                                    <p>NẠP TIỀN QUA THẺ TÍN DỤNG</p>
                                    <h1>200.000 VND</h1>
                                    <span>Nhấn Hoàn thành đăng ký để chuyển sang đơn vị thanh toán và hoàn tất đăng ký.</span>
                                </div>
                                <div
                                    className={classNames('order-summary order-professional', { 'selected-order': this.state.payMethod === 'ATM' })}>
                                    <p>NẠP TIỀN QUA ATM HOẶC INTERNET BANKING</p>
                                    <h1>200.000 VND</h1>
                                    <span>Nhấn Hoàn thành đăng ký để chuyển sang đơn vị thanh toán và hoàn tất đăng ký.</span>
                                </div>
                                <div
                                    className={classNames('order-summary order-enterprise', { 'selected-order': this.state.payMethod === 'EW' })}>
                                    <p>NẠP TIỀN QUA VÍ ĐIỆN TỬ</p>
                                    <h1>200.000 VND</h1>
                                    <span>Nhấn Hoàn thành đăng ký để chuyển sang đơn vị thanh toán và hoàn tất đăng ký.</span>
                                </div>
                                <div
                                    className={classNames('order-summary order-enterprise', { 'selected-order': this.state.payMethod === 'TF' })}>
                                    <p>CHUYỂN KHOẢN</p>
                                    <h1>200.000 VND</h1>
                                    <span>Nhấn Hoàn thành để hoàn tất đăng ký. Tài khoản của bạn sẽ chỉ được kích hoạt sau khi hoàn thành chuyển khoản.</span>
                                </div>
                                <Button type="button" label="HOÀN THÀNH" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        }
}