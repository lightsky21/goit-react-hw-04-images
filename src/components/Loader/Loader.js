import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner';
class Loader extends Component {
  render() {
    return (
      <Audio
        height="100"
        width="100"
        color="blue"
        ariaLabel="loading"
        wrapperStyle={{
          position: 'relative',
          margin: '0 auto',
        }}
      />
    );
  }
}

export default Loader;
