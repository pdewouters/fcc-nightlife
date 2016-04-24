import React, { Component, PropTypes } from 'react'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        this.setState({active: !this.state.active})
        this.props.onHandleClick(this.state.active)
    }
    
    render() {
        return (
            <div>
            {
                this.state.active
                ? <button
                onClick={this.handleClick}
                type="button"
                className="btn btn-primary active"
                data-toggle="button"
                aria-pressed="true"
                disabled={this.props.authenticated ? '' : 'disabled'}>Going</button>
                : <button
                onClick={this.handleClick}
                type="button"
                className="btn btn-primary"
                disabled={this.props.authenticated ? '' : 'disabled'}>Going</button>
            }
            </div>  
        )
    }
}

Button.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    onHandleClick: PropTypes.func.isRequired
}

export default Button