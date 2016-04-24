import React from 'react'

const VenueItem = (props) => {
        const photoObj = props.venueData.venue.featuredPhotos ? props.venueData.venue.featuredPhotos.items[0] : ''
        const photoSrc = photoObj ? `${photoObj.prefix}128x128${photoObj.suffix}` : ''
        return(
            <div className="media">
                <a className="media-left" href="#">
                    <img className="media-object" src={photoSrc} alt={props.venueData.venue.name} />
                </a>
                <div className="media-body">
                    <h4 className="media-heading">{props.venueData.venue.name}</h4>
                    <div>{props.venueData.tips ? props.venueData.tips[0].text : 'no reviews yet'}</div>
                    <button onClick={props.onHandleClick} type="button" className="btn btn-primary" disabled={props.authenticated ? '' : 'disabled'}>Going</button>
                    <p>Going: {props.going ? props.going.length : 0}</p>
                </div>
            </div>   
	    )

}

export default VenueItem
