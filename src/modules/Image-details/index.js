import React from 'react';

import { connect } from 'react-redux';

const SIZE = 640;

class ImageDetails extends React.Component {
    state = {
        mathExp: null,
    }

    onMouseOver = (event) => {
        const squareSize = SIZE / 4;
        const { offsetX, offsetY } = event.nativeEvent;
        const horizontalCoord = Math.floor(offsetX / squareSize);
        const verticalCoord = Math.floor(offsetY / squareSize);
        const value = this.props.countedData.find(obj => obj.x === horizontalCoord && obj.y === verticalCoord);
        console.log(this.props.countedData);
        debugger
        this.setState({ mathExp: value.M });
    }

    render() {
        const { mathExp } = this.state;
        return (
            <div>
                <img src={ require("../../image.bmp") } onMouseMove={this.onMouseOver}/>
                <p>{ mathExp ? mathExp : '' }</p>
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
  
  