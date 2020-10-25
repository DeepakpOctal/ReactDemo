import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Foot from './Card/CardFooter'
import Head from './Card/CardHeader' 
import MBody from './BodyContent/BodyCOntent'

const useStyles = makeStyles({
 
});

export default function OutlinedCard() {
  const classes = useStyles();
 

  return (
    <div>

      <Head></Head>
      <MBody></MBody>
      <Foot></Foot>
    </div>
  );
}