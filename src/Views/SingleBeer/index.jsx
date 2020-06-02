import React, { Component } from 'react';

class SingleBeer extends Component {
  constructor() {
    super();
    this.state = {
      singleBeer: {},
    };
  }
  render() {
    return (
      <div>
        <h1>I'm single beer</h1>
      </div>
    );
  }
}

export default SingleBeer;
