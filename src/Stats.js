import React from 'react';
import {Elevation} from '@rmwc/elevation'
import '@material/elevation/dist/mdc.elevation.css'
import Chart from './Chart'

class Statistics extends React.Component {
  render () {
    return <Elevation z={15}><div>
      <h1>Stats</h1>
      <Chart />
      </div>
      </Elevation>
  }
}

export default Statistics;