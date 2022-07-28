import React, { useState } from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
//import useHistory to move between component pages
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

//images imported to test
import shortShirtIcon from '../../images/short_sleeve_shirt_icon.png';
import skirtIcon from '../../images/skirt_icon.png';
import pantsIcon from '../../images/pants_icon.png';
import overallsIcon from '../../images/overalls_icon.png';
import dressIcon from '../../images/dress_icon.png';
import shortsIcon from '../../images/shorts_icon.png';
import userReducer from '../../redux/reducers/user.reducer';
import ClosetCard from '../ClosetCard/ClosetCard';
import BinCard from '../BinCard/BinCard';
import AddClosetBinForm from '../AddClosetBinForm/AddClosetBinForm';

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
  const closetReducer = useSelector((store) => store.closetReducer);
  const binReducer = useSelector((store) => store.binReducer);
  //allows us to send dispatches
  const dispatch = useDispatch();

  //sends a dispatch on page load to fetch the user's closets and bins
  useEffect(() =>{
    dispatch({ type: 'GET_CLOSETS', payload: user.id });
    dispatch({ type: 'GET_BINS', payload: user.id });
  }, []);

 //the return is what is displayed to the user
 return (
   <div> 
    {/* use a ternary operator so that a loading placeholder displays while the on page load get calls run */}
      {/* {closetReducer.length === 0 ?(
        <h1>loading</h1>
      ):( */}
        <div>
          {/* display the logged in user's name */}
          <h1 align="center"> {user.username}'s Home</h1>
          <br />
          {/* display the closets for the logged in user once they are fetched from the database  */}
          <Grid container display={"flex"} wrap={"wrap"} justifyContent={"space-evenly"} alignContent={"center"} spacing={5} padding={2}>
            {closetReducer.map((closet) => {
              return(
                  <ClosetCard closet={closet}/>
              );
            })}
          </Grid>  
          {/*  */}
          <AddClosetBinForm/>
          {/* display the closets for the logged in user once they are fetched from the database  */}
          <Grid container display={"flex"} wrap={"wrap"} justifyContent={"space-evenly"} alignContent={"center"} spacing={2} padding={5}>
            {binReducer.map((bin) => {
              return(
                  <div>
                    <BinCard bin={bin}/>
                  </div>
              );
            })}
          </Grid>
        </div>
      {/* )
      } */}
   </div>
 );
}

export default HomePage;


