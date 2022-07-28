import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

//import MUI components from material UI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function MoveItemDialogue(props) {

  // const addClosetBinReducer = useSelector((store) => store.addClosetBinReducer);
  // const dispatch = useDispatch();

  //hooks hold the states for change and click events
  const [open, setOpen] = useState(false);
  const [newLocation, setNewLocation] = useState(null);
  const [name, setName] = useState('');


  //functions to handle change and click events
  // const handleChangeName = (event) => {
  //   setName(event.target.value);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };


//send the input of the selected value to a saga to be stored for later
  // const setClosetBin = (event) =>{
  //   const closetOrBin = event.target.value;
  //   console.log( 'closetOrBin is set to:', closetOrBin );
  //   dispatch({
  //     type: 'CLOSET_OR_BIN', payload: {closetOrBin},
  //   });
  // };
  
  //check inputs and send dispatch to addClosetBinSaga
  const handleMoveItem = (event) =>{
    // closet === null ||
    // name.length === 0
    //   ? alert('Please select closet or bin and add a name.')
    // :
    // dispatch({
    //     type: 'ADD_CLOSET_BIN', payload: {addClosetBinReducer, name},
    //   });
    //   setOpen(false);
  };

  return(
    <div align="center">
      <Button onClick={handleClickOpen} variant="outlined" color="secondary" justify="center">
        Move
      </Button> 
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Where to?</DialogTitle>
        <br />
        <DialogContent>
          <FormControl fullWidth>
            <Select
              labelId="where-to-move"
              id="where-to-move"
              value={''}
              // label="Closet or Bin?"
              onChange={setNewLocation}
              >
              {/* {closetBinReducer.map((bin) => {
              return(
                  <div bin={bin}>
                    <MenuItem value={bin.id}>{}bin.name</MenuItem>
                  </div>
              );
            })} */}
              <MenuItem value={'Bin'}>Bin</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleMoveItem}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MoveItemDialogue;
