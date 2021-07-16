import React, { Component } from 'react';
import { FaExpand } from 'react-icons/fa';

export default class Header extends Component {
    render() { 
        return (
            <div className={this.props.divClass}>
                <h7 className={this.props.hClass} style={{ fontWeight: "bold" }}>{this.props.title}</h7>
                <i className={this.props.iClass} onClick={this.props.fullScreen}><FaExpand /></i>
            </div>
        );
    }
};