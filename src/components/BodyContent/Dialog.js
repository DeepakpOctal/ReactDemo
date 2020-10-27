import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    console.log("asgaae", props.title)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ListItem button onClick={() => { handleClickOpen() }}>
        <ListItemText primary={props.title} />
      </ListItem>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth = 'xl'>
        <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>
          <TextField
            id="filled-multiline-flexible"
            multiline
            rowsMax={4}
            autoFocus
            margin="dense"
            id="name"
            value={props.body}


            fullWidth
          />
        </DialogContent>
        <DialogActions >
          {/* <Button onClick={handleClose} color="primary" >
            Cancel
          </Button> */}
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}