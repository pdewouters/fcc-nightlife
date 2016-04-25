import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: !this.props.authenticated,
            active: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    componentWillMount() {
                    
        const user = localStorage.getItem('currentuser')
        if(this.props.attendees.indexOf(user) !== -1){
            this.setState({active: true})
        } else (
            this.setState({active: false})
        )
        
    }
    
    handleClick() {
        this.setState({active: !this.state.active}, () => {
            if(this.state.active) {
                this.props.addUserToVenue(this.props.venueId)
            } else {
                this.props.removeUserFromVenue(this.props.venueId)
            }
        })

        this.props.fetchAllVenues()
    }
    
    render() {  
        const disabled = this.state.disabled ? ' disabled' : ''
        return (
            <button onClick={this.handleClick} disabled={disabled}>Going</button> 
        )
    }
}

function mapStateToProps(state) {
    return { allVenues: state.allVenues.data }    
}

Button.propTypes = {
    authenticated: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, actions)(Button)