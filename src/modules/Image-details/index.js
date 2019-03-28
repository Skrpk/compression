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
        pic: null,
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
                .then(data => this.setState({'pic': data }));
        }
    }

    onMouseOver = (event) => {
        ////////////////////////////
        const height = this.image.current.height;
        const width = this.image.current.width;
        ////////////////////////////

        const { offsetX, offsetY } = event.nativeEvent;
        const { countedData } = this.props;

        const rowSquareWidth = width / countedData.deviations[0].length;
        const columnSquareWidth = height / countedData.deviations.length;

        const horizontalCoord = Math.floor(offsetX / rowSquareWidth);
        const verticalCoord = Math.floor(offsetY / columnSquareWidth);

        let mathExp = countedData.deviations[verticalCoord][horizontalCoord];

        this.setState({ mathExp });
    }

    renderDeviationStat = (stat) => stat.map((elem, key) =>
        <div key={Math.random()}>
            <hr/>
            <p>frequency: {elem.frequency}</p>
            <p>quantity: {elem.quantity}</p>
            <p className="deviation-value">value: {elem.value}</p>
        </div>
    )

    render() {
        const { mathExp, pic } = this.state;
        const { image, countedData } = this.props;
        
        if (!image) {
            this.props.history.push('/');
        }

        return (
            <div>
            {image
                ? <div className="wrapper">
                    <Paper classes={{ root: 'paper-wrap' }}>
                        <div className="image-wrapper">
                            <Paper classes={{ root: 'paper-wrap' }}>
                                <img
                                    src={ pic ? pic.src : '' }
                                    onMouseMove={this.onMouseOver}
                                    ref={this.image}
                                    alt="stuff"
                                />
                            </Paper>
                        </div>
                    </Paper>
                    <Paper classes={{ root: 'description-paper paper-wrap' }}>
                        <div className="description">
                            <p>Math deviation: { mathExp }</p>
                            <p>Mediana: { countedData.mediana }</p>
                            <p>Moda: { countedData.moda }</p>
                            <p>sko: { countedData.sko }</p>
                            <p>d: { countedData.d }</p>
                            <p>deviation stat: { this.renderDeviationStat(countedData.deviationsStat) }</p>
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
  
  