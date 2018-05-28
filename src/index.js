import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Home from './components/Home.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
