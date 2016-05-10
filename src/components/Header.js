import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Header extends Component {
    constructor(props){
        super(props)
    }
    renderLinks() {
        if(this.props.authenticated) {
            return <li className="nav-item">
                <Link className="nav-link" to="/signout">Sign Out</Link>
            </li>
        } else {
            return [
                <li className="nav-item" key={1}>
                    <Link className="nav-link" to="/signin">Sign In</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
            ]
        }
    }
    
    render() {
        return (
            <nav className="navbar navbar-light">
            <Link to="/" className="navbar-brand">Home</Link>
                <ul className="nav navbar-nav">
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}

Header.propTypes = {
    authenticated: PropTypes.bool.isRequired    
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated
    }    
}

// null bc not interested in state
export default connect(mapStateToProps)(Header)
