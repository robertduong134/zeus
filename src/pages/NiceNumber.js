import React, { Component } from 'react';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import 'primeflex/primeflex.css';

export default class NiceNumber extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 1
        };

        this.items = [
            {
                label: 'Chọn số đẹp',
            },
            {
                label: 'Thông tin liên hệ',
            },
            {
                label: 'Nạp tiền',
            }
        ];
    }

    render() {
        return (
            <div className="wrapper">
                <Toast ref={(el) => { this.toast = el }}></Toast>
                <div className="p-grid">
                    <div className="p-col-12 p-md-3">
                        1
                    </div>
                    <div className="p-col-12 p-md-9">
                        <div className="card">
                            <h5>Đăng ký tài khoản số đẹp VETC</h5>
                            <Steps model={this.items} />
                            <label htmlFor="accountNo">Số tài khoản</label>
                            <InputText id="accountNo"></InputText>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}