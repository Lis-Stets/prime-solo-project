import React, { useState } from 'react';
import {useSelector} from 'react-redux';
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



//This component will display all of a user's closets and bins as well as the add closet/bin form
function HomePage(props) {
  //hooks
  const [heading, setHeading] = useState('Functional Component');
  //allows us to use reducers from the store
  const user = useSelector((store) => store.user);

  //create a car to use in our MUI grid
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" align='center'>
         BIN NAME 
        </Typography>
      </CardContent>
    </React.Fragment>
  );

 //the return is what is displayed to the user
 return (
   <div> 
       <h1 align="center"> {user.username}'s Home</h1>


       {/* creates a grid to display image content */}
       <Grid container display="flex" wrap="wrap" justifyContent="center" spacing={2} padding={5}>
             <Grid item xs={4}>
                <Card variant="outlined">{card}</Card>
             </Grid>
             <Grid item xs={4}>
                <Card variant="outlined">{card}</Card>
             </Grid>
             <Grid item xs={4}>
                <Card variant="outlined">{card}</Card>
             </Grid>
      </Grid>  
       <div align="center">
         <Button variant="contained" color="secondary" justify="center">Add Closet or Bin</Button> 
       </div>
       <Grid container display="flex" wrap="wrap" justifyContent="center" spacing={2} padding={5}>
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
             </Grid>
             <Grid item xs={10}>
                <Card variant="outlined">{card}</Card>
             </Grid>
       </Grid>
   </div>
 );
}

export default HomePage;


