import React, { useState } from 'react';
//import redux to access the store
import {useDispatch, useSelector} from 'react-redux';
//import useHistory to be able to use history
import { useHistory } from 'react-router-dom';
import closetReducer from '../../redux/reducers/closet.reducer';

//import MUI components from material UI
import { colors, Grid } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function BinCard({bin}) {
  //allows us to send dispatches
  const dispatch = useDispatch();
  //call useHistorty to be able to use history
  const history = useHistory();
  //allows us to use reducers from the store
  const store = useSelector((store) => store);
  //hooks
  const [binId, setBinId] = useState(null);

  const openBin = (thisBinId) => {
    console.log('THIS IS THIS BIN ID', thisBinId)
    //capture the movie id in the hook
    setBinId( thisBinId );
    //send dispatch to set the id for this closet
    dispatch({ type: 'SET_THIS_VIEW_ID', payload: thisBinId});
    //send dispatch to genres saga to get genres for this movie id
    dispatch({ type: 'GET_ITEMS', payload: thisBinId});
    dispatch({ type: 'GET_NAME', payload: thisBinId});
    //function to switch to closet/bin view component through hash router
    history.push( '/closetbin' );  
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Button align='center' color='secondary' onClick={ () => openBin(bin.id)}>{bin.name}</Button>
      </CardContent>
    </React.Fragment>
  );

  return(
    <div>
      <Grid item xs={12}>
          <Card variant="outlined">{card}</Card>  
      </Grid> 
    </div>
  );
}

export default BinCard;
