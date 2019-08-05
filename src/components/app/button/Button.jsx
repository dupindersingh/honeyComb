import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './Button.css';

class Button extends Component {
    render() {
        return (
            <button
                type={this.props.type}
                onClick={this.props.onClick}
                tabIndex={this.props.tabIndex}
                disabled={this.props.disabled}
                aria-label={this.props.ariaLabel}
                id={this.props.id}
                className={this.props.className}>
                {this.props.children}
            </button>
        )
    }
}
export default withRouter(connect(null)(Button))