import React from 'react';
import banner from '../Images/banner.jpg';
import '../Stylesheets/Home.css';
import { Parallax } from 'react-parallax';
import { MediaQuery } from 'react-responsive';
import EcomodeNav from '../GlobalComponents/EcomodeNav';


const home = (props) => {
  return (
    <div>
        <Parallax blur={0}
                  bgImage={banner}
                  bgImageAlt="Photo from one of our photoshoots. Woman wearing red \
                  wool sweater and holding a leaf."
                  strength={300}
                  className="img-fluid">
                  <EcomodeNav />
                  <div style={{
                    minWidth:800,
                    height:'100%',
                    minHeight:800,
                    // width:'100%'
                    paddingTop:"57.25%"
                  }} />
              </Parallax>
          <div style={{height:'1000px'}} />
    </div>
  );
};

export default home;
