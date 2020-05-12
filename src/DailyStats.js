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
      relevantDate: new Date().toLocaleDateString(),
      dateToShow: new Date().toLocaleDateString("he-IL"),
      songs: [],

    };
  }
  //get songs that were already added today
  componentWillMount() {
    const db = firebase.firestore();
    let date2filter = new Date().toLocaleDateString("he-IL");
    db.collection("songsLogs").where("added", "==", date2filter).where("removed", "==", false).onSnapshot((querySnapshot) => {
      const songs = [];
      querySnapshot.forEach((doc) => {
        songs.push({ key: doc.id, name: doc.data().name });
      })
      this.setState({ songs: songs });


    })

  }



  renderSongs = () => {
    console.log("state: "+ this.state.songs);
    if (this.state.songs == "") {
      console.log("nothing here");
      return <Typography use='overline'>Nothing here...</Typography>
    }
    else {
      if (this.state.dateToShow != new Date().toLocaleDateString("he-IL")) { //past data - no remove button
        return this.state.songs.map((song) => {
          return (
            <ListItem key={song.key}>{song.name} <ListItemMeta>
            </ListItemMeta>
            </ListItem>
          )
        })
      }
      else { //today data - can be modified with removed button
        return this.state.songs.map((song) => {
          return (
            <ListItem key={song.key}>{song.name} <ListItemMeta>
              <Button onClick={() => { this.removeSong(song.key) }} label='remove' raised></Button>
            </ListItemMeta>
            </ListItem>
          )
        })
      }
    }
  }

  removeSong = (songKey) => {
    const db = firebase.firestore();
    db.collection('songsLogs').doc(songKey).update({ removed: true })
  }

  //go backwards with dates
  getPrevous = () => {
    this.changeDate(-1);
  }
  //go forward with dates
  getNext = () => {
    if (this.state.relevantDate == new Date().toLocaleDateString()) { // if it's todays day it cannot show tomorrows data
      alert("We want to, but right now we cannot predict the future...")
    }
    else {
      //date calculation for query
      this.changeDate(+1);
    }
  }

  changeDate = (direct) => {
    var tempDate = new Date(this.state.relevantDate); //temp to work on. takes current date
    tempDate.setDate(tempDate.getDate() + direct); //adds/removes num of days (forward or backward)
    const date2filter = tempDate.toLocaleDateString("he-IL"); //format adjustment for query
    this.setState({ relevantDate: tempDate.toLocaleDateString(), dateToShow: tempDate.toLocaleDateString("he-IL") }) //state update

    const db = firebase.firestore();
    db.collection("songsLogs").where("added", "==", date2filter).where("removed", "==", false).onSnapshot((querySnapshot) => {
      const songs = [];
      querySnapshot.forEach((doc) => {
        songs.push({ key: doc.id, name: doc.data().name });
      })
      this.setState({ songs: songs });
    })
  }
  render() {
    return <Elevation z={15} wrap><div>
      <Typography use='headline3'>{this.state.dateToShow}</Typography>
      <div>
        <Button onClick={() => { this.getPrevous() }} label='Previous' style={{ margRight: 25 }} />
        <Button onClick={() => { this.getNext() }} label='Next' style={{ marginLeft: 25 }} />
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