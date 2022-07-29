import React, {useState} from 'react';
import {Box, Paper, TextField, Typography} from "@mui/material";
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
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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
}

const Settings = () => {
    const [value, setValue] = useState<Date | null>(null);

    return (
        <div className="settings">
            <Box sx={{
                maxWidth: '946px'
            }}>
                <Typography
                    className={styles['settings__title']}
                    gutterBottom
                    variant="h1"
                    component="h1"
                >
                    Статистика
                </Typography>
                <div className={styles['settings__all-views']}>
                    <Line className={styles['settings__all-views-chart']} options={options} data={data} />
                </div>
                <Box sx={{
                    display: 'flex'
                }}>
                    <Box className="settings__active-users">
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Paper sx={{ padding: '30px 30px 32px' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center' }}
                                >
                                    <div className={styles['settings__chart-title']}>Активные пользователи</div>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Box>
                            </Paper>
                        </Box>
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
