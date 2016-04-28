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
            'active': this.state.active
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

function mapStateToProps(state) {
    return {
        allVenues: state.venues.data,
        isPending: state.user.isPending
    }    
}

Button.propTypes = {
    authenticated: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, actions)(Button)