import React from 'react';
import logo from './logo.svg';
import {Grid, GridCell} from '@rmwc/grid'
import './App.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import DailyStats from './DailyStats';
import Lists from './Lists';
import Statistics from './Stats';



class App extends React.Component {

  constructor(){
    super()
    this.state = {
      addSong : ""

    }

  }
  addSongHandler= (newSong)=>{
    this.setState({addSong: newSong})

  };
  
render(){
  return (
    <div className="App">
     <Grid>
       <GridCell span={8}>
      <div><DailyStats passNewSong = {this.state.addSong}/></div>
      <div><Statistics /></div>
      </GridCell>
      <GridCell span={4}><div className='lists'><Lists getNewSong= {this.addSongHandler}/></div></GridCell>
      </Grid>
    </div>
  );
  }
}
export default App;
