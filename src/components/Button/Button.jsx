
import React from 'react'
import './Button.css'
const Button = (props) => {
    const { variant = 'primary', children, ...rest } = props
    return (
        <div className={`button ${variant} {...rest}`}>Button</div>
    )
}

export default Button