import React from 'react'
import { Button } from '@rmwc/button'
import { Elevation } from '@rmwc/elevation'
import { List, ListItem, ListItemMeta } from '@rmwc/list'
import { Dialog, DialogActions, DialogButton, DialogContent } from '@rmwc/dialog'

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
    db.collection("songsLogs").where("name", "==", song).where("added", "==", new Date().toLocaleDateString("he-IL"))
      .get().then(querySnapshot => {
        if (querySnapshot.size == 0) { //not in the list of todays songs and wasnt added before
          console.log("added")
          db.collection("songsLogs").add({ name: song, added: new Date().toLocaleDateString("he-IL"), removed: false });
        }
        else {
          if (querySnapshot.docs[0].get("removed")) { //was removed in the past
            console.log("was removed" + querySnapshot.id)
            db.collection('songsLogs').doc(querySnapshot.docs[0].id).update({ removed: false });
          }
          if (!querySnapshot.docs[0].get("removed")) { //when the song is already there
            alert("Dude... It's already there");
          }
        }
      }

      );
  };

  songsData = songsList.map((song) => {

    return (
      <ListItem key={song.key}>
        {song.songName}
        <ListItemMeta>
          <Button label='ADD' onClick={() => {
            this.saveSong(song.songName)
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