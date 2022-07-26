import React, { useState } from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
//import useParams to get id of bin to display 
import { useParams } from 'react-router-dom';
//import components to be displayed here
import ItemCard from '../ItemCard/ItemCard';

import shortShirtIcon from '../../images/short_sleeve_shirt_icon.png';
import skirtIcon from '../../images/skirt_icon.png';
import pantsIcon from '../../images/pants_icon.png';
import overallsIcon from '../../images/overalls_icon.png';
import dressIcon from '../../images/dress_icon.png';
import shortsIcon from '../../images/shorts_icon.png';
import itemsReducer from '../../redux/reducers/items.reducer';

//import MUI components from material UI
import { colors, Grid } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

//This component will display items from one of a user's closets or bins
function ClosetBinView(props) {
  //allows us to use reducers from the store
  const itemsReducer = useSelector((store) => store.itemsReducer);
  //allows us to send dispatches
  const dispatch = useDispatch();

  //hooks
  const [heading, setHeading] = useState('Functional Component');
  let { id } = useParams();

  useEffect(() =>{
    console.log( 'WHAT IS IT:', id);
    dispatch({ type: 'GET_ITEMS', payload: id});
  }, []);
  
  //the return is what is displayed to the user
  return (
    <div> 
      {JSON.stringify(itemsReducer)}
        <Typography variant='h3' align='center'>name</Typography>
        <br />
        <div align="center">
          <Button variant="contained" color="secondary" justify="center">Add Item</Button> <Button variant="contained" color="secondary">Edit</Button>
        </div>
        <br />
        <br />
        {/*  display the items for the user's closet or bin once they are fetched from the database  */}
        <Grid container display={"flex"} wrap={"wrap"} justifyContent={"space-evenly"} alignContent={"center"} xs= {12} spacing={5} padding={2}>
            {itemsReducer.map((item) => {
              return(
                  <ItemCard item={item}/>
              );
            })}
        </Grid>  

        {/* <Grid container display="flex" wrap="wrap"  align="center" spacing={2} padding={5}>
              <Grid item xs={4}>
                <img src={shortShirtIcon} alt={'t-shirt'}/>
                <h5>Short Sleeve Shirt</h5>
                <h5>4T</h5>
              </Grid>
              <Grid item xs={4}>
                <img src={skirtIcon} alt={'t-shirt'}/>
                <h5>Teal Tutu</h5>
                <h5>S</h5>
              </Grid>
              <Grid item xs={4}>
                <img src={pantsIcon} alt={'t-shirt'}/>
                <h5>Flower Print Pants</h5>
                <h5>4T</h5>
              </Grid>
              <Grid item xs={4}>
                <img src={overallsIcon} alt={'t-shirt'}/>
                <h5>Overalls</h5>
                <h5>5T</h5>
              </Grid>
              <Grid item xs={4}>
                <img src={dressIcon} alt={'t-shirt'}/>
                <h5>Polkadot Dress</h5>
                <h5>4T</h5>
              </Grid>
              <Grid item xs={4}>
                <img src={shortsIcon} alt={'t-shirt'}/>
                <h5>Pink Shorts</h5>
                <h5>4T</h5>
              </Grid>
        </Grid> */}
    </div>
  );
}

export default ClosetBinView;
