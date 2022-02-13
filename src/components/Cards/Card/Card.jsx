import React from 'react';

import { Card, CardContent, Typography, Grid } from '@mui/material';

import CountUp from 'react-countup';

import cx from 'classnames';

import styles from './Card.module.css';

const CardComponent = ({ className, title, value, date, subtitle }) => {
    return (
        <Grid item xs={12} md={3} component={ Card } className={cx(styles.card, className)}>
            <CardContent>
                <Typography color='textSecondary' gutterBottom>
                    { title }
                </Typography>
                <Typography variant='h5' component='strong'>
                    <CountUp start={0} end={value} duration={3} separator=',' />
                </Typography>
                <Typography color='textSecondary'>
                    { new Date(date).toDateString() }
                </Typography>
                <Typography variant='h6'>
                    { subtitle }
                </Typography>
            </CardContent>
        </Grid>
    )
} ;

export default CardComponent;
