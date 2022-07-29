import React from 'react';
import {Box, Typography} from "@mui/material";
import styles from './index.module.scss'

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
                    ...
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
