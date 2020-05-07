import React from 'react';
import './Stats.css';
import {Elevation} from '@rmwc/elevation'
import '@material/elevation/dist/mdc.elevation.css';


class Statistics extends React.Component {
  render () {
    return <Elevation z={15}><div>
      <h1>Stats</h1>
      <img src='https://www.mathworks.com/help/examples/graphics/win64/OverlayBarGraphsExample_01.png'/>
      </div>
      </Elevation>
  }
}

export default Statistics;