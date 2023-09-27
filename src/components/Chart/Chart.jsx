import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect, useState } from 'react';

const Chart = () => {

    const [myDonation, setMyDonation] = useState(0);

    useEffect(() => {
        const storedItem = JSON.parse(localStorage.getItem('donate'));
        if (storedItem !== null) {
            setMyDonation(storedItem.length);
        }
    }, [])

    const data = [
        { label: 'My Donation', value: myDonation, color: '#00C49F' },
        { label: 'Total Donation', value: 12 - myDonation, color: 'red' },
    ];

    const sizing = {
        margin: { right: 10 },
        width: 500,
        height: 500
    };

    const TOTAL = 12;

    const getArcLabel = (params) => {
        const percent = params.value / TOTAL;
        return `${(percent * 100).toFixed(1)}%`;
    };


    return (
        <PieChart
            series={[
                {
                    outerRadius: 150,
                    data,
                    arcLabel: getArcLabel,
                },
            ]}
            legend={{
                direction: "row",
                position: {
                  vertical: "middle",
                  horizontal: "middle"
                }
              }}
              sx={{
                "--ChartsLegend-itemWidth": "130px",
                "--ChartsLegend-rootOffsetX": "0px",
                "--ChartsLegend-rootOffsetY": "200px",
              }}
            {...sizing}
        />
    )
};

export default Chart;
