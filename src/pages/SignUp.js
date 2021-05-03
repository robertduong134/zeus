import React, { Component } from 'react';
import classNames from 'classnames';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
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
import beginner from "../layout/images/extensions/asset-beginner.png";
import pro from "../layout/images/extensions/asset-pro.png";
import enterprise from "../layout/images/extensions/asset-enterprise.png";

import mastercard from "../layout/images/extensions/asset-mastercard.png";
import visa from "../layout/images/extensions/asset-visa.png";
import amex from "../layout/images/extensions/asset-amex.png";
import paypal from "../layout/images/extensions/asset-paypal.png";

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

            selectedCity1: null
        }
        this.createTimeSelect();
        this.createQuestionSelect();
        this.createCustTypeSelect();
        this.createAreaSelect();
    }

    createAreaSelect(){
        this.cascadeSelectArea = [
            {
                name: 'Australia',
                code: 'AU',
                states: [
                    {
                        name: 'New South Wales',
                        cities: [
                            { cname: 'Sydney', code: 'A-SY' },
                            { cname: 'Newcastle', code: 'A-NE' },
                            { cname: 'Wollongong', code: 'A-WO' }
                        ]
                    },
                    {
                        name: 'Queensland',
                        cities: [
                            { cname: 'Brisbane', code: 'A-BR' },
                            { cname: 'Townsville', code: 'A-TO' }
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

    createTimeSelect() {
        this.dropdownOptions = [
            { label: 'Select Time Zone', value: null },
            { label: 'UTC-12.00', value: { id: 1, name: 'UTC-12.00', code: '-12' } },
            { label: 'UTC-11.00', value: { id: 2, name: 'UTC-11.00', code: '-11' } },
            { label: 'UTC-10.00', value: { id: 3, name: 'UTC-10.00', code: '-10' } },
            { label: 'UTC-09.30', value: { id: 4, name: 'UTC-09.30', code: '-93' } },
            { label: 'UTC-09.00', value: { id: 5, name: 'UTC-09.00', code: '-09' } },
            { label: 'UTC-08.00', value: { id: 6, name: 'UTC-08.00', code: '-08' } },
            { label: 'UTC-07.00', value: { id: 7, name: 'UTC-07.00', code: '-07' } },
            { label: 'UTC-06.00', value: { id: 8, name: 'UTC-06.00', code: '-06' } },
            { label: 'UTC-05.00', value: { id: 9, name: 'UTC-05.00', code: '-05' } },
            { label: 'UTC-04.00', value: { id: 10, name: 'UTC-04.00', code: '-04' } },
            { label: 'UTC-03.30', value: { id: 11, name: 'UTC-03.30', code: '-33' } },
            { label: 'UTC-03.00', value: { id: 12, name: 'UTC-03.00', code: '-03' } },
            { label: 'UTC-02.00', value: { id: 13, name: 'UTC-02.00', code: '-02' } },
            { label: 'UTC-01.00', value: { id: 14, name: 'UTC-01.00', code: '-01' } },
            { label: 'UTC-+00.00', value: { id: 15, name: 'UTC-+00.00', code: '-00' } },
            { label: 'UTC+01.00', value: { id: 16, name: 'UTC+01.00', code: '+01' } },
            { label: 'UTC+02.00', value: { id: 17, name: 'UTC+02.00', code: '+02' } },
            { label: 'UTC+03.00', value: { id: 18, name: 'UTC+03.00', code: '+03' } },
            { label: 'UTC+03.30', value: { id: 19, name: 'UTC+03.30', code: '+33' } },
            { label: 'UTC+04.00', value: { id: 20, name: 'UTC+04.00', code: '+04' } },
            { label: 'UTC+04.30', value: { id: 21, name: 'UTC+04.30', code: '+43' } },
            { label: 'UTC+05.00', value: { id: 22, name: 'UTC+05.00', code: '+05' } },
            { label: 'UTC+05.30', value: { id: 23, name: 'UTC+05.30', code: '+53' } },
            { label: 'UTC+05.45', value: { id: 24, name: 'UTC+05.45', code: '+54' } },
            { label: 'UTC+06.00', value: { id: 25, name: 'UTC+06.00', code: '+06' } },
            { label: 'UTC+06.30', value: { id: 26, name: 'UTC+06.30', code: '+63' } },
            { label: 'UTC+07.00', value: { id: 27, name: 'UTC+07.00', code: '+07' } },
            { label: 'UTC+08.00', value: { id: 28, name: 'UTC+08.00', code: '+08' } },
            { label: 'UTC+08.45', value: { id: 29, name: 'UTC+08.45', code: '+84' } },
            { label: 'UTC+09.00', value: { id: 30, name: 'UTC+09.00', code: '+09' } },
            { label: 'UTC+09.30', value: { id: 31, name: 'UTC+09.30', code: '+93' } },
            { label: 'UTC+10.00', value: { id: 32, name: 'UTC+10.00', code: '+10' } },
            { label: 'UTC+10.30', value: { id: 33, name: 'UTC+10.30', code: '+13' } },
            { label: 'UTC+11.00', value: { id: 34, name: 'UTC+01.00', code: '+11' } },
            { label: 'UTC+12.00', value: { id: 35, name: 'UTC+01.00', code: '+12' } },
            { label: 'UTC+12.45', value: { id: 36, name: 'UTC+01.00', code: '+24' } },
            { label: 'UTC+13.00', value: { id: 37, name: 'UTC+01.00', code: '+13' } },
            { label: 'UTC+14.00', value: { id: 38, name: 'UTC+01.00', code: '+14' } },
        ];
    }

    createQuestionSelect() {
        this.dropdownOptions2 = [
                { label: 'Where did you hear Babylon?', value: null },
                { label: 'Blogs', value: 'Blogs' },
                { label: 'Google Ads', value: 'google' },
                { label: 'Your Forum', value: 'prime-forum' },
                { label: 'Youtube', value: 'Youtube' },
                { label: 'Reddit', value: 'Reddit' },
                { label: 'Events', value: 'Events' },
                { label: 'Other', value: 'Other' }
            ];
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
                                    <h1>Nạp tiền vào tài khoản VETC để hoàn thành đăng ký</h1>
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
                                <p>Bạn phải có tài khoản VETC để có thể sử dụng các dịch vụ thu phí tự động.</p>
                            </div>
                            <div className="wizard-forms-wrapper p-grid p-nogutter">
                                <div className="p-col-12 p-md-6 wizard-forms">

                                    <label htmlFor="custtype" className="form-label">Loại khách hàng</label>
                                    <Dropdown id="custtype"
                                        options={this.dropdownCustTypes} value={this.state.dropdownCustType}
                                        onChange={event => this.setState({dropdownCustType: event.value})} />

                                    <label htmlFor="name" className="form-label">Họ và tên</label>
                                    <InputText id="name" onChange={(e) => this.setState({name: e.target.value})} />

                                    <label htmlFor="dob" className="form-label">Ngày sinh</label>
                                    <InputMask id="dob" mask="99/99/9999" value={this.state.dob} placeholder="31/12/2021" slotChar="dd/mm/yyyy" onChange={(e) => this.setState({dob: e.value})}></InputMask>

                                    <label htmlFor="idNo" className="form-label">Số CMND/CCCD</label>
                                    <InputText id="idNo" onChange={(e) => this.setState({idNo: e.target.value})}/>

                                    <label htmlFor="idIssueDate" className="form-label">Ngày cấp CMND/CCCD</label>
                                    <InputMask id="idIssueDate" mask="99/99/9999" value={this.state.idIssueDate} placeholder="31/12/2021" slotChar="dd/mm/yyyy" onChange={(e) => this.setState({idIssueDate: e.value})}></InputMask>

                                    <label htmlFor="idIssuePlace" className="form-label">Nơi cấp CMND/CCCD</label>
                                    <InputText id="idIssuePlace" onChange={(e) => this.setState({idIssuePlace: e.target.value})} />
                                </div>
                                <div className="p-col-12 p-md-6 wizard-forms">
                                    <label htmlFor="taxCode" className="form-label">MST</label>
                                    <InputText id="taxCode" onChange={(e) => this.setState({taxCode: e.target.value})} />

                                    <label htmlFor="taxEffectDate" className="form-label">Ngày hiệu lực MST</label>
                                    <InputMask id="taxEffectDate" mask="99/99/9999" value={this.state.taxEffectDate} placeholder="31/12/2021" slotChar="dd/mm/yyyy" onChange={(e) => this.setState({taxEffectDate: e.value})}></InputMask>

                                    <label htmlFor="phone" className="form-label">Số điện thoại</label>
                                    <InputText id="phone" onChange={(e) => this.setState({phone: e.target.value})}/>

                                    <label htmlFor="email" className="form-label">Email</label>
                                    <InputText id="email" onChange={(e) => this.setState({email: e.target.value})}/>

                                    <label htmlFor="plate" className="form-label">Biển số xe</label>
                                    <InputText id="plate" onChange={(e) => this.setState({plate: e.target.value})}/>

                                    <label htmlFor="area" className="form-label">Địa chỉ</label>
                                    <CascadeSelect id="area"  value={this.state.selectedCity1} options={this.cascadeSelectArea}  optionLabel={"cname"} optionGroupLabel={"name"} optionGroupChildren={['states', 'cities']}
                                    style={{minWidth: '14rem'}} placeholder={"Chọn địa chỉ"} onChange={event => this.setState({selectedCity1: event.value})}/>

                                    {/* <label htmlFor="timezone" className="form-label">Select Timezone</label>
                                    <Dropdown id="timezone" style={{ marginBottom: '10px' }}
                                        options={this.dropdownOptions} value={this.state.dropdownTime}
                                        onChange={event => this.setState({dropdownTime: event.value})} />

                                    <div className="calendar">
                                        <label htmlFor="birthdate" className="form-label"></label>
                                        <Calendar id="birthdate" appendTo={document.body} value={this.state.date}
                                            onChange={(e) => this.setState({date: e.value})} />
                                    </div>

                                    <label htmlFor="babylon" className="form-label">Where did you hear
                                        Babylon?</label>
                                    <Dropdown id="babylon" appendTo={document.body} style={{ marginBottom: '10px' }}
                                        options={this.dropdownOptions2} value={this.state.dropdownHear}
                                        onChange={event => this.setState({dropdownHear: event.value})} /> */}
                                </div>
                                <div className="wizard-button">
                                    <Button className="continue-button" label="TIẾP TỤC"
                                        onClick={() => this.setState({activeTab: 'tier'})} />
                                </div>
                            </div>
                        </div>

                        <div
                            className={classNames("wizard-card-content tier", { 'active-content': this.state.activeTab === 'tier' })}>
                            <div className="wizard-tier-cards p-grid">
                                <div className="p-col-12 p-md-4">
                                    <div
                                        className={classNames("wizard-tier-card beginner", { 'active-tier-card': this.state.activeCard === 'basic' })}
                                        onClick={() => this.setState({activeCard: 'basic'})}>
                                        <div className="wizard-tier-card-header">
                                            <img src={beginner}
                                                alt="babylon-layout" />
                                        </div>
                                        <div className="wizard-tier-card-content">
                                            <div className="title">
                                                <h1>Beginner</h1>
                                                <span>Starting from $5 per month</span>
                                            </div>
                                            <ul>
                                                <li className="active-list-item">
                                                    <i className="pi pi-check-circle"></i>
                                                    <p>Responsive</p>
                                                </li>
                                                <li>
                                                    <i className="pi pi-check-circle"></i>
                                                    <p>Push Notifications</p>
                                                </li>
                                                <li>
                                                    <i className="pi pi-check-circle"></i>
                                                    <p>7/24 Support</p>
                                                </li>
                                                <li>
                                                    <i className="pi pi-check-circle"></i>
                                                    <p>Unlimited Space</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-col-12 p-md-4">
                                    <div
                                        className={classNames("wizard-tier-card professional", { 'active-tier-card': this.state.activeCard === 'professional' })}
                                        onClick={() => this.setState({activeCard: 'professional'})}>
                                        <div className="wizard-tier-card-header">
                                            <img src={pro}
                                                alt="babylon-layout" />
                                        </div>
                                        <div className="wizard-tier-card-content">
                                            <div className="title">
                                                <h1>Professional</h1>
                                                <span>Starting from $10 per month</span>
                                            </div>
                                            <ul>
                                                <li className="active-list-item">
                                                    <i className="pi pi-check-circle"></i>
                                                    <p>Responsive</p>
                                                </li>
                                                <li className="active-list-item">
                                                    <i className="pi pi-check-circle"></i>
                                                    <p>Push Notifications</p>
                                                </li>
                                                <li>
                                                    <i className="pi pi-check-circle"></i>
                                                    <p>7/24 Support</p>
                                                </li>
                                                <li>
                                                    <i className="pi pi-check-circle"></i>
                                                    <p>Unlimited Space</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-col-12 p-md-4">
                                    <div
                                        className={classNames("wizard-tier-card enterprise", { 'active-tier-card': this.state.activeCard === 'enterprise' })}
                                        onClick={() => this.setState({activeCard: 'enterprise'})}>
                                        <div className="wizard-tier-card-header">
                                            <img src={enterprise}
                                                alt="babylon-layout" />
                                        </div>
                                        <div className="wizard-tier-card-content">
                                            <div className="title">
                                                <h1>Enterprise</h1>
                                                <span>Starting from $20 per month</span>
                                            </div>
                                            <ul>
                                                <li className="active-list-item">
                                                    <i className="pi pi-check-circle"></i>
                                                    <p>Responsive</p>
                                                </li>
                                                <li className="active-list-item">
                                                    <i className="pi pi-check-circle"></i>
                                                    <p>Push Notifications</p>
                                                </li>
                                                <li className="active-list-item">
                                                    <i className="pi pi-check-circle"></i>
                                                    <p>7/24 Support</p>
                                                </li>
                                                <li className="active-list-item">
                                                    <i className="pi pi-check-circle"></i>
                                                    <p>Unlimited Space</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="wizard-button">
                                <Button className="continue-button" label="TIẾP TỤC"
                                    onClick={() => this.setState({activeTab: 'payment'})} />
                            </div>
                        </div>

                        <div
                            className={classNames("wizard-card-content payment", { 'active-content': this.state.activeTab === 'payment' })}>
                            <div className="wizard-forms-wrapper">
                                <div className="wizard-forms ">
                                    <div className="customPanel p-grid p-nogutter">
                                        <div className="p-col-1 p-lg-1 p-md-1" style={{ lineHeight: '2em' }}>
                                            <RadioButton inputId="credit" name="group1" value="Credit"
                                                onChange={(e) => this.setState({group1: e.value})}
                                                checked={this.state.group1 === 'Credit'} />
                                        </div>
                                        <div className="p-col-11 p-lg-5 p-md-5">
                                            <div className="credits">
                                                <img src={mastercard}
                                                    alt="babylon-layout" />
                                                <img src={visa}
                                                    alt="babylon-layout" />
                                                <img src={amex}
                                                    alt="babylon-layout" />
                                            </div>
                                        </div>
                                        <div className="p-col-1 p-lg-1 p-md-1" style={{ lineHeight: '2em' }}>
                                            <RadioButton inputId="paypal" name="group1" value="Paypal"
                                                onChange={(e) => this.setState({group1: e.value})}
                                                checked={this.state.group1 === 'Paypal'} />
                                        </div>
                                        <div className="p-col-11 p-lg-5 p-md-5">
                                            <div className="paypal">
                                                <img src={paypal}
                                                    alt="babylon-layout" />
                                            </div>
                                        </div>
                                    </div>

                                    <label htmlFor="holderName" className="form-label">Cardholder Name</label>
                                    <InputText id="holderName" type="text" />

                                    <div className="numbers p-grid">
                                        <div className="p-col-12 p-md-6">
                                            <label htmlFor="number" className="form-label">Cardholder Number</label>
                                            <InputMask id="number" mask="9999-9999-9999-9999"
                                                value={this.state.val1}
                                                onChange={(e) => this.setState({val1: e.value})} />
                                        </div>
                                        <div className="p-col-6 p-md-3">
                                            <label htmlFor="date" className="form-label">Date</label>
                                            <InputMask id="date" mask="99/99" value={this.state.val2}
                                                onChange={(e) => this.setState({val2: e.value})} />
                                        </div>
                                        <div className="p-col-6 p-md-3">
                                            <label htmlFor="ccv" className="form-label">CCV</label>
                                            <InputMask id="ccv" mask="999" value={this.state.val3}
                                                onChange={(e) => this.setState({val3: e.value})} />
                                        </div>
                                    </div>

                                    <div style={{ marginTop: '24px' }}>
                                        <Checkbox inputId="cb1" checked={this.state.checked}
                                            onChange={e => this.setState({checked: e.checked})} />
                                        <label htmlFor="cb1" className="p-checkbox-label p-ml-2">Save credit card
                                            information for future usage</label>
                                    </div>
                                </div>
                            </div>

                            <div className="wizard-button">
                                <div
                                    className={classNames('order-summary order-default', { 'selected-order': this.state.activeCard === '' })}>
                                    <p>ORDER SUMMARY</p>
                                    <h1>$00.00</h1>
                                    <span>Please select one tier.</span>
                                </div>
                                <div
                                    className={classNames('order-summary order-beginner', { 'selected-order': this.state.activeCard === 'basic' })}>
                                    <p>ORDER SUMMARY</p>
                                    <h1>$5.00</h1>
                                    <span>Babylon Beginner Membership.</span>
                                </div>
                                <div
                                    className={classNames('order-summary order-professional', { 'selected-order': this.state.activeCard === 'professional' })}>
                                    <p>ORDER SUMMARY</p>
                                    <h1>$10.00</h1>
                                    <span>Babylon Professional Membership.</span>
                                </div>
                                <div
                                    className={classNames('order-summary order-enterprise', { 'selected-order': this.state.activeCard === 'enterprise' })}>
                                    <p>ORDER SUMMARY</p>
                                    <h1>$20.00</h1>
                                    <span>Babylon Enterprise Membership.</span>
                                </div>
                                <Button type="button" label="COMPLETE ORDER" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        }
}