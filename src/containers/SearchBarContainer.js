import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

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
        
        this.props.fetchVenues(this.state.term, this.props.authenticated)
        
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

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated
    }    
}

// null bc not interested in state
export default connect(mapStateToProps, actions)(SearchBarContainer)