import React, { MouseEventHandler } from 'react';
import PropTypes from 'prop-types';

import './button.scss';


interface Props {
    label:string,
    className?:string,
    onClick: MouseEventHandler,
    variant: "default"|"text"|"outline"
}


const Button = ({label, className, onClick, variant}:Props)=>{
    return(
        <button 
            className={`${className} buttonComponent buttonComponent--${variant}`} 
            onClick={onClick}>
            {label}
        </button>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(["default","text","outline"])

}

Button.defaultProps = {
    label: "Default",
    className:"",
    onClick: ()=>{},
    variant: "default"
};


export {Button};
