import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import shortShirtIcon from '../../images/short_sleeve_shirt_icon.png';
import skirtIcon from '../../images/skirt_icon.png';
import pantsIcon from '../../images/pants_icon.png';
import overallsIcon from '../../images/overalls_icon.png';
import dressIcon from '../../images/dress_icon.png';
import shortsIcon from '../../images/shorts_icon.png';


//import MUI components from material UI
import { Grid } from '@mui/material'
import Button from '@mui/material/Button'
// import { MuiThemeProvider, createTheme } from '@mui/material/styles';

//use createTheme to change theme colors
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#F2D360',
//     },
//     secondary: {
//       main: '#C5F8DE',
//     },
//   },
// });

//This component will display items from one of a user's closets or bins
function ClosetBinView(props) {
  //allows us to use reducers from the store
  const store = useSelector((store) => store);
  //hooks
  const [heading, setHeading] = useState('Functional Component');

  //the return is what is displayed to the user
  return (
    //creates a grid to display image content
    <div> 
      <h1> Gwen's Closet</h1>
      <br />
      <Button variant="contained" color="primary">Add Item</Button> <Button variant="contained" color="secondary">Edit</Button>
      <br />
      <Grid container display="flex" wrap="wrap" justify="center" spacing={2}>
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
