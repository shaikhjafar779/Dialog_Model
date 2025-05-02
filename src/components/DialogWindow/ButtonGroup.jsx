import React from 'react'

const ButtonGroup = ({ children }) => {
    if (!children) return null;
    return (
        <div className="button_group">{children}</div>
    )
}

export default ButtonGroup
