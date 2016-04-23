import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Footer extends Component {
    render() {
        return (
        <footer>
            <div className="container">
            Copyright Chocolate Moose 2016
            </div>
        </footer>
        )
    }
}

export default Footer
