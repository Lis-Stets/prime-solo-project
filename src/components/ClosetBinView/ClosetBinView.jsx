import React, { useState } from 'react';
import './ClosetBinView.css';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
//import useParams to get id of bin to display 
import { useParams } from 'react-router-dom';
//import components to be displayed here
import ItemCard from '../ItemCard/ItemCard';
import AddItemForm from '../AddItemForm/AddItemForm';

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
  const id = useSelector((store) => store.thisIdReducer);
  const nameReducer = useSelector((store) => store.nameReducer);
  //allows us to send dispatches
  const dispatch = useDispatch();

  //hooks
  // const [heading, setHeading] = useState('Functional Component');
  // let { id } = useParams();

  useEffect(() =>{
    console.log( 'WHAT IS IT:', id);
    // dispatch({ type: 'GET_ITEMS', payload: id});
    // dispatch({ type: 'SET_THIS_VIEW_ID', payload: id});
    // dispatch({ type: 'GET_NAME', payload: id});
  }, []);
  
  //the return is what is displayed to the user
  return (
    <div>
      {nameReducer.length === 0 ? 
      (<p>loading...</p>) 
      : 
      (<div> 
          <div align='center' className='name'>
            <Typography variant='h3' >{nameReducer[0].name}</Typography>
          </div>
        <br />
        <br />
        <AddItemForm align="center"/> 
        <div className='grid' align='center'>
          {/*  display the items for the user's closet or bin once they are fetched from the database  */}
          <Grid container display={"flex"} wrap={"wrap"} justifyContent={"space-around"} alignContent={"center"}  spacing={5} padding={2}>
          {itemsReducer.map((item) => {
            return(
              <ItemCard item={item} key={item.id}/>
              );
            })}
          </Grid>  
        </div>
        </div>
      )
        }
        </div>
        );
}

export default ClosetBinView;
