import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './Tile.css'

export default class Tile extends PureComponent {
  static propTypes = {
    // the text to be displayed
    children: PropTypes.string,
    // determines the size of the tile (small, medium, large)
    size: PropTypes.string,
    // determines the colour of the tile
    colour: PropTypes.string,
  }

  render() {
    return (
      <div class={`tile-container ${this.props.size} ${this.props.colour}`}>
        {this.props.children}
      </div>
    )
  }
}
