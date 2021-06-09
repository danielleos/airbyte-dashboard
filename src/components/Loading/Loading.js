import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { GooSpinner } from 'react-spinners-kit'

import './Loading.css'

export default class Loading extends PureComponent {
  static propTypes = {
    children: PropTypes.string,
  }

  render() {
    return (
      <div class='loading-container'>
        <GooSpinner size={100} color='var(--colour-yellow-primary)'/>
      </div>
    )
  }
}
