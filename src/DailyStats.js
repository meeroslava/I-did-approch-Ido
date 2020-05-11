import React from 'react'
import { Typography } from '@rmwc/typography'
import { Button } from '@rmwc/button'
import { Elevation } from '@rmwc/elevation'
import { List, ListItem, ListItemMeta } from '@rmwc/list'
import { Grid, GridCell } from '@rmwc/grid'


import '@material/typography/dist/mdc.typography.css';
import '@material/button/dist/mdc.button.css';
import '@material/elevation/dist/mdc.elevation.css';
import '@material/list/dist/mdc.list.css';
import '@material/button/dist/mdc.button.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import '@material/icon-button/dist/mdc.icon-button.css';

import firebase from './firebase';

class DailyStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relevantDate: new Date().toLocaleDateString("he-IL"),
      songs: [],

    };
  }

componentWillMount(){
  const db = firebase.firestore();
  let date2filter = new Date().toLocaleDateString("he-IL");
  console.log(date2filter);
  db.collection("songsLogs").where("added", "==", date2filter).where("removed","==",false).onSnapshot((querySnapshot) =>{
    const songs = [];
    querySnapshot.forEach((doc)=>{
      songs.push({key: doc.id, name: doc.data().name});
    })
    this.setState({songs: songs});
    console.log('state: '+this.state.songs);
    
  })
   
}



 renderSongs = ()=>{
  if(this.state.songs==[]){
    console.log("nothing here");
    return <Typography use='overline'>Nothing here...</Typography>
  }
  else{
    return this.state.songs.map((song)=>{
      return(
        <ListItem key={song.key}>{song.name} <ListItemMeta>
          <Button onClick = {()=>{this.removeSong(song.key)}} label='remove' raised></Button>
        </ListItemMeta>
        </ListItem>
      )
    })
  }
 } 

 removeSong= (songKey)=>{
  const db = firebase.firestore();
  db.collection('songsLogs').doc(songKey).update({removed: true})
 }


 

  render() {
    return <Elevation z={15} wrap><div>
      <Typography use='headline3'>{this.state.relevantDate}</Typography>
      <div>
        <Button label='Previous' style={{ margRight: 25 }} />
        <Button label='Next' style={{ marginLeft: 25 }} />
      </div>
      <Grid>
        <GridCell span={3}></GridCell>
        <GridCell span={6}>
          <List>
           {this.renderSongs()}
          </List>
        </GridCell>
      </Grid>
    </div>
    </Elevation>

  }

}

export default DailyStats;