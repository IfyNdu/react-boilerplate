import { Carousel } from 'Components'
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class App extends Component {

  render() {

    return (
      <div>
        <div style={{ padding: '1rem', color: 'white', textAlign: 'right'}}>
          <Link to='/edit'>Edit Articles</Link>
        </div>
        <Carousel />
      </div>
    )
  }
}

export default App;
