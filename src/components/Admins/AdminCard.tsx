import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import admin from '/images/admin.png'
import styles from './index.module.scss'
const AdminCard = () => {
    return (
        <Card sx={{ maxWidth: 300, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CardMedia
                className={styles['admin-card__image']}
                component="img"
                alt="admin"
                image={admin}
                sx={{
                    height: '150px',
                    width: '150px',
                }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Андрей Голубев
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    Активен
                </Typography>
            </CardContent>
        </Card>
    );
};

export default AdminCard;
