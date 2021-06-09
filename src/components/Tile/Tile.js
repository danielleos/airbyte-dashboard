import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './Tile.css'

export default class Tile extends PureComponent {
  static propTypes = {
    // determines the size of the tile (small, medium, large)
    size: PropTypes.string,
    // determines the colour of the tile
    colour: PropTypes.string,
    // title text
    tileTitle: PropTypes.string,
    // the content to be displayed
    content: PropTypes.number,
  }

  static defaultProps = {
    size: 'small',
    colour: 'purple',
  }

  render() {
    return (
      <div class={`tile-container tile-${this.props.size} tile-${this.props.colour}`}>
        <h4 class='tile-title'>{this.props.tileTitle}</h4>
        <div class='main-content'>
          {this.props.content}
        </div>
      </div>
    )
  }
}
