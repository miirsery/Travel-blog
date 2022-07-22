import React from 'react';
import ViewsChart from "../../components/General/Charts/ViewsChart/ViewsChart";
import {Box} from "@mui/material";

const General = () => {
    return (
        <div>
            <div className="admin-title">Привет, Андрей!</div>
            <Box sx={{ display: 'flex' }}>
                <div className="first-chart">
                    Всего просмотров
                    <ViewsChart />
                </div>
            </Box>

        </div>
    );
};

export default General;
