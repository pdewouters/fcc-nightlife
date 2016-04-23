import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchVenues } from '../actions'

class SearchBarContainer extends Component {
    constructor(props) {
        super(props)
        
        this.state = { term: ''}
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    
    onInputChange(event) {
        this.setState({term: event.target.value})
    }
    
    onFormSubmit(event){
        event.preventDefault()
        
        // it is a prop thx to mapDispatchToProps bindActionCreators
        // call action creator
        this.props.fetchVenues(this.state.term)   
        this.setState({term: ''})
    }
    
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Warrington, Cheshire"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchVenues }, dispatch)
}

// null bc not interested in state
export default connect(null, mapDispatchToProps)(SearchBarContainer)