import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './Label.css';

class Label extends Component {
    render() {
        return (
            <label htmlFor={this.props.htmlFor}>
                {this.props.children}
            </label>
        )
    }
}
export default withRouter(connect(null)(Label))