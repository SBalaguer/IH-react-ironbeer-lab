import React, { Component } from 'react';

import SingleBeerForList from '../../Components/SingleBeerForList';
import { listAllBeers } from '../../Services/beers-api';

class AllBeers extends Component {
  constructor() {
    super();
    this.state = {
      allBeers: [],
    };
  }

  componentDidMount() {
    listAllBeers()
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>I'm the list of all beers</h1>
        <SingleBeerForList />
      </div>
    );
  }
}

export default AllBeers;
