import React from 'react';
import './ForgotPassword.css';
import {windowTitle} from "../../../actions/app";
import Label from "../../../components/app/label/Label";
import Input from "../../../components/app/input/Input";
import Button from "../../../components/app/button/Button";

export default class ForgotPassword extends React.Component {
    componentDidMount() {
        windowTitle("Honey Comb | Forgot Password");
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
                                            <h1 className="widget_heading_lg">Forgot password?</h1>
                                            <div className="form-group">
                                                Enter your email below and we’ll reset your password.
                                            </div>
                                            <div className="form-group">
                                                <Label>Email Address</Label>
                                                <Input type="password" className="form-control"
                                                       placeholder="Enter your email address"/>
                                            </div>
                                            <div className="form-bottom">
                                                <div className="d-flex justify-content-end">
                                                    <Button className="btn btn-primary btn-edge" type="submit"><span>Reset Password</span>
                                                        <img className="arrow" src={require("../../../images/btn_arrow.svg")}/></Button>
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
