import React, { Component } from 'react';
import EcomodeNav from '../GlobalComponents/EcomodeNav';
import EcomodeForm from '../GlobalComponents/Form';
import {Card, CardText, CardBody, CardTitle} from 'reactstrap';
import '../Stylesheets/App.css';
import '../Stylesheets/Card.css'

class SignUp extends Component{

    render() {
        return (
            <div>
                <EcomodeNav />
                <h1 className="pageHeader">Join our Campaign</h1>
                <div className="CardContainer">
                <Card body inverse style={{backgroundColor: "#FFFFFF", borderColor: "#DCDCDC"}}>
                    <CardBody className="CardBody">
                    <CardTitle className="CardTitle text-center"> Sustainability can be affordable and chic. No greenwashing guaranteed. </CardTitle>
                    <CardText className="CardSubtitle text-center">
                        We are a project that advocates for sustainable lifestyles. Limiting our hyper-consumerist economy to Earth’s finite resources,
                        we encourage consumers to engage in minimalist lifestyles, slow fashion and slow architecture by purchasing from student designers, 
                        creators, and artists. We are looking to upcycle second hand clothing, textiles and everyday waste, giving them a new life in fashion, 
                        art, and architecture.
                    </CardText>
                    <CardText className="CardSubtitle text-center">
                        We are currently looking for the following members for the following roles:
                        <br></br>
                        Director of Finance
                        <br></br>
                        Director of Marketing
                    </CardText>
                    </CardBody>
                </Card>
                </div>
                <EcomodeForm />
            </div>
        );
    }
}

export default SignUp;