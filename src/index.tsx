import React, { createElement } from 'react';
import { render } from 'react-dom';
import { App } from './App';
// Importação de fontes do Google
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);
render(<App />, document.getElementById('root'));