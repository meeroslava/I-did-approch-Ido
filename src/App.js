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
      newSong : ""

    }

  }
//gets new song from List
  getNewSong(song) {
    this.setState ({newSong: song})
    //TODO add "prevent default"
  }

render(){
  return (
    <div className="App">
     <Grid>
       <GridCell span={8}>
      <div><DailyStats newSong = {this.newSong}/></div>
      <div><Statistics /></div>
      </GridCell>
      <GridCell span={4}><div className='lists'><Lists callbackFunc = {this.getNewSong}/></div></GridCell>
      </Grid>
    </div>
  );
  }

export default App;
