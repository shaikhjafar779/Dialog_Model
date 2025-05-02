import React from 'react'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';


const DialogWindow = ({
    visible,
    onClose,
    header,
    content,
    footer,
}) => {
    if (!visible) return null;

    return (
        <div className="overlay">
            <div className="dialog">
                <div onClick={onClose} className='close_modal'>❌</div>
                {header && <Header {...header} />}
                {content && <Content content={content} />}
                {footer && <Footer {...footer} />}
            </div>
        </div>
    );
};

export default DialogWindow
