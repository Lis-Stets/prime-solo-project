import React, { useState } from 'react';
import './HomePage.css';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';


//images imported to test
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
          <div className='username' align="center">
          {/* display the logged in user's name */}
          <Typography variant='h2' >{user.username}'s Home</Typography>
          </div>
          <div className='grid' align='center'>
            {/* display the closets for the logged in user once they are fetched from the database  */}
            <Grid  container display={"flex"} wrap={"wrap"} justifyContent={"space-evenly"} alignContent={"center"} spacing={5} padding={2}>
              {closetReducer.map((closet) => {
                return(
                  <ClosetCard closet={closet} key={closet.id}/>
                  );
                })}
            </Grid>  
            </div>
            <br />
            <AddClosetBinForm justifyContent={"center"}/>
            <div>
              <br />
              <br />
            {/* display the closets for the logged in user once they are fetched from the database  */}
            <Grid container display={"flex"} wrap={"wrap"} justifyContent={"space-around"} alignContent={"center"} spacing={2} padding={5}>
              {binReducer.map((bin) => {
                return(
                  <div>
                      <BinCard bin={bin} key={bin.id}/>
                  </div>
                );
              })}
            </Grid>
            </div>
        </div>
   </div>
 );
}

export default HomePage;


