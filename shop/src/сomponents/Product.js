import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import CardHeader from "react-bootstrap/Card"
import CardBody from "react-bootstrap/Card"
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Cookie from "./Cookie";





export default class Product extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render()
    {
        return(
            <div className="Product">
                <Card>
                    <CardHeader>{this.props.title}</CardHeader>
                    <CardBody className="ProductDescription">{this.props.description}</CardBody>
                    <Button variant="primary" onClick={() => {this.setState({show: true})}}>Купить за {this.props.price}</Button>
                </Card>
                <Modal show={this.state.show} onHide={() => {this.setState({show: false})}} dialogClassName="modal-90w">
                    <ModalHeader>Сколько добра?</ModalHeader>
                    <InputGroup>
                        <FormControl
                            placeholder="9" id={this.props.title}/>
                            <Button onClick={() => {
                                let count = document.getElementById(this.props.title).value;
                                Cookie.addToBasket(this.props.title, count);
                                this.setState({show: false})

                            }}>Покупаю!</Button>
                    </InputGroup>


                </Modal>
            </div>
       );
    }
}