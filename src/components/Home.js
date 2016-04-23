import React from 'react'
import VenuesList from '../containers/VenuesList'
import SearchBarContainer from '../containers/SearchBarContainer'

class Home extends React.Component {
    render(){
        return(
            <div>
                <SearchBarContainer />
                <VenuesList />
            </div>
	    )
    }
}
export default Home