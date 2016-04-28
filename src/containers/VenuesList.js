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
        
        return (
            <VenueItemContainer
            key={venueData.venue.id}
            venueData={venueData} />
        )
    }
    
    render() {
        return (
            <div>
            {
                this.props.isFetchingVenues
                ? 'Loading'
                : this.props.venues.map((venue) => this.renderVenue(venue))
            }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isFetchingVenues: state.venues.isPending,
        venues: state.venues.items,
        message: state.auth.message
    }
}

export default connect(mapStateToProps, actions)(VenuesList)
