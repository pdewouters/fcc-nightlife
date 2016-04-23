import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class VenueItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    
    componentDidMount() {
        this.props.fetchUsersForVenue(this.props.venueData.venue.id)
    }
    
    handleClick() {
        this.props.addUserToVenue(this.props.venueData.venue.id)
    }
    
    render() {
        const photoObj = this.props.venueData.venue.featuredPhotos ? this.props.venueData.venue.featuredPhotos.items[0] : ''
        const photoSrc = photoObj ? `${photoObj.prefix}128x128${photoObj.suffix}` : ''

        return (
            <div className="media">
                <a className="media-left" href="#">
                    <img className="media-object" src={photoSrc} alt={this.props.venueData.venue.name} />
                </a>
                <div className="media-body">
                    <h4 className="media-heading">{this.props.venueData.venue.name}</h4>
                    <div>{this.props.venueData.tips ? this.props.venueData.tips[0].text : 'no reviews yet'}</div>
                    <button onClick={this.handleClick} type="button" className="btn btn-primary" disabled={this.props.authenticated ? '' : 'disabled'}>Going</button>
                    <p>Going: {this.props.venue.going ? this.props.venue.going.length : 0}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated, venue: state.venue }    
}

export default connect(mapStateToProps, actions)(VenueItem)
