import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Resource name</Title>
      <Typography component="p" variant="h4">
        Price: 1$
      </Typography>
      <Typography color="textSecondary" flex='1'>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary">
          Buy
        </Link>
      </div>
    </React.Fragment>
  );
}