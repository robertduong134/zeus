import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import {Growl} from 'primereact/growl';
import { Form } from "reactstrap";
import AuthService from "../service/AuthService";


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            checked: false,
            username: '',
            password: ''
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    showError(detailMessage) {
        this.growl.show({severity: 'error', summary: 'Error Message', detail: detailMessage});
    }

    validateForm() {
        if (this.state.username === undefined || this.state.username === '') {
            this.showError('Username field is required!');
            return false;
        }
        if (this.state.password === undefined || this.state.password === '') {
            this.showError('Password field is required!');
            return false;
        }
        return true;
    }

    handleLogin(e) {
        e.preventDefault();

        if (!this.validateForm()) {
            return
        } else {
            AuthService.login(this.state.username, this.state.password).then(
                () => {
                    this.props.history.push("/profile");
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.showError(resMessage);
                }
            );
        }


    }

    render() {
        return (
            <div className="login-body">
                <Growl ref={(el) => this.growl = el} />
                <div className="card login-panel ui-fluid">
                    <div className="login-panel-content">
                        <div className="p-grid">
                            <Form onSubmit={this.handleLogin} >
                                <div className="p-col-12 p-sm-6 p-md-6 logo-container">
                                    <img src="assets/layout/images/logo.svg" alt="sigma" />
                                    <span className="guest-sign-in">Welcome, please use the form to sign-in VETC network</span>
                                </div>
                                <div className="p-col-12 username-container">
                                    <label>Username</label>
                                    <div className="login-input">
                                        <InputText name="username" id="input" type="text" value={this.state.username} onChange={this.onChangeUsername} />
                                    </div>
                                </div>
                                <div className="p-col-12 password-container">
                                    <label>Password</label>
                                    <div className="login-input">
                                        <InputText name="password" type="password" value={this.state.password} onChange={this.onChangePassword} />
                                    </div></div><div className="p-col-12 p-sm-6 p-md-6 rememberme-container">
                                    <Checkbox checked={this.state.checked} onChange={e => this.setState({ checked: e.checked })} />
                                    <label> Remember me</label>
                                </div>
                                <div className="p-col-12 p-sm-6 p-md-6 forgetpassword-container">
                                    <a href="\" className="forget-password">Forget Password</a>
                                </div>
                                <div className="p-col-12 p-sm-6 p-md-6">
                                    <Button label="Sign In" icon="pi pi-user" />
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}