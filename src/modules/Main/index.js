import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.css';

import Header from '../../components/Header';
import {
  sendImage,
} from './mainActions';

class Main extends React.Component {

  readFile = (event) => {
    event.target.files[0].value = event.target.value;
    this.props.sendImage(event.target.files[0]);
    this.props.history.push('/image');
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="artistData">
            <Header/>

            <div>
              <p>Import your image (bmp format only)</p>
              <input type="file" name="myImage" accept="image/bmp" onChange={this.readFile}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendImage: (image) => dispatch(sendImage(image)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

