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
      <div styleName='loading-container'>
        <GooSpinner size={100} color='#000'/>
        {this.props.children}
      </div>
    )
  }
}
