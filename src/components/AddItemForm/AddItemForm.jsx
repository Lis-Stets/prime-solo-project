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

function AddItemForm(props) {

  const thisViewIdReducer = useSelector((store) => store.thisViewIdReducer);
  const dispatch = useDispatch();

  //hooks hold the states for change and click events
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [size, setSize] = useState('');
  const [image, setImage] = useState('');


  //functions to handle change and click events
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSetSize = (event) => {
    setSize(event.target.value);
  };

  const handleSetImage = (event) => {
    setImage(event.target.value);
  };
    
  const handleCreate = (event) =>{
    const newItem = {
      description: description, 
      size: size,
      image: image,
      closet_bin_id: thisViewIdReducer
    }

    description.length === 0 ||
    size.length === 0 ||
    image.length === 0 
      ? alert('Please select ../../images/short_sleeve_shirt_icon.png or bin and add a name.')
    :
    dispatch({
        type: 'ADD_ITEM', payload: newItem,
      });
      setOpen(false);
  };

  return(
    <div align="center">
      <Button onClick={handleClickOpen} variant="contained" color="secondary" justify="center">
        Add Item
      </Button> 
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Item</DialogTitle>
        <br />
        <DialogContent>
          <FormControl fullWidth>
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Add a brief description"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChangeDescription}
            />
          </FormControl>
            <br />
          <FormControl fullWidth>
            <Select
              labelId="select-size"
              id="select-size"
              value={''}
              label="Select Size"
              onChange={handleSetSize}
              >
              <MenuItem value={'XS'}>XS</MenuItem>
              <MenuItem value={'S'}>S</MenuItem>
              <MenuItem value={'M'}>M</MenuItem>
              <MenuItem value={'L'}>L</MenuItem>
              <MenuItem value={'NB'}>NB</MenuItem>
              <MenuItem value={'0-3m'}>0-3m</MenuItem>
              <MenuItem value={'3-6m'}>3-6m</MenuItem>
              <MenuItem value={'9-12m'}>9-12m</MenuItem>
              <MenuItem value={'12m'}>12m</MenuItem>
              <MenuItem value={'18m'}>18m</MenuItem>
              <MenuItem value={'24m'}>24m</MenuItem>
              <MenuItem value={'2T'}>2T</MenuItem>
              <MenuItem value={'3T'}>3T</MenuItem>
              <MenuItem value={'4T'}>4T</MenuItem>
              <MenuItem value={'5T'}>5T</MenuItem>
            </Select>
          </FormControl>
            <br />
          <FormControl fullWidth>
            <Select text color='primary'
              labelId="select-image"
              id="select-image"
              value={''}
              label="Select Image"
              onChange={handleSetImage}
              >
              <MenuItem value={'../../images/short_sleeve_shirt_icon.png'}>Short Sleeve Shirt</MenuItem>
              <MenuItem value={'../../images/shorts_icon.png'}>Shorts</MenuItem>
              <MenuItem value={'../../images/skirt_icon.png'}>Skirt</MenuItem>
              <MenuItem value={'../../images/pants_icon.png'}>Pants</MenuItem>
              <MenuItem value={'../../images/overalls_icon.png'}>Overalls</MenuItem>
              <MenuItem value={'../../images/long_sleeve_shirt_icon.png'}>Long Sleeve Shirt</MenuItem>
              <MenuItem value={'../../images/dress_icon.png'}>Dress</MenuItem>
              <MenuItem value={'../../images/bodysuit_icon.png'}>Bodysuit</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreate}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddItemForm;
