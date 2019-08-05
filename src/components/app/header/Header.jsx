import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-custom">
                        <Link className="navbar-brand" to="/">Honey Comb</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/home">Home<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="btn btn-primary" to="/signup">Signup</Link>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>
            </header>

        )
    }
}