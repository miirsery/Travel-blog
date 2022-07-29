import React from 'react';
import AdminCard from "../../components/Admins/AdminCard";
import {Box, Typography} from "@mui/material";
import usersData from "../../db/users.json"
import { UserType } from "../../types/user.type";
import styles from './admins.module.scss'

const users: UserType[] = usersData

const Admins = () => {
    return (
        <div className={styles.admins}>
            <Typography className="admins__title" gutterBottom variant="h1" component="h1">
                Администраторы
            </Typography>
             {/*TODO: Прижать к правому краю, чтобы элементы приходили слева, а не справа.*/}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    rowGap: '25px',
                    columnGap: '80px',
                }}
            >
                { users.map((user: UserType) =>  <AdminCard user={user} key={user.id} /> ) }
            </Box>
        </div>
    );
};

export default Admins;
