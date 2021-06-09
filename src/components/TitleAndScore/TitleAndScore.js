import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './TitleAndScore.css'

export default class TitleAndScore extends PureComponent {
  static propTypes = {
    // anime title
    title: PropTypes.string,
    // average user score (#/10)
    score: PropTypes.number,
  }

  render() {
    return (
      <div class='title-and-score-container'>
        <span>
          <b>{this.props.title}</b> {'// Average Score:'} {this.props.score}
        </span>
      </div>
    )
  }
}
