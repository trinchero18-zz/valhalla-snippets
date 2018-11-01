import React from 'react';
import styled from 'styled-components';

export const BadgeStyled = styled.span`
    align-items: center;
    background: ${ ({ background, theme: { dangerColor } }) => background || dangerColor };
    border-radius: ${ props => ('rounded' in props) ? '9999px' : '100%' };
    color: ${ ({ color }) => color };
    display: flex;
    font-size: ${ ({ fontSize }) => fontSize };
    height: ${ ({ size }) => size };
    justify-content: center;
    margin: ${ ({ margin }) => margin };
    padding: 2px;
    width: ${ ({ size }) => size };
`;
