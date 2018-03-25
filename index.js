import React from 'react';
import ReactDom from 'react-dom';
import App from './src/component/app/index.js';
import './src/style/main.scss';

const container = document.createElement('div');
document.body.appendChild(container);
ReactDom.render(<App />, container);