import React from 'react';
import Menu from "./Menu";
import '../styles.css'
import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

const Layout = ({ title = 'Title', description = 'Description', className, children }) => ( 
    <div>   
    <Menu />
        <div className="jumbotron">
        <h2>{title}</h2>
        <p className="lead">{description}</p>
        <Particles className='particles'
                params={particlesOptions}
        />
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;