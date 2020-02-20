import React, {Component} from 'react';
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "react-bootstrap/Navbar";
import Exhibition from "./сomponents/Exhibition";
import {NavbarBrand} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
import Jumbotron from "react-bootstrap/Jumbotron";
import Basket from "./сomponents/Basket";
import About from "./сomponents/About";

class App extends Component {
    render() {

        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <NavbarBrand href="#home" >Магазин Конфета</NavbarBrand>
                    <Nav className="mr-auto">
                        <NavLink href="#exhibition">Ассортимент</NavLink>
                        <NavLink href="#about">О нас</NavLink>
                        <Basket/>
                    </Nav>
                </Navbar>
                <Jumbotron>
                    <h1 align="center">
                        Мы - магазин конфет!
                    </h1>
                    <p align="center">
                        Если вам нужны конфеты, то мы тут как тут!
                         :))
                    </p>
                </Jumbotron>
                <Exhibition />
                <About/>
            </div>

        );
    }
}

export default App;
