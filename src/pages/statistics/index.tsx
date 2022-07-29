import React from 'react';
import {Box, Typography} from "@mui/material";
import styles from './index.module.scss'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => Math.random()),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => Math.random()),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};
const Settings = () => {
    return (
        <div className="settings">
            <Box>
                <Typography
                    className={styles['settings__title']}
                    gutterBottom
                    variant="h1"
                    component="h1"
                >
                    Статистика
                </Typography>
                <div className={styles['settings__all-views']}>
                    <Line options={options} data={data} />;
                </div>
                <Box sx={{
                    display: 'flex'
                }}>
                    <Box className="settings__active-users">
                        acitveUsers
                    </Box>
                    <Box className="settings__rating-cities">
                        ratingCities
                    </Box>
                </Box>
            </Box>
            <Box>
                Привет, Андрейка
                <span>Утречка или чо там у тебя</span>
            </Box>
        </div>
    );
};

export default Settings;
