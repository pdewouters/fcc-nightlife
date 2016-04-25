import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import VenueItemContainer from './VenueItemContainer'
import * as actions from '../actions'
import _ from 'lodash'

class VenuesList extends Component {
    constructor(props) {
        super(props)
        this.renderVenue = this.renderVenue.bind(this)
    }
    renderVenue(venueData) {
        
        const venueObj  = _.find(this.props.allVenues, {venue: venueData.venue.id})
        const attendees = venueObj ? venueObj.going : []
        return (
            <VenueItemContainer
            key={venueData.venue.id}
            venueData={venueData}
            attendees={attendees} />
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

function mapStateToProps(state) {
    return { venues: state.venues, message: state.auth.message, allVenues: state.allVenues.data }
}

export default connect(mapStateToProps, actions)(VenuesList)
