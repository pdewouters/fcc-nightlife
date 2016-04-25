import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import VenueItem from '../components/VenueItem'

class VenueItemContainer extends Component {

    render() {
        return (
            <VenueItem authenticated={this.props.authenticated} venueData={this.props.venueData} attendees={this.props.attendees} />
        )
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated }    
}

export default connect(mapStateToProps)(VenueItemContainer)
