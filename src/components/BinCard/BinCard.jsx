import React, { useState } from 'react';
//import redux to access the store
import {useDispatch, useSelector} from 'react-redux';
//import Link to allow us to click the card
import { Link } from 'react-router-dom';
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
  //allows us to use reducers from the store
  const store = useSelector((store) => store);
  //hooks
  const [heading, setHeading] = useState('Functional Component');

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h6" alignContent={"center"}>
          {bin.name}
        </Typography>
        <Button></Button>
      </CardContent>
    </React.Fragment>
  );

  return(
    <div>
      
      <Grid item xs={12}>
        <Link to={`/closetBin/${bin.id}`}>
          <Card variant="outlined">{card}</Card>  
        </Link>
      </Grid> 
    </div>
);
}

export default BinCard;
