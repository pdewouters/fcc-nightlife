import React, { Component } from 'react'
import { connect } from 'react-redux'
import VenueItem from '../components/VenueItem'
import _ from 'lodash'
class VenueItemContainer extends Component {

    render() {
        const venueObj  = _.find(this.props.venuesAttendees, {venue: this.props.venueData.venue.id})
        const attendees = venueObj ? venueObj.going : []
        return (
            <VenueItem
            authenticated={this.props.authenticated}
            venueData={this.props.venueData}
            attendees={attendees}
            isPending={this.props.isPending} />
        )
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        venuesAttendees: state.attendees.items,
        isPending: state.user.isPending
    }    
}

export default connect(mapStateToProps)(VenueItemContainer)
