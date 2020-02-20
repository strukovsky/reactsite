import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "./Product";
import React, {Component} from "react";


export default class Exhibition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        /*headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
        headers.append('Origin','http://localhost:3000');*/

        fetch("http://127.0.0.1:8000/api/v1/product/",)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(
                        {
                            isLoaded: true,
                            items: result.objects
                        }
                    )
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error</div>
        } else if (!isLoaded) {
            return <div>Loading</div>
        } else {
            let iter = -1;
            let array = items.map(item => {
                iter++;
                return <Col key={iter}>
                    <Product
                        title={item.title}
                        price={item.price}

                        description={item.description}/>
                </Col>
            });

            let first = [];
            let second = [];

            array.forEach(function (element) {
                if (element.key  % 2 === 0)
                    first.push(element);
                else second.push(element);
            });


            return (
                <Container className="text-center">
                    <h1 id="exhibition">
                        А что у нас есть?
                    </h1>
                    <Row>
                        {first}
                    </Row>
                    <Row>
                        {second}
                    </Row>

                </Container>)
        }

    }
}