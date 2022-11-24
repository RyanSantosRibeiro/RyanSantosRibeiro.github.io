import React from 'react';
import logo from '../../assets/images/logo.png';

const Logo = (props) => {
    return  (
        <div className={props.className}>
            <a href="/">
                <img src={ logo } />
            </a>
        </div>
    )
}

export default Logo;