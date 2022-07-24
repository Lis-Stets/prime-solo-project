import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

//import MUI components from material UI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import  Dialog from '@mui/material/Dialog';
import  DialogActions from '@mui/material/DialogActions';
import DalogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function AddClosetBinForm(props) {

  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  //hooks hold the states for change and click events
  const [open, setOpen] = React.useState(false);
  const [closet, setCloset] = React.useState(null);
  const [name, setName] = React.useState('');
  const [closetBinType, setClosetBinType] = React.useState('');

  //functions to handle change and click events
  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSelect = (event) => {
    setClosetBinType(event.target.value);
  };

  const closetBinSet = () => {
    if(closetBinType === 'Closet'){
      setCloset(true)
    } 
    else if(closetBinType === 'Bin'){
      setCloset(false)
    }
  };

  //create object to send with dispatch to addClosetBinSaga
  const addClosetBin = () =>{
    closetBinSet();
    // closet === null ||
    // name.length === 0
    //   ? alert('Please select closet or bin and add a name')
      // :
       dispatch({
          type: 'ADD_CLOSET_BIN', payload: { closet, name },
      }) &
      console.log( 'new closet or bin:', {closet, name}) &
      setOpen(false);
  };

  return(
    <div align="center">
      <Button onClick={handleClickOpen} variant="contained" color="secondary" justify="center">
        Add Closet or Bin
      </Button> 
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a Closet or Bin</DialogTitle>
        <br />
        <DalogContent>
          <FormControl fullWidth>
            <InputLabel id="closet-or-bin-label">Closet or Bin?</InputLabel>
            <Select
              labelId="closet-or-bin-label"
              id="closet-or-bin"
              value={closetBinType}
              label="Closet or Bin?"
              onChange={handleSelect}
              >
              <MenuItem value={'Closet'}>Closet</MenuItem>
              <MenuItem value={'Bin'}>Bin</MenuItem>
            </Select>
            <br />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Child's Name or Name of Bin"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChangeName}
          />
          </FormControl>
        </DalogContent>
        <DialogActions>
          <Button onClick={addClosetBin}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddClosetBinForm;
