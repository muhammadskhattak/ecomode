import React from 'react';
import banner from '../Images/banner.jpg';
import './Home.css';
import { Parallax, Background } from 'react-parallax';

const home = (props) => {
  return (
    <div>
      <Parallax blur={0}
                bgImage={banner}
                bgImageAlt="Photo from one of our photoshoots. Woman wearing red \
                wool sweater and holding a leaf."
                strength={300}>
                <div style={{height:'400px'}} />
                <p className="banner_content">Some content</p>
                <div style={{height:'400px'}} />
                <p className="banner_content">Some content</p>
      </Parallax>
      <p>This will be the home page of our website!</p>
    </div>
  );
};

export default home;
