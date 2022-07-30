import React, { useState, useEffect } from 'react';
//import redux to access the store
import {useDispatch, useSelector} from 'react-redux';


//import MUI components from material UI
import { colors, Grid } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';


function ItemCard({item}) {
  //allows us to use reducers from the store
  const binReducer = useSelector((store) => store.binReducer);
  const closetReducer = useSelector((store) => store.closetReducer);
  const thisViewIdReducer = useSelector((store) => store.thisViewIdReducer);

  //allows us to send dispatches
  const dispatch = useDispatch();
  //hooks
  const [heading, setHeading] = useState('Functional Component');
  const [newLocation, setNewLocation] = useState(null);

  const moveItem = (itemID) => {
    console.log('look up pop up dialogue', itemID);
  }

  const deleteItem = (itemID) => {
    console.log('delete this barn door', itemID );
    const deletePayload = {
      itemID: itemID,
      viewID: thisViewIdReducer
    }
    dispatch({ type: 'DELETE_ITEM', payload: deletePayload });

  }

  const card = (
    <React.Fragment>
      <CardContent>
        <img src={item.image} alt='item image'/>
        <Typography variant="p" align='center'>
          {item.description}
        </Typography>
        <Typography variant="h6" align='center'>
          {item.size}
        </Typography>
        <FormControl fullWidth>
          <Select
              labelId="where-to-move"
              id="where-to-move"
              value={''}
              // label="Closet or Bin?"
              onChange={setNewLocation}
              >
              {binReducer.map((bin) => {
                return(
                  <div bin={bin} key={bin.id}>
                  <MenuItem value={bin.id}>{bin.name}</MenuItem>
                  </div>
                  );
                })}
              {closetReducer.map((closet) => {
              return(
                <div closet={closet} key={closet.id}>
                <MenuItem value={closet.id}>{closet.name}</MenuItem>
                </div>
                );
              })}
              {/* <MenuItem value={'Bin'}>Bin</MenuItem> */}
            </Select>
          </FormControl>
        <Button onClick={() => moveItem(item.id)} variant="outlined" color='secondary'>move</Button>
        <Button onClick={() => deleteItem(item.id)} variant= 'outlined' color='secondary'>delete</Button>
      </CardContent>
    </React.Fragment>
  );

  return(
    <div>
      <Grid item xs={8}>
          <Card variant="outlined">{card}</Card>  
      </Grid> 
    </div>
);
}

export default ItemCard;
