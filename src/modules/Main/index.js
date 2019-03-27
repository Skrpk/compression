import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import TextFieldGroup from '../../components/TextFieldGroup';

import './index.css';

import {
  sendImage,
} from './mainActions';

class Main extends React.Component {
  state = {
    compCoef: 1,
    errors: {},
  }

  readFile = (event) => {
    const { compCoef } = this.state;
    const compressionCoefNumber = Number(compCoef);

    if (!compressionCoefNumber || compressionCoefNumber === NaN || compressionCoefNumber < 1) {
      this.setState({ errors: { compCoef: 'Invalid input' } });
      return;
    }
    const file = event.target.files[0];
    this.props.sendImage(event.target, compCoef);
    
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.props.image) {
      this.props.history.push('/image');
    }

    const { errors } = this.state;
    return (
      <div className="wrapper">
        <Paper classes={{ root: 'paper' }}>
          <div className="artistData">
              <TextFieldGroup
                label="Compression coefficient: "
                onChange={this.onChange}
                value={this.state.compCoef + ''}
                field="compCoef"
              />
              <p className="error-message">{errors.compCoef}</p>
              <p className="title">Import your image (bmp format only)</p>
              <input
                accept="image/bmp"
                className="input"
                style={{ display: 'none' }}
                id="raised-button-file"
                type="file"
                onChange={this.readFile}
              />
              <label htmlFor="raised-button-file">
                <Button component="span" color="primary" variant="contained">
                  Upload
                </Button>
              </label> 
          </div>
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    image: store.main.get('image'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendImage: (image, compCoef) => dispatch(sendImage(image, compCoef)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

