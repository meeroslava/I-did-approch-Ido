import React from 'react'
import { Button } from '@rmwc/button'
import { List, ListItem, ListItemMeta } from '@rmwc/list'


import '@material/button/dist/mdc.button.css';
import '@material/elevation/dist/mdc.elevation.css';
import '@material/list/dist/mdc.list.css';
import '@material/button/dist/mdc.button.css';

import firebase from './firebase';
import songsList from './songsList.json';

class Lists extends React.Component {

  //save to db
  saveSong = (song) => {
    const db = firebase.firestore();
    db.collection("songsLogs").where("name", "==", song).where("added", "==", new Date().toLocaleDateString("he-IL"))
      .get().then(querySnapshot => {
        if (querySnapshot.size == 0) { //not in the list of todays songs and wasnt added before
          console.log("added")
          db.collection("songsLogs").add({ name: song, added: new Date().toLocaleDateString("he-IL"), removed: false });
          this.updateCounter(song);
        }
        else {
          if (querySnapshot.docs[0].get("removed")) { //was removed in the past
            db.collection('songsLogs').doc(querySnapshot.docs[0].id).update({ removed: false });

            this.updateCounter(song);
          }
          if (!querySnapshot.docs[0].get("removed")) { //when the song is already there
            alert("Dude... It's already there");
          }
        }
      }

      );
  };

  updateCounter = (song) => {
    const db = firebase.firestore();
    db.collection('totalStats').where("name", '==', song).get().then(doc => {
      db.collection('totalStats').doc(doc.docs[0].id).update({ count: doc.docs[0].data().count + 1 });
    });
  }

  //show song list
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
    return <div>
      <List>
        {this.songsData}
      </List>
    </div>
  }
}

export default Lists;