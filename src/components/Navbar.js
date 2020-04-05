import React, { Component } from 'react'
import { FaAlignRight } from "react-icons/fa";

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
                    <a href="#features">Features</a>
                    <a>Team</a>
                    <a href="#products">Products</a>
                    <button className="nav-btn" onclick={this.handleToggle}>
                        <FaAlignRight className="nav-icon" />
                    </button>
                </div>
            </div>
        )
    }
}
