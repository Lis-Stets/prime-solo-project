import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

//import MUI components from material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function BinCard(props) {
   //hooks
  //allows us to use reducers from the store
  const store = useSelector((store) => store);
  const closetBinReducer = useSelector((store) => store.closetBinReducer);
  const [heading, setHeading] = useState('Functional Component');

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" align='center'>
        {closetBinReducer.name}
      </Typography>
    </CardContent>
  </React.Fragment>
);

  return(
    <div>
      <Card variant="outlined">{card}</Card>
    </div>
);
}

export default BinCard;
