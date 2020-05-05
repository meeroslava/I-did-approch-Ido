import React from 'react'
import { Button } from '@rmwc/button'
import { Elevation } from '@rmwc/elevation'
import { List, ListItem, ListItemMeta } from '@rmwc/list'

import '@material/button/dist/mdc.button.css';
import '@material/elevation/dist/mdc.elevation.css';
import '@material/list/dist/mdc.list.css';
import '@material/button/dist/mdc.button.css';

import firebase from './firebase';
import songsList from './songsList.json';

class Lists extends React.Component {
  sendSong = (song) => {
    this.props.getNewSong(song);
    console.log(song);
  };

  //save to db
  saveSong = (song) => {
    const db = firebase.firestore();
    db.collection("songsLogs").add({name: song, added: new Date()});
  };

  songsData = songsList.map((song) => {

    return (
      <ListItem key={song.key}>
        {song.songName}
        <ListItemMeta>
          <Button label='ADD' onClick={() => {
            return this.saveSong(song.songName)
          }} raised></Button>
        </ListItemMeta>
      </ListItem>
    )
  }
  );

  render() {
    return <Elevation z={15} wrap>
      <List>
        {this.songsData}
      </List>
    </Elevation>
  }
}

export default Lists;