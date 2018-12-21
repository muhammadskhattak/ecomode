import React from 'react';
import banner from '../Images/banner.jpg';
import '../Stylesheets/Home.css';
import '../Stylesheets/App.css';
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
          {/* <div style={{height:'1000px'}} /> */}
          <h1 className='header'>What is Ecomode?</h1>
          <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, lorem sed rhoncus eleifend, arcu felis sodales justo, nec sollicitudin eros nibh eu ex. Ut tortor ex, malesuada sed dapibus eget, iaculis id urna. Cras cursus purus non arcu molestie pharetra. Duis eu condimentum magna. Donec pulvinar neque lacus, eu placerat elit euismod a. Nam pulvinar ex id tellus posuere, sed vehicula nisi facilisis. Ut at vulputate augue. Sed id eros porttitor, dapibus enim semper, euismod eros. Aenean urna lectus, tincidunt eu lacus et, volutpat semper libero. Vivamus congue malesuada pharetra. Donec neque felis, bibendum ut risus vel, placerat pretium ligula. Nunc sagittis in nisi eu fringilla. Vivamus urna nulla, fringilla feugiat tortor eu, eleifend commodo nisl. Ut convallis orci sed magna ullamcorper, in dictum metus tincidunt. Suspendisse eget dictum sem, vel consequat dui. Suspendisse sodales urna lorem, id fringilla leo euismod nec.</p>
    </div>
  );
};

export default home;
