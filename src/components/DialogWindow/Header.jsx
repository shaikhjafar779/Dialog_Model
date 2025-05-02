import React from 'react'
import IconText from './IconText';
import ButtonGroup from './ButtonGroup';
import Button from './Button';

const Header = ({ icon, title, buttons }) => {
    return (
        <header>
            <IconText icon={icon} text={title} />
            <ButtonGroup>
                {buttons.map((btn, i) => (
                    <Button key={i} onClick={btn.onClick}>
                        {btn.label}
                    </Button>
                ))}
            </ButtonGroup>
        </header>
    )
}

export default Header
