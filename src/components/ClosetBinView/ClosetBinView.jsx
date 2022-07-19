import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import shortShirtIcon from '../../images/short_sleeve_shirt_icon.png';

//import MUI components from material UI
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

//This component will display items from one of a user's closets or bins

function ClosetBinView(props) {
  //allows us to use reducers from the store
  const store = useSelector((store) => store);
  //hooks
  const [heading, setHeading] = useState('Functional Component');

  //the return is what is displayed to the user
  return (
    <div>
    <h2>{heading}</h2>
    </div>
  );
}



export default ClosetBinView;
