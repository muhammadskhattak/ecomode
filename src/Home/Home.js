import React from 'react';
import banner from '../Images/banner.jpg';
import '../Stylesheets/Home.css';
import '../Stylesheets/App.css';
import { Parallax } from 'react-parallax';
import EcomodeNav from '../GlobalComponents/EcomodeNav';


const home = (props) => {
  return (
    <div>
        <EcomodeNav />
        {/* <img src={banner} style={{textAlign:"center"}}/> */}
        {/* <Parallax blur={0}
            bgImage={banner}
            bgImageAlt="Poster for Ecomode"
            strength={300} >
          <div style={{
            minWidth:1181,
            height:'100%',
            minHeight:1574,
            width:'100%'
          }} /> */}
        <Parallax
             bgImage={banner}
             bgImageAlt="Poster for Ecomode. "
             strength={300}
             className="img-fluid">
          <div style={{
            minWidth:800,
            height:'100%',
            minHeight:800,
            // width:'100%'
            paddingTop:"57.25%"
            }} />
          </Parallax>
          <h2 className='headerHome'>Sustainability can be affordable and chic. No greenwashing guaranteed.</h2>
          <p className='paragraph'>We are a project that advocates for sustainable lifestyles. Limiting our hyper-consumerist economy to Earth’s finite resources, we encourage consumers to engage in minimalist lifestyles, slow fashion and slow architecture by purchasing from student designers, creators, and artists. We are looking to upcycle second hand clothing, textiles and everyday waste, giving them a new life in fashion, art and architecture.</p>
    </div>
  );
};

export default home;
