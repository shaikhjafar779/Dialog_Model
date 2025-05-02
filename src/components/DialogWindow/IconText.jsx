import React from 'react'
const IconText = ({ icon, text }) => {
    return (
        <div className="icon_text">
            <img src={icon} />
            <h6 className="title">{text}</h6>
        </div>
    )
}

export default IconText
