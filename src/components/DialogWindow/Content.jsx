import React from 'react'

const Content = ({ content }) => {
    if (!content) return null;
    return (
        <h5 className='content'>{content}</h5>
    );
}

export default Content
