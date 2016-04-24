import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import VenueItem from '../components/VenueItem'

class VenueItemContainer extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    
    componentDidMount() {
        
    }
    
    handleClick() {
        this.props.addUserToVenue(this.props.venueData.venue.id)
    }
    
    render() {

        return (
            <VenueItem authenticated={this.props.authenticated} venueData={this.props.venueData} venue={this.props.venue} onHandleClick={this.handleClick} going={this.props.going} />
        )
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated, venue: state.venue }    
}

VenueItem.propTypes = {
    venueData: PropTypes.object.isRequired,
    venue: PropTypes.object.isRequired    
}

export default connect(mapStateToProps, actions)(VenueItemContainer)
