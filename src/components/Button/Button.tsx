import React, { forwardRef, LegacyRef, MouseEventHandler } from 'react';
import PropTypes from 'prop-types';

import './button.scss';

interface Props {
    label?:string,
    className?:string,
    onClick?: MouseEventHandler,
    variant?: "default"|"text"|"outline",
    disableShadow?: boolean
    disabled?: boolean,
    startIcon?:string,
    endIcon?:string,
    size?:"sm"|"md"|"lg",
    color?: "default"|"primary"|"secondary"|"danger"|void,
}

type Ref = HTMLButtonElement;

const Button = forwardRef<Ref,Props >(({label ="Default", className="", onClick = ()=>{}, 
                                        variant ="default",disableShadow = false, disabled = false,
                                        startIcon= '',endIcon= '',size = "md", color},
                                        ref)=>{

    return(
        <button 
            disabled={disabled}
            className={`${className} buttonComponent buttonComponent--variant-${variant}
                        ${disableShadow?'buttonComponent--disableShadow':''}
                        buttonComponent--size-${size}
                        buttonComponent--color-${color}`
                      } 
            onClick={onClick}
            ref={ref}>
            
            {startIcon?<i className="material-icons buttonComponent__startIcon">{startIcon}</i>:''}
            <p>{label}</p>
            {endIcon?<i className="material-icons buttonComponent__endIcon">{endIcon}</i>:''}

        </button>
    );
}
)
/* Button.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(["default","text","outline"]),
    disableShadow: PropTypes.bool,
    disabled: PropTypes.bool,
    startIcon:PropTypes.string,
    endIcon:PropTypes.string,
    size: PropTypes.oneOf(["sm","md","lg"]),
    color: PropTypes.oneOf(["default","primary","secondary","danger"])

}

Button.defaultProps = {
    label: "Default",
    className:"",
    onClick: ()=>{},
    variant: "default",
    disableShadow: false,
    disabled: false,
    startIcon:'',
    endIcon:'',
    size:"md",
    color:"default"
};
 */

export {Button};
