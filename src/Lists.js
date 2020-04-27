import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from '@rmwc/button'
import {Elevation} from '@rmwc/elevation'
import {List, ListItem, ListItemMeta} from '@rmwc/list'
import '@material/button/dist/mdc.button.css';
import '@material/elevation/dist/mdc.elevation.css';
import '@material/list/dist/mdc.list.css';
import '@material/button/dist/mdc.button.css';


class Lists extends React.Component {
  render () {
    return <Elevation z={15} wrap>
     <List>
       <ListItem>בונה <ListItemMeta>
         <Button label='add' raised></Button>
          </ListItemMeta>
         </ListItem>

         <ListItem>יש אנשים <ListItemMeta>
         <Button label='add' raised></Button>
          </ListItemMeta>
         </ListItem>

         <ListItem>לילה שנשכח <ListItemMeta>
         <Button label='add' raised></Button>
          </ListItemMeta>
         </ListItem>
         
         <ListItem>רומאו <ListItemMeta>
         <Button label='add' raised></Button>
          </ListItemMeta>
         </ListItem>
         
         <ListItem>ישראל <ListItemMeta>
         <Button label='add' raised></Button>
          </ListItemMeta>
         </ListItem>

         <ListItem>סוזן <ListItemMeta>
         <Button label='add' raised></Button>
          </ListItemMeta>
         </ListItem>

         <ListItem>מיידנק<ListItemMeta>
         <Button label='add' raised></Button>
          </ListItemMeta>
         </ListItem>

         <ListItem>מיטל וקובי<ListItemMeta>
         <Button label='add' raised></Button>
          </ListItemMeta>
         </ListItem>

         <ListItem>בת ים<ListItemMeta>
         <Button label='add' raised></Button>
          </ListItemMeta>
         </ListItem>

         <ListItem>הצחוק <ListItemMeta>
         <Button label='add' raised></Button>
          </ListItemMeta>
         </ListItem>

         <ListItem>אח משכמה <ListItemMeta>
         <Button label='add' raised></Button>
          </ListItemMeta>
         </ListItem>

         <ListItem>באטמן <ListItemMeta>
         <Button label='add' raised></Button>
          </ListItemMeta>
         </ListItem>

         <ListItem>כן ניגשתי לעידו <ListItemMeta>
         <Button label='add' raised></Button>
          </ListItemMeta>
         </ListItem>


     </List>
    </Elevation>
  }
}

export default Lists;