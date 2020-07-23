import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            checked: false
        };
    }

    render() {
        return (
        <div className="login-body">
            <div className="card login-panel ui-fluid">
                <div className="login-panel-content">
                    <div className="p-grid">
                        <div className="p-col-12 p-sm-6 p-md-6 logo-container">
                            <img src="assets/layout/images/logo.svg" alt="sigma" />
                            <span className="guest-sign-in">Welcome, please use the form to sign-in VETC network</span>
                        </div>
                        <div className="p-col-12 username-container">
                            <label>Username</label>
                            <div className="login-input">
                                <InputText id="input" type="text" />
                            </div>
                        </div>
                        <div className="p-col-12 password-container">
                            <label>Password</label>
                            <div className="login-input">
                                <InputText type="password" />
                            </div></div><div className="p-col-12 p-sm-6 p-md-6 rememberme-container">
                            <Checkbox checked={this.state.checked} onChange={e => this.setState({ checked: e.checked })} />
                            <label> Remember me</label>
                        </div>
                        <div className="p-col-12 p-sm-6 p-md-6 forgetpassword-container">
                            <a href="\" className="forget-password">Forget Password</a>
                        </div>
                        <div className="p-col-12 p-sm-6 p-md-6">
                            <Button label="Sign In" icon="pi pi-user" onClick={() => { window.location = "#" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}