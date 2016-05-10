import React from 'react'
import Button from './Button'

const VenueItem = (props) => {
        const photoObj = props.venueData.venue.featuredPhotos ? props.venueData.venue.featuredPhotos.items[0] : ''
        const photoSrc = photoObj ? `${photoObj.prefix}128x128${photoObj.suffix}` : ''
        const user = localStorage.getItem('currentuser')
        let isAttending = props.attendees.indexOf(user) !== -1
        return(
            <div className="media">
                <a className="media-left" href="#">
                    <img className="media-object" src={photoSrc} alt={props.venueData.venue.name} />
                </a>
                <div className="media-body">
                    <h4 className="media-heading">{props.venueData.venue.name}</h4>
                    <div>{props.venueData.tips ? props.venueData.tips[0].text : 'no reviews yet'}</div>
                    <Button
                    venueId={props.venueData.venue.id}
                    onHandleClick={props.onHandleClick}
                    authenticated={props.authenticated}
                    attendees={props.attendees}
                    initialActive = {isAttending}
                    />
                    <p>Attendees: {props.attendees ? props.attendees.length : 0}</p>
                </div>
            </div>   
        )

}

export default VenueItem
