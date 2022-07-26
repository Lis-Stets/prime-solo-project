import React, { useState } from 'react';
//import redux to access the store
import {useDispatch, useSelector} from 'react-redux';

//import MUI components from material UI
import { colors, Grid } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ItemCard({item}) {
  //allows us to use reducers from the store
  const store = useSelector((store) => store);
  //hooks
  const [heading, setHeading] = useState('Functional Component');

  const card = (
    <React.Fragment>
      <CardContent>
        <img src={item.image} alt='item image'/>
        <Typography variant="p" align='center'>
          {item.description}
        </Typography>
        <Typography variant="p" align='center'>
          {item.size}
        </Typography>
        <Button></Button>
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

export default ItemCard;
