import React from 'react';
import ViewsChart from "../../components/General/Charts/ViewsChart/ViewsChart";

const General = () => {
    return (
        <div>
            <div className="admin-title">Привет, Андрей!</div>
            <div className="first-chart">
                Всего просмотров
                <ViewsChart />
            </div>
        </div>
    );
};

export default General;
