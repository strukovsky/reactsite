import React, {Component} from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
export default class About extends Component{


    render() {
        return(
            <Container className="text-center">
                <Jumbotron>
                    <h1 id="about">Компания с мировым именем!</h1>
                    <p>Продаем сладости более 1000 лет!</p>
                    <h1>Более 150 городов доставки</h1>
                    <p>Активно расширяемся</p>

                </Jumbotron>
            </Container>

        );
    }
}