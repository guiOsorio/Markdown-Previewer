import React, { Component } from 'react';

class Text extends Component {
    render() { 
        return (
            <textarea
                type="text" 
                value={this.props.value} 
                className={this.props.class}
                onClick={this.props.handleClick}
                onChange={this.props.onChange}
                placeholder="Type and see magic happen"
            ></textarea>
        );
    }
}
 
export default Text;