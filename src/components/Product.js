// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component{
  render() {
    return (
      <div>
        name: {this.props.name}
        producer: {this.props.producer}
        hasWatermark: {this.props.hasWatermark}
        color: {this.props.color}
        weight: {this.props.weight}
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
}

var weight_range = [];
for (var i = 80; i <= 300; i++) {
  weight_range.push(i);
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(weight_range).isRequired
}

export default Product
