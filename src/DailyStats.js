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
      newSong: "",

    };
  }

componentDidMount(){
  const db = firebase.firestore();
  const songs2display = db.collection("songsLogs").where("name", "==", 'סוזן').onSnapshot((querySnapshot) =>{
    var songs = [];
    querySnapshot.forEach((doc)=>{
      <ListItem>{doc.data().name} <ListItemMeta>
      <Button label='remove' raised></Button>
    </ListItemMeta>
    </ListItem>
    })
    
  })
  return songs2display;  
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
           {songs2display}
          </List>
        </GridCell>
      </Grid>
    </div>
    </Elevation>

  }

}

export default DailyStats;