import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

const colors = {
    accentColor: '#e50695',
    backgroundColor: '#7d96b5',
    borderColor: '#EAECF4',
    dangerColor: '#8c182b',
    disabledColor: '#E5DFDB',
    errorColor: '#E50695',
    opacityColor: '#CFC3BA',
    primaryColor: '#00A859',
    secondaryColor: '#395d86',
    textColor: '#395d86',
    warningColor: '#e4c80b',
    labelColor: '#7D96B5'
};

class App extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <ThemeProvider theme={ colors }>
                <p>Start</p>
            </ThemeProvider>
        );
    }
}

export default App;
