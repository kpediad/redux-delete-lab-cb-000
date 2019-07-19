import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <span>{this.props.band.name}</span><button onClick={() => this.props.delete(this.props.key)}>DELETE</button>
      </div>
    );
  }
};

export default Band;
