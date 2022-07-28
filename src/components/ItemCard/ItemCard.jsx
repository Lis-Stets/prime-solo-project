import React, { useState } from 'react';
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


function ItemCard({item}) {
  //allows us to use reducers from the store
  const closetBinReducer = useSelector((store) => store.closetBinReducer);
  //hooks
  const [heading, setHeading] = useState('Functional Component');
  const [newLocation, setNewLocation] = useState(null);


  const moveItem = (item) => {
    console.log('look up pop up dialogue');
  }

  const deleteItem = (item) => {
    console.log('delete this barn door');
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
        <Button onClick={moveItem} variant="outlined" color='secondary'>move</Button><Button onClick={deleteItem} variant= 'outlined' color='secondary'>delete</Button>
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
