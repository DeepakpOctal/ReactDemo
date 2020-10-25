import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from "./FooterStyle";


const useStyles = makeStyles(styles);


export default function Footer() {
  const classes = useStyles();
  

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <p className={classes.right}>        <span>
             &copy; {1900 + new Date().getYear()}{" "}
             <a
               href="https://www.octalframes.com"
               target="_blank"
               className={classes.a}
             >
               Octalframes
             </a>
             
           </span>
         </p>
      </CardContent>
      
    </Card>
  );
}
