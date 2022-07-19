import React from 'react';
import AdminCard from "../../components/Admins/AdminCard";
import {Box} from "@mui/material";

const Admins = () => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '80px' }}>
            <AdminCard />
            <AdminCard />
        </Box>
    );
};

export default Admins;
