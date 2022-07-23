import React, { useState } from 'react';
import {useSelector} from 'react-redux';

//import MUI components from material UI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import  Dialog from '@mui/material/Dialog';
import  DialogActions from '@mui/material/DialogActions';
import DalogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import SelectInput from '@mui/material/Select/SelectInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function AddClosetBinForm(props) {

  const store = useSelector((store) => store);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = () => {
    console.log('change');
    };

  return(
    <div align="center">
      <Button onClick={handleClickOpen} variant="contained" color="secondary" justify="center">
        Add Closet or Bin
      </Button> 
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a Closet or Bin</DialogTitle>
        <DalogContent>
          <FormControl fullWidth>
            <InputLabel id="closet-or-bin-label">Closet or Bin?</InputLabel>
            <Select
              labelId="closet-or-bin-label"
              id="closet-or-bin"
              value={"Closet or Bin?"}
              label="Closet or Bin?"
              onChange={handleChange}
              >
              <MenuItem value={true}>Closet</MenuItem>
              <MenuItem value={false}>Bin</MenuItem>
            </Select>
          </FormControl>
        </DalogContent>
        <DialogActions>
          <Button onCLick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddClosetBinForm;
