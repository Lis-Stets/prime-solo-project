import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

//import MUI components from material UI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import  Dialog from '@mui/material/Dialog';
import  DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function AddClosetBinForm(props) {

  const addClosetBinReducer = useSelector((store) => store.addClosetBinReducer);
  const dispatch = useDispatch();

  //hooks hold the states for change and click events
  const [open, setOpen] = useState(false);
  const [closet, setCloset] = useState(null);
  const [name, setName] = useState('');


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


  //send the input of the selected value to a saga to be stored for later
  const setClosetBin = (event) =>{
    const closetOrBin = event.target.value;
    console.log( 'closetOrBin is set to:', closetOrBin );
    dispatch({
      type: 'CLOSET_OR_BIN', payload: {closetOrBin},
    });
  };
  
  //check inputs and send dispatch to addClosetBinSaga
  const handleCreate = (event) =>{
    // closet === null ||
    // name.length === 0
    //   ? alert('Please select closet or bin and add a name.')
    // :
    dispatch({
        type: 'ADD_CLOSET_BIN', payload: {addClosetBinReducer, name},
      });
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
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel id="closet-or-bin-label">Closet or Bin?</InputLabel>
            <Select
              labelId="closet-or-bin-label"
              id="closet-or-bin"
              value={''}
              label="Closet or Bin?"
              onChange={setClosetBin}
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreate}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddClosetBinForm;
