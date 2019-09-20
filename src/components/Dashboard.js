import React, { useState, useContext } from 'react';
import { CTX } from '../store/Store';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '3rem',
    padding: theme.spacing(3, 2),
    textAlign: 'center'
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  memberList: {
    width: '15%',
    height: '300px',
    borderRight: '1px solid black'
  },
  chatWindow: {
    width: '70%',
    height: '300px',
    padding: '20px'
  },
  chatBox: {
    width: '65%',
    margin: '1% 3% 0 17%'
  },
  sendButton: {
    width: '15%',
    margin: '1% 2% 0 0'
  },
}));

function Dashboard() {
  const classes = useStyles();
  const [textValue, setTextValue] = useState();
  
  // CTX Store
  const [allChats] = useContext(CTX); 

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4">
          RVNB Member Chat
        </Typography>
        <Typography variant="h5" component="h5">
          You are now connected.
        </Typography>
        <div className={classes.flex}>
          <div className={classes.memberList}>
            <List>
              {
                ['Gary', 'Robert'].map(member =>
                  <ListItem key={member} button>
                    <ListItemText primary="member" />
                  </ListItem>
                  )
              }
            </List>
          </div>
          <div className={classes.chatWindow}>
          {
                [{ from: 'user', msg: 'hello' }].map((chat, index) =>
                  <div className={classes.flex} key={index} button>
                    <Chip label={chat.from} className={classes.chip} />
                    <Typography variant="body1" gutterBottom>{chat.msg}</Typography>
                  </div>
                  )
              }
          </div>
        </div>
        <div className={classes.flex}>
          <TextField
            label="Send a message."
            className={classes.chatBox}
            value={textValue}
            onChange={e => setTextValue(e.target.value)}
          />
          <Button variant="contained" color="primary" className={classes.sendButton}>
              Send
          </Button>
        </div>
      </Paper>
    </div>
  )
}

export default Dashboard;