import React, { Component } from 'react';

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      randomBeer: {},
    };
  }
  render() {
    return (
      <div>
        <h1>Im random beer</h1>
      </div>
    );
  }
}

export default RandomBeer;
