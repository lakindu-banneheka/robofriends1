
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    maxWidth:250,
    height:325,
     background:"green",
  },
  roboimg: {
    height:200,
    width:200,
  }
 
});



export default function RCard() {
    const classes = useStyles();
    
  
    return (
      <card className={classes.root}>
        <div>
            <div className={classes.roboimg}
            component="img"
            alt="Robot Cartoon"
            image="https://robohash.org/test"
            title="Robot" // title use for what .. why it is in here..???
            />
                
           
        </div>
      </card>
    );
  }
  