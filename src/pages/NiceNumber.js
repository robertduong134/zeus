import React, { Component } from 'react';
import { Steps } from 'primereact/steps';
import { InputText } from 'primereact/inputtext';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';

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
            <div className="container">

                <div class="container_sidebar">
                    ĐĂNG KÝ TÀI KHOẢN SỐ ĐẸP VETC
                </div>

                <div class="container_main">
                    <div className="steps">
                        <div className="header">
                            <Steps model={this.items} />
                        </div>
                        <div className="content">
                            <div className="step-1">
                                <div className="p-field">
                                    <h3>Bước 1: Chọn số đẹp</h3>
                                </div>
                                <div className="p-field p-grid">
                                    <label htmlFor="firstname3" className="p-col-fixed" style={{width:'100px'}}>Số tài khoản</label>
                                    <div className="p-col">
                                        <InputText id="firstname3" type="text"/>
                                    </div>
                                </div>
                                <div className="p-field p-grid">
                                    <label htmlFor="lastname3" className="p-col-fixed" style={{width:'100px'}}>Mã giới thiệu</label>
                                    <div className="p-col">
                                        <InputText id="lastname3" type="text"/>
                                    </div>
                                </div>
                                <div className="p-field">
                                    <Button label="Tiếp theo"></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        );
    }
}