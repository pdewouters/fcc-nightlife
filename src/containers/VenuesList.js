import React, { Component } from 'react'
import { connect } from 'react-redux'
import VenueItem from './VenueItem'
import * as actions from '../actions'

class VenuesList extends Component {
    
    renderVenue(venueData) {

        return (
            <VenueItem key={venueData.venue.id} venueData={venueData} />
        )
    }
    
    render() {
        return (
            <div>
            {
                this.props.venues.isPending
                ? 'Loading'
                : this.props.venues.map((venue) => this.renderVenue(venue))
            }
            </div>
        )
    }
}

function mapStateToProps({ venues, auth, venue }) {
    return { venues, message: auth.message }
}

export default connect(mapStateToProps, actions)(VenuesList)
