import React from 'react';
import FashionList from './FashionList';
import themeImage from '../images/theme.jpeg';

const GlamHome = () => {
    return (
        <>
            <div>
                <div className="container" style={{
                    width: '70%',
                    margin: '0 auto',
                    backgroundImage: `url(${themeImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                }}>
                    <FashionList  />
                </div>
            </div>
        </>
    )
}

export default GlamHome