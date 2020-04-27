import React from 'react'
import ReactDOM from 'react-dom'
import {Typography} from '@rmwc/typography'
import {Button} from '@rmwc/button'
import {Elevation} from '@rmwc/elevation'
import {List, ListItem, ListItemMeta} from '@rmwc/list'
import {Grid, GridCell} from '@rmwc/grid'
import {IconButton} from '@rmwc/icon-button'
import '@material/typography/dist/mdc.typography.css';
import '@material/button/dist/mdc.button.css';
import '@material/elevation/dist/mdc.elevation.css';
import '@material/list/dist/mdc.list.css';
import '@material/button/dist/mdc.button.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import '@material/icon-button/dist/mdc.icon-button.css';

class DailyStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relevantDate: new Date().getDate,
      newSong: "",

    };
  }

  addNewSong = (newSong)=>{
    this.setState({newSong: newSong})
    //TODO add element to DOM
  }
  
  render () {
    return <Elevation z={15} wrap><div>
      <Typography use='headline3'>9.9.2019</Typography>
      <div>
      <Button label='Previous' style={{margRight: 25}}/>
      <Button label='Next' style={{marginLeft: 25}}/>
      </div>
      <Grid>
        <GridCell span={3}></GridCell>
        <GridCell span={6}> 
      <List>
       <ListItem>Song <ListItemMeta>
         <Button label='remove' raised></Button>
          </ListItemMeta>
         </ListItem>
         <ListItem>Song <ListItemMeta>
         <Button label='remove' raised></Button>
          </ListItemMeta>
         </ListItem>
     </List>
     </GridCell>
  </Grid>
     </div>
     </Elevation>
   
  }
  
}

export default DailyStats;