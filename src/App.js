import { React, useState, useEffect } from 'react';

import { Cards, Chart, CountryPicker} from './components';

import { fetchData } from './API/index'

import image from './images/image.png';

import styles from './App.module.css';

const App = () => {

    const [data, setData] = useState({});

    useEffect( async () => {
        setData(await fetchData());
    }, []);

    const [country, setCountry] = useState('');
    
    async function handleCountryChange(country) {
        const data = await fetchData(country);
        setData(data);
        setCountry(country);
    };

    useEffect(() => {
        return handleCountryChange();
    }, []);

    return (
        <div className={ styles.container }>
            <img className={ styles.image } src={ image } alt='Covid-19' />
            <Cards data={data}/>
            <CountryPicker handleCountryChange={handleCountryChange}/>
            <Chart data={data} country={country}/>
        </div>
    )
};

export default App;