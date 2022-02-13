import { React, useState, useEffect } from 'react';

import { Box, NativeSelect, FormControl } from '@mui/material';

import { fetchCountries } from '../../API';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
    
    const [countries, setCountries] = useState([]);

    useEffect( async () => {
        setCountries(await fetchCountries());
    }, []);

    return (
        <div className={ styles.container }>
            <Box sx={14}>
                <FormControl fullWidth>
                    <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                        <option value=''> Global </option>
                        { countries.map((country, i) => <option key={i} value={country}> {country} </option>) }
                    </NativeSelect>
                </FormControl>
            </Box>
        </div>
    )
};

export default CountryPicker;