import React, { Component } from 'react'

export default class Navbar extends Component {

    state ={
        isOpen: false
    }
    handleToggle= () =>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {

        return (
            <div className="nav-bar">
                <a className="nav-title">Haleii</a>
                <div className="nav-items">
                    <a>Service</a>
                    <a>Company</a>
                    <a>Support</a>
                </div>
            </div>
        )
    }
}
