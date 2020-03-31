import React, { Component } from 'react'
import Card from "./CardUI"

import img from '../../images/girl-resize.jpg'
import img2 from "../../images/money-resize.jpg"
import img3 from "../../images/house-resize.jpg"

export default class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex fustify-content center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img} title="discover"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="save"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="value"/>
                    </div>
                </div>
            </div>
        )
    }
}
