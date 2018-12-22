import React from 'react';
import EcomodeNav from './EcomodeNav';
import '../Stylesheets/App.css';

const pathNotFound = (props) => {
    return (
        <div>
            <EcomodeNav />
            <h1 className='header'>404: Page Not Found!</h1>
            <h2 className='header'>You can navigate back to Project Ecomode by clicking the link below</h2>
            <p style={{textAlign:'center'}}><a href="/Home">Back to the Home Page</a></p>
        </div>
    );
}

export default pathNotFound;