import React from 'react';
import banner from '../Images/banner.jpg';
import '../Stylesheets/Home.css';
import '../Stylesheets/App.css';
import { Parallax } from 'react-parallax';
import { MediaQuery } from 'react-responsive';
import EcomodeNav from '../GlobalComponents/EcomodeNav';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';


const home = (props) => {
  return (
    <div>
        {/* <div className="EcomodeHeader text-center">
          <h1 className="Ecomodeh1">ECOMODE</h1>
        </div> */}
        <Parallax blur={0}
                  bgImage={banner}
                  bgImageAlt="Photo from one of our photoshoots. Woman wearing red \
                  wool sweater and holding a leaf."
                  strength={300}
                  className="img-fluid">
                  <EcomodeNav />
                  <div style={{
                    minWidth:800,
                    height:'1000px',
                    minHeight:800,
                    // width:'100%'
                    paddingTop:"57.25%"
                  }} />
              </Parallax>
        <div className="CardContainer">
          <Card body inverse style={{backgroundColor: "#FFFFFF", borderColor: "#DCDCDC"}}>
            {/* <CardImg className="CardImage text-center" src={banner}/> This is how one would insert image into a card */}
            <CardBody className="CardBody">
              <CardTitle className="CardTitle text-center"> What is Ecomode? </CardTitle>
              <CardSubtitle className="CardSubtitle text-center">Some subtitle text</CardSubtitle>
              <CardText className="CardText text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Vel pharetra vel turpis nunc eget lorem dolor sed. 
                Vitae nunc sed velit dignissim sodales. Nunc consequat interdum varius sit amet mattis 
                vulputate enim nulla. Auctor augue mauris augue neque gravida. Morbi tristique senectus 
                et netus et malesuada fames ac. Posuere lorem ipsum dolor sit amet. Erat nam at lectus 
                urna duis convallis convallis tellus id. Amet mattis vulputate enim nulla aliquet porttitor 
                lacus. Turpis massa tincidunt dui ut. Et sollicitudin ac orci phasellus. Eleifend mi in 
                nulla posuere sollicitudin. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Tempus 
                imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Venenatis a condimentum 
                vitae sapien pellentesque habitant. Rhoncus aenean vel elit scelerisque mauris pellentesque 
                pulvinar pellentesque habitant.
              </CardText>
              {/* <Button className="CardButton text-center">This is some clickable button that doesn't do anything</Button> */}
            </CardBody>
          </Card>
        </div>
        <div style={{height:'1000px'}} />
          {/* <h1 className='header'>What is Ecomode?</h1>
          <p className='paragraph'></p> */}
    </div>
  );
};

export default home;
