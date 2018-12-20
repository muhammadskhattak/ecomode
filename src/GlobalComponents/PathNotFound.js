import React from 'react';
import EcomodeNav from './EcomodeNav';

const pathNotFound = (props) => {
    return (
        <div>
            <EcomodeNav />
            <h1>404: Page Not Found!</h1>
            <h2>You can navigate back to Project Ecomode by clicking the link below</h2>
            <a href="/Home">Back to the Home Page</a>
        </div>
    );
}

export default pathNotFound;