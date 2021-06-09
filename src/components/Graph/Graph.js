import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  Legend,
  ResponsiveContainer
} from 'recharts'

import './Graph.css'

export default class Graph extends PureComponent {
  static propTypes = {
    // data
    data: PropTypes.array,
  }

  render() {
    return (
      <div class='graph-container'>
        <ResponsiveContainer>
          <BarChart data={this.props.data}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey='Score'>
              <Label value='User ratings' offset={250} position='top' />
            </XAxis>
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='Votes' fill='var(--colour-yellow-primary' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
