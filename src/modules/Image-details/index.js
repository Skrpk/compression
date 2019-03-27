import React from 'react';

import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';

import './index.css';

const _URL = window.URL || window.webkitURL;

class ImageDetails extends React.Component {
    constructor(props) {
        super(props);
        this.image = React.createRef();
    }

    state = {
        mathExp: 0,
        imageWidth: 0,
        imageHeight: 0,
    }

    getImage = (file) =>  {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = function () {
            resolve(this);
          };
          img.src = _URL.createObjectURL(file);
        });
      }

    componentDidMount() {
        if (this.props.image) {
            this.getImage(this.props.image)
                .then(data => this.setState({'imageWidth': data.width, 'imageHeight': data.height}));
        }
    }

    onMouseOver = (event) => {
        const { imageWidth, imageHeight } = this.state;

        ////////////////////////////
        const height = this.image.current.height;
        const width = this.image.current.width;
        ////////////////////////////

        const { offsetX, offsetY } = event.nativeEvent;
        const { countedData } = this.props;

        const rowSquareWidth = width / countedData[0].length;
        const columnSquareWidth = height / countedData.length;

        const horizontalCoord = Math.floor(offsetX / rowSquareWidth);
        const verticalCoord = Math.floor(offsetY / columnSquareWidth);

        let mathExp = countedData[verticalCoord][horizontalCoord];

        //const value = this.props.countedData.find(obj => obj.x === horizontalCoord && obj.y === verticalCoord);
        //this.setState({ mathExp: value.M });
        this.setState({ mathExp });
    }

    render() {
        const { mathExp } = this.state;
        const { image } = this.props;
        
        if (!image) {
            this.props.history.push('/');
        }

        return (
            <div>
            {image
                ? <div className="wrapper">
                    <Paper classes={{ root: 'paper-wrap' }}>
                        <div className="image-wrapper">
                            <Paper>
                                <img
                                    src={ require("../../image.bmp") }
                                    onMouseMove={this.onMouseOver}
                                    ref={this.image}
                                />
                            </Paper>
                        </div>
                    </Paper>
                    <Paper classes={{ root: 'description-paper paper-wrap' }}>
                        <div className="description">
                            <p>Math expectation: { mathExp }</p>
                        </div>
                    </Paper>
                </div>
                : null
            }
            </div>
        );
    }
}


function mapStateToProps(store) {
    return {
      image: store.main.get('image'),
      countedData: store.main.get('countedData'),
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ImageDetails);
  
  