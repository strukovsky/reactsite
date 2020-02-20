import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from "react-bootstrap/Card";
import CardTitle from 'react-bootstrap/Card'


export default class BasketItem extends Component{
    constructor(props) {
        super(props);
    }

    render()
    {
        return(
            <Card>
                <CardTitle>{this.props.title}</CardTitle>
                <p>{this.props.count} шт.</p>
            </Card>
        )
    }
}