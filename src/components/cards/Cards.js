import React, { Component } from 'react'
import Card from "./CardUI"

import img from '../../images/photo-of-person-in-black-sweater-and-blue-denim-jeans-3759076.jpg'
import img2 from "../../images/money-2724248_1280.jpg"
import img3 from "../../images/home-real-estate-106399.jpg"

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
