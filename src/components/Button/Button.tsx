import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({label = "", theme = "default", className = ""})=>{

    return(
        <button className={`${className} buttonComponent buttonComponent--${theme}`} >
            {label}
        </button>
    );
}


export {Button};
