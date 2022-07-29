import React from 'react';
import AdminCard from "../../components/Admins/AdminCard";
import {Box, Typography} from "@mui/material";
import usersData from "../../db/users.json"
import {UserType} from "../../types/user.type";

const users: UserType[] = usersData

const Admins = () => {
    return (
        <div className="admins">
            <Typography className="admins__title" gutterBottom variant="h1" component="h1">
                Администраторы
            </Typography>
             {/*TODO: Блоки изначально прижимаются к правому краю. Исправить.*/}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    rowGap: '25px',
                    columnGap: '80px',
                    justifyContent: 'flex-end'
                }}
            >
                { users.map((user: UserType) =>  <AdminCard user={user} key={user.id} /> ) }
            </Box>
        </div>
    );
};

export default Admins;
