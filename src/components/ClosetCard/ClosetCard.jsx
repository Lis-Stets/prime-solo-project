import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import closetBinReducer from '../../redux/reducers/closetBin.reducer';

//import MUI components from material UI
import { colors, Grid } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ClosetCard({closet}) {
  //hooks
  //allows us to use reducers from the store
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" align='center'>
        {closet.name}'s Closet
      </Typography>
    </CardContent>
  </React.Fragment>
);

  return(
    <div>
      <Grid item xs={4}>
        <Card variant="outlined">{card}</Card>  
      </Grid> 
    </div>
);
}

export default ClosetCard;
