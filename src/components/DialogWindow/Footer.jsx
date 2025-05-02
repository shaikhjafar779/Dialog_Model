import React from 'react'
import ButtonGroup from './ButtonGroup';
import Button from './Button';

const Footer = ({ buttons, info }) => {
    if (!buttons || !info) return null;
    return (
        <footer>
            {info && <div className="info">{info}</div>}
            <ButtonGroup>
                {Array.isArray(buttons) && buttons.map((btn, i) => (
                    <Button key={i} onClick={btn.onClick}>
                        {btn.label}
                    </Button>
                ))}
            </ButtonGroup>
        </footer>
    )
}

export default Footer
