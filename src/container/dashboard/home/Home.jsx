import React from 'react';
import {windowTitle} from "../../../actions/app";
import './Home.css';

export default class Dashboard extends React.Component {
    componentDidMount() {
        windowTitle("Honey Comb | Dashboard");
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
                                        <h1 className="widget_heading_lg">Hello</h1>
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
