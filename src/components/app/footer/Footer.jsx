import React from "react";
import {Link} from 'react-router-dom';
import './Footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="login_footer">
                        <Link to="/">Honey Comb</Link>
                        <div className="footer-links">
                            <ul>
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Signup</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </footer>

        )
    }
}