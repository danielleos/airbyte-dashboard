import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Search.css'

export default class Search extends Component {
  static propTypes = {
    children: PropTypes.any,
  }

  render() {
    return (
      <div class='search-container'>
        Search Component v2
      </div>
    )
  }
}
