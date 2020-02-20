import React, {Component} from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container";
import Cookies from 'js-cookie'
import BasketItem from "./BasketItem";
import FormControl from "react-bootstrap/FormControl";
import Toast from "react-bootstrap/Toast";
import axios from 'axios'
import Cookie from "./Cookie";



export default class Basket extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showBasket: false,
            showOrder: false,
        };


    }

    render() {
        let obj = Cookie.getBasket();
        let components = <div/>
        if (obj) {
            components =
                obj.data.map(item => <BasketItem key={item.id} title={item.title} count={item.count}/>)

        }


        return (
            <div>
                <Button variant="primary" onClick={
                    () => {
                        this.setState({showBasket: true})
                    }
                }>
                    Корзина
                </Button>

                <Modal dialogClassName="modal-90w" show={this.state.showBasket} onHide={
                    () => {
                        this.setState({showBasket: false})
                    }}>
                    <ModalHeader>
                        Корзина. Тут ваши товары. Ы.
                    </ModalHeader>

                    <ModalBody>
                        <Container id="basket-container">{components}</Container>

                        <Button onClick={() => {
                            this.setState({showBasket:false});
                            this.setState({showOrder:true});

                        }}>Делаю Заказ!</Button>
                    </ModalBody>
                </Modal>

                <Modal dialogClassName="modal-90w" show={this.state.showOrder} onHide={
                    () => {
                        this.setState({showOrder: false})
                    }}>
                    <ModalHeader>
                        Заказ почти почти сделан, поздравляем!
                    </ModalHeader>
                    <ModalBody>
                        <FormControl placeholder="Ваше имя" id="name"/>
                        <FormControl placeholder="Ваш адрес" id="address"/>
                        <FormControl placeholder="Ваш телефон" id="telephone"/>
                        <Button onClick={() => {

                            let name = document.getElementById("name").value;
                            let address = document.getElementById("address").value;
                            let telephone = document.getElementById("telephone").value;
                            let q = {
                                name: name,
                                address: address,
                                telephone: telephone,
                                order: JSON.stringify(obj.data)
                            };

                            axios(
                                {
                                    method: 'post',
                                    url: 'http://localhost:8000/api/v1/order/',
                                    data: q,
                                    datatype: 'json',
                                    contentType: 'application/json',
                                  /*  headers: {
                                       // "Authorization": "Basic Ym9ic2Vzc2lvbjE6czNjcmV0",
                                        "Access-Control-Allow-Origin": "*",
                                        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                                        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
                                    }*/
                                }
                            )
                            ;
                        }}>Все, готово!</Button>
                    </ModalBody>

                </Modal>
            </div>);
    }
}