import React from 'react';
import propTypes from 'prop-types';

class ArtistInfo extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <img src={this.props.artist.image_url} />
        <p>info</p>
      </div>
  );
  }
}

export default ArtistInfo;
