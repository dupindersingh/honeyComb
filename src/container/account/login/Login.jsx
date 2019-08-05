import React from 'react';
import './Login.css';
import {windowTitle} from "../../../actions/app";
import Input from "../../../components/app/input/Input";
import Label from "../../../components/app/label/Label";
import Button from "../../../components/app/button/Button";

export default class Login extends React.Component {
    componentDidMount() {
        windowTitle("Honey Comb | Login");
    }
    render() {
        return (
            <main>
                <div className="container">
                    <div className="row">
                        <div className="offset-xl-1 col-xl-10 col-lg-12">
                            <div className="full_page_height">
                                <div className="widget_account">
                                    <div className="reg_full">
                                        <form className="form-signin">
                                            <h1 className="widget_heading_lg">Log into Honeycomb</h1>
                                            <div
                                                className="alert alert-danger-outline alert-dismissible alert_icon fade show"
                                                role="alert">
                                                <div className="d-flex align-items-center">
                                                    <div className="alert-icon-col">
                                                        <span className="fa fa-warning"></span>
                                                    </div>
                                                    <div className="alert_text">
                                                        Email address is required
                                                    </div>
                                                    <a href="#" className="close alert_close" data-dismiss="alert"
                                                       aria-label="close"><i className="fa fa-close"></i></a>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Email Address</label>
                                                <Input type="password" className="form-control"
                                                       placeholder="Enter your email address"/>
                                            </div>
                                            <div className="form-group">
                                                <Label>Create Password</Label>
                                                <Input type="password" className="form-control"
                                                       placeholder="Create a secure password"/>
                                            </div>
                                            <div className="form-group">
                                                <div className="forgot_password">
                                                    <div className="form-check">
                                                        <Input type="checkbox"
                                                               className="form-check-input form-check-custom"
                                                               id="terms"/>
                                                            <Label className="form-check-label" htmlFor="terms">Remember
                                                                me</Label>
                                                    </div>
                                                    <a href="forgot_password.html">Forgot password?</a>
                                                </div>
                                            </div>
                                            <div className="form-bottom">
                                                <div className="d-flex justify-content-end">
                                                    <Button className="btn btn-primary btn-icon-right m-loader"
                                                            type="submit"><span>Continue</span> <img className="arrow"
                                                                                                     src={require("../../../images/btn_arrow.svg")}/>
                                                    </Button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
