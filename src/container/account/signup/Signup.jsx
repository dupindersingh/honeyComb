import React from 'react';
// import {Link} from 'react-router-dom';
import './Signup.css';
import Button from "../../../components/app/button/Button";
import Label from "../../../components/app/label/Label";
import Input from "../../../components/app/input/Input";
import {windowTitle} from "../../../actions/app";

export default class Signup extends React.Component {
    componentDidMount() {
        windowTitle("Honey Comb | Signup");
    }

    render() {
        return (
            <main>
                <div className="container">
                    <div className="row">
                        <div className="offset-xl-1 col-xl-10 col-lg-12">
                            <div className="full_page_height">
                                <div className="widget_account">
                                    <div className="reg_left">
                                        <form className="form-signin">
                                            <h1 className="widget_heading_lg">Create a new account</h1>
                                            <div
                                                className="alert alert-success-outline alert-dismissible alert_icon fade show"
                                                role="alert">
                                                <div className="d-flex align-items-center">
                                                    <div className="alert-icon-col">
                                                        <span className="fa fa-warning"></span>
                                                    </div>
                                                    <div className="alert_text">
                                                        You have been successfully registered
                                                    </div>
                                                    <a href="#" className="close alert_close" data-dismiss="alert"
                                                       aria-label="close"><i className="fa fa-close"></i></a>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <Label>Full Name</Label>
                                                <Input type="email" className="form-control"
                                                       placeholder="Enter your full name"/>
                                            </div>
                                            <div className="form-group">
                                                <Label>Email Address</Label>
                                                <Input type="password" className="form-control"
                                                       placeholder="Enter your email address"/>
                                            </div>
                                            <div className="form-group">
                                                <Label>Create Password</Label>
                                                <Input type="password" className="form-control"
                                                       placeholder="Create a secure password"/>
                                            </div>
                                            <div className="form-group">
                                                <div className="agreement">By signing up, I agree to the <a
                                                    href="javascript:;">Terms</a> & <a href="javascript:;">Privacy
                                                    Policy</a></div>
                                            </div>
                                            <div className="form-bottom">
                                                <div className="d-flex justify-content-end">
                                                    <Button className="btn btn-primary btn-icon-right" type="submit">
                                                        <span>Continue</span> <img className="arrow"
                                                                                   src={require("../../../images/btn_arrow.svg")}/></Button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="reg_right">
                                        <h2>Connecting the world's diverse community</h2>
                                        <span></span>
                                        <blockquote>"Honeycomb allows me to learn and grow from like-minded people
                                            around the world in a <b>safe</b> and <b>non-judgmental</b> envionment!"
                                        </blockquote>
                                        <div className="block_fig">
                                            <figure>
                                                <img src={require("../../../images/user.png")}/>
                                            </figure>
                                            <figcaption>Fadia Khan</figcaption>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}