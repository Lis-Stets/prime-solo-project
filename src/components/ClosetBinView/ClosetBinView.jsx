import React, { useState } from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
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

import Typography from '@mui/material/Typography';

//This component will display items from one of a user's closets or bins
function ClosetBinView(props) {
  //allows us to use reducers from the store
  const itemsReducer = useSelector((store) => store.itemsReducer);
  const dispatch = useDispatch();

  //hooks
  const [heading, setHeading] = useState('Functional Component');

  //-----------dispatch needs to be put into the on click for the ClosetCard and Bin Card components-----------//
  const testId = 1
  //sends a dispatch on page load to fetch the user's items
  useEffect(() =>{
    dispatch({ type: 'GET_ITEMS', payload: testId});
  }, []);
  //-----------dispatch needs to be put into the on click for the ClosetCard and Bin Card components-----------//

  //the return is what is displayed to the user
  return (
    <div> 
      {JSON.stringify(itemsReducer)}
      {/* MuiThemeProvider allows us to use the theme we created above */}
        <Typography variant='h3' align='center'>Gwen's Closet</Typography>
        <br />
        <div align="center">
          <Button variant="contained" color="secondary" justify="center">Add Item</Button> <Button variant="contained" color="secondary">Edit</Button>
        </div>
        {/* display the items for the user's closet or bin once they are fetched from the database  */}
        {/* <Grid container display={"flex"} wrap={"wrap"} justifyContent={"space-evenly"} alignContent={"center"} spacing={5} padding={2}>
            {itemsReducer.map((closet) => {
              return(
                  <ClosetCard closet={closet}/>
              );
            })}
        </Grid>   */}

        {/* creates a grid to display image content */}
        <Grid container display="flex" wrap="wrap"  align="center" spacing={2} padding={5}>
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
        </Grid>
    </div>
  );
}

export default ClosetBinView;
