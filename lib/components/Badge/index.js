import { BadgeStyled } from './styled';
import React from 'react';
import { withTheme } from 'styled-components';
import { number, oneOfType, string } from 'prop-types';

const BadgeComponent = ({ content, ...props }) => (
    <BadgeStyled { ...props }>{ content }</BadgeStyled>
);

BadgeComponent.defaultProps = {
    color: '#fff',
    fontSize: '10px',
    margin: '0 12px',
    size: '20px'
};

BadgeComponent.propTypes = {
    color: string,
    content: oneOfType([number, string]),
    fontSize: string,
    margin: string,
    size: string
};

const Badge = withTheme(BadgeComponent);
Badge.displayName = 'Badge';

export default Badge;
