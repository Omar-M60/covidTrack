import React from 'react';
import { Grid } from '@mui/material';

import CardComponent from './Card/Card';

import styles from './Cards.module.css';

const CardsInfo = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return 'Loading...';
    }

    return (
        <div className={ styles.container }>
            <Grid container spacing={5} justify='center'>
                <CardComponent 
                className={ styles.infected } 
                title='Infected' 
                value={ confirmed.value } 
                date={ lastUpdate } 
                subtitle='Number of active cases from Covid-19' 
                />

                <CardComponent 
                className={ styles.recovered } 
                title='Recovered' 
                value={ recovered.value } 
                date={ lastUpdate } 
                subtitle='Number of recovered cases from Covid-19' 
                />

                <CardComponent 
                className={ styles.deaths } 
                title='Deaths' 
                value={ deaths.value }
                date={ lastUpdate } 
                subtitle='Number of fatalities from Covid-19' 
                />
            </Grid>
        </div>
    )
};

export default CardsInfo;