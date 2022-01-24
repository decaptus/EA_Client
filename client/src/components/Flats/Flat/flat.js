import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent,CardHeader, Avatar,CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import './price.css';
import FlatInfo from '../../FlatInfo/FlatInfo';
import { Grid, Box } from '@material-ui/core';
import { deleteFlat } from '../../../api'; 
import { Link, useHistory} from 'react-router-dom'; 
import {getFlat } from '../../../actions/flats';

const Flat = ({ flat }) => {
  const dispatch = useDispatch();
  const flats = useStyles();
  const [pulsadoInfo, setPulsadoInfo] = useState(false); 
  const history = useHistory();
  const [flatData, setFlatData]=useState(null);
  let start = true;

  useEffect(() => {
      
    if (!flatData) {
      dispatch(getFlat(flat._id)).then(val=>{
        if(start){
      setFlatData(val)}});
    }
    return()=>{
      start=false
    }
  },[flatData]);  

  return (
     <Card className={flats.card}>
      {pulsadoInfo ? (
        <FlatInfo />
      ) : (
        <Card className={flats.card}>
          <CardMedia className={flats.media} image={flat.picture || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={flat.name} />
          <div className={flats.overlay}>
            <Typography variant="h6">{flat.creator}</Typography>
          </div>

          <Grid container spacing={2}>

            <Grid item xs={3}>
              <Button size="small" variant="contained" color="secondary" onClick={() => { 
                //this.update()
                deleteFlat(flat._id)}}>
                <DeleteIcon fontSize="small" />
                Delete
              </Button>
              <Link to="/chat" style={{ textDecoration: 'none' }}>
                <Button size="small" variant="contained" color="secondary" >
                  Go to chat with {flat.creator}
                </Button>
              </Link>
            </Grid>
          </Grid>

          <Typography className={flats.title} gutterBottom variant="h5" component="h2">{flat.name}</Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{flat.description}</Typography>
          </CardContent>
          <CardActions className={flats.cardActions}>
            <Typography className="card-price" component="p">{flat.price} €</Typography>
          </CardActions>

        </Card>
      )}
    </Card>
  );
  
};

export default Flat;