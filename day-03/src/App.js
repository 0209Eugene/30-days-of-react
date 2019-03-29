import React from 'react';
import { fdatasync } from 'fs';

class App extends React.Component {

  render() {
    return <MyTestCode />
  }
}

class MyTestCode extends React.Component {
  render() {
    let x = 10;
    console.log(x);

    return (
      <button>Go</button> ,
      <input>my Text Area</input>
    )

  }
}

export default App;
