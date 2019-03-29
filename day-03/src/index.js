import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HelloWorld from './HelloWorld';
import './index.css';

export const load = () => {
  // ReactDOM.render(<HelloWorld />, document.getElementById('demo1'));

  ReactDOM.render(<MyTestCode />, document.getElementById('root'));
};

load();
