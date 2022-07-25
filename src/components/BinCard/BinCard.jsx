import React, { useState } from 'react';
//import redux to access the store
import {useDispatch, useSelector} from 'react-redux';
//import useHistory to move between component pages
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
  //allows us to use history.push to switch our page
  const history = useHistory();
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
      </CardContent>
    </React.Fragment>
  );

  const handleClick = () => {
    history.push( '/closetBin');
  }
  return(
    <div>
      <Grid item xs={12}>
        <Card onClick={handleClick} variant="outlined">{card}</Card>  
      </Grid> 
    </div>
);
}

export default BinCard;
