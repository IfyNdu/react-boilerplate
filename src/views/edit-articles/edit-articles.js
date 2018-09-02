import { CardList } from 'Components'
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class EditArticles extends Component {

  render() {

    return (
      <div>
        <div style={{ padding: '1rem', color: 'white' }}>
          <Link to='/'> Back to ads</Link>
        </div>
        <CardList />
      </div>
    )
  }
}

export default EditArticles;
