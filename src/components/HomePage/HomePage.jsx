import React, { useState } from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import shortShirtIcon from '../../images/short_sleeve_shirt_icon.png';
import skirtIcon from '../../images/skirt_icon.png';
import pantsIcon from '../../images/pants_icon.png';
import overallsIcon from '../../images/overalls_icon.png';
import dressIcon from '../../images/dress_icon.png';
import shortsIcon from '../../images/shorts_icon.png';
import userReducer from '../../redux/reducers/user.reducer';

//import MUI components from material UI
import { colors, Grid } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ClosetCard from '../ClosetCard/ClosetCard';



//This component will display all of a user's closets and bins as well as the add closet/bin form
function HomePage(props) {
  //hooks
  const [heading, setHeading] = useState('Functional Component');
  //allows us to use reducers from the store
  const user = useSelector((store) => store.user);
  const closetBinReducer = useSelector((store) => store.closetBinReducer);
  //allows us to send dispatches
  const dispatch = useDispatch();

  //sends a dispatch on page load to fetch the user's closets and bins
  useEffect(() =>{
    dispatch({ type: 'GET_CLOSET_BINS', payload: user.id });
  }, []);

 //the return is what is displayed to the user
 return (
   <div> 
      {closetBinReducer.length === 0 ?(
        <h1>loading</h1>
      ):(
        <div>
          <h1 align="center"> {user.username}'s Home</h1>
          <h3>{JSON.stringify(closetBinReducer)}</h3>
          <Grid container display="flex" wrap="wrap" justifyContent="center" spacing={2} padding={5}>
            {closetBinReducer.map((closet) => {
              return(
                  <ClosetCard closet={closet}/>
              );
            })}
          </Grid>  
          {/* creates a grid to display image content */}
          <div align="center">
            <Button variant="contained" color="secondary" justify="center">Add Closet or Bin</Button> 
          </div>
          <Grid container display="flex" wrap="wrap" justifyContent="center" spacing={2} padding={5}>
                {/* <Grid item xs={10}>
                    <Card variant="outlined">{card}</Card>
                </Grid>
                <Grid item xs={10}>
                    <Card variant="outlined">{card}</Card>
                </Grid>
                <Grid item xs={10}>
                    <Card variant="outlined">{card}</Card>
                </Grid>
                <Grid item xs={10}>
                    <Card variant="outlined">{card}</Card>
                </Grid>
                <Grid item xs={10}>
                    <Card variant="outlined">{card}</Card>
                </Grid> */}
          </Grid>
        </div>
      )
      }
   </div>
 );
}

export default HomePage;


