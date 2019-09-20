import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '3rem',
    padding: theme.spacing(3, 2),
  },
  flex: {
    display: 'flex'
  },
  memberList: {
    width: '30%',
    height: '300px'
  },
  chatWindow: {
    width: '70%',
    height: '300px'
  },
  chatBox: {
    width: '85%'
  },
  sendButton: {
    width: '15%'
  },
}));

function Dashboard() {
  const classes = useStyles();

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

          </div>
          <div className={classes.chatWindow}>
            
          </div>
        </div>
        <div className={classes.flex}>
          
        </div>
      </Paper>
    </div>
  )
}

export default Dashboard;