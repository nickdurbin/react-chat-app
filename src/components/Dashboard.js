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
    width: '30%',
    height: '300px',
    borderRight: '1px solid black',
  },
  chatWindow: {
    width: '80%',
    height: '300px',
    padding: '1%'

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

  // CTX Store
  const [allChats] = useContext(CTX);
  const users = Object.keys(allChats);

  // Local State
  const [activeChat, setActiveChat] = useState(users[0]);
  const [textValue, setTextValue] = useState('');

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4">
          RVNB Member Chat
        </Typography>
        <Typography variant="h5" component="h5">
          You are now connected with {activeChat}
        </Typography>
        <div className={classes.flex}>
          <div className={classes.memberList}>
            <List>
              {
                users.map(user =>
                  <ListItem onClick={e => setActiveChat(e.target.innerText)} key={user} button>
                    <ListItemText primary={user} />
                  </ListItem>
                  )
              }
            </List>
          </div>
          <div className={classes.chatWindow}>
            {
              allChats[activeChat].map((chat, index) =>
                <div className={classes.flex} key={index} button>
                  <Chip label={chat.from} className={classes.chip} />
                  <Typography variant="body1" gutterBottom>: {chat.msg}</Typography>
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