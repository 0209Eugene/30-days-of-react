import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
import 'font-awesome/css/font-awesome.css';

import Timeline from './components/Timeline/Timeline';
import Container2 from './Container2';
import Header2 from './Header2';

export const load = () => {
  console.log('Loading day 4');
  ReactDOM.render(<Timeline />, document.getElementById('demo1'));
  ReactDOM.render(<Container2 />, document.getElementById('demo2'));
  ReactDOM.render(<Header2 />, document.getElementById('headerDemo'));
};

load();
