import React from 'react';
import EcomodeNav from '../GlobalComponents/EcomodeNav';
import '../Stylesheets/App.css';

const partners = (props) => {
    return (
        <div>
            <EcomodeNav />
            <h1 className='pageHeader'>Our Partners</h1>
            <p className='paragraph' style={{textAlign:'center'}}>More info to come soon!</p>
        </div>
    );
}

export default partners;