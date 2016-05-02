import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import classnames from 'classnames'

class Button extends Component {
    constructor(props) {
        super(props)

        this.state = {
            disabled: !this.props.authenticated,
            active: this.props.initialActive
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {

        if(this.state.active) {
            this.props.removeUserFromVenue(this.props.venueId)

        } else {
            this.props.addUserToVenue(this.props.venueId)  
        }
        this.setState({active: !this.state.active})
    }
    
    render() {
       
        const disabled = this.state.disabled || this.props.isPending ? ' disabled' : ''

        const btnClass = classnames({
            'btn': true,
            'btn-primary': true,
            'active': this.props.initialActive
        })
        return (
            <button
            type="button"
            data-toggle="button"
            aria-pressed={this.state.active}
            className={btnClass}
            onClick={this.handleClick}
            disabled={disabled}>Going</button>
        )
    }
}

Button.propTypes = {
    authenticated: PropTypes.bool.isRequired,
}

export default connect(null, actions)(Button)