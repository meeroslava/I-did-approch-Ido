import React from 'react';
import { Grid, GridCell} from '@rmwc/grid'
import { Elevation } from '@rmwc/elevation'
import './App.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import DailyStats from './DailyStats';
import Lists from './Lists';
import Statistics from './Stats';





class App extends React.Component {



  constructor() {
    super()
    this.state = {
      addSong: ""

    }

  }
  addSongHandler = (newSong) => {
    this.setState({ addSong: newSong })

  };

  render() {
    return (
      <div className="App">
        <Grid>
          <GridCell span={8}>
            <div><DailyStats passNewSong={this.state.addSong} /></div>
            <div><Statistics /></div>
          </GridCell>
          <GridCell span={4}>
          <Elevation z={15} wrap={true}>
            <div className='lists'>
              <Lists getNewSong={this.addSongHandler} />
            </div>
            </Elevation>
          </GridCell>
        </Grid>
      </div>
    );
  }
}
export default App;
