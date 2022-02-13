import { React, useState, useEffect } from 'react';

import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../API';

import styles from './Chart.module.css';

import chartsDescription from './index';


const Charts = ({ data: {confirmed, recovered, deaths}, country}) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect( async () => {
        setDailyData(await fetchDailyData());
    });

    const lineChart = (
        dailyData[0] ? (
        <Line
            type='line'
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [ {
                    label: 'Infected',
                    data: dailyData.map((data) => data.confirmed),
                    fill: false,
                    borderColor: 'rgba(51, 51, 255, 0.5)',
                    backgroundColor: 'rgba(51, 51, 255, 0.5)',
                    borderDash: [],
                    tension: 0.1,
                    pointHoverBackgroundColor: 'black',
                    pointHoverBorderWidth: 4,
                }, {
                    label: 'Recovered',
                    data: dailyData.map((data) => data.recovered),
                    fil: false,
                    borderColor: 'rgba(51, 255, 51, 0.5)',
                    backgroundColor: 'rgba(51, 255, 51, 0.5)',
                    borderWidth: 1,
                    borderDash: [],
                    tension: 0.1,
                    pointHoverBackgroundColor: 'black',
                    pointHoverBorderWidth: 4,
                }, {
                    label: 'Deaths',
                    data: dailyData.map((data) => data.deaths),
                    fill: false,
                    borderColor: 'rgba(255, 51, 51, 0.5)',
                    backgroundColor: 'rgba(255, 51, 51, 0.5)',
                    borderWidth: 1,
                    borderDash: [],
                    tension: 0.1,
                    pointHoverBackgroundColor: 'black',
                    pointHoverBorderWidth: 4,
                }]
            }}
        /> 
        ) : null
    );

    const barChart = (
        confirmed ? (
            <Bar 
                type='bar'
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: `${country}`,
                            backgroundColor: ['rgba(51, 51, 255, 0.5)', 'rgba(51, 255, 51, 0.5)', 'rgba(255, 51, 51, 0.5)'],
                            data: [confirmed.value, recovered.value, deaths.value],
                            barPercentage: 0.6,
                            hoverBackgroundColor: ['rgba(51, 51, 255, 0.6)', 'rgba(51, 255, 51, 0.6)', 'rgba(255, 51, 51, 0.6)'],
                            pointHoverBackgroundColor: 'black',
                            pointStyle: 'star',
                            skipnull: true,
                        }
                    ]
                }}
                option={{
                    title: { display: true, text: `Current state of ${country}`}
                }}
            />
        ) : null
    );

    return (
        <div className={ styles.container }>
            {country ? barChart : lineChart}
        </div>
    );
};

export default Charts;