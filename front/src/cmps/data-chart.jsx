import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import { Doughnut, PolarArea } from 'react-chartjs-2';

import { toyService } from '../services/toy.service';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);


export function DataChart({ toys }) {
    const labels = toyService.getLabels()
    let x
    labels.map(label => {

        const avrPrice = toyService.getLabelAvgPrice(label, toys)
        console.log('price', avrPrice)

        return avrPrice
    })
    const dataPrice = {


        labels,

        datasets: [
            {
                label: 'Average price for toy Category',
                // data: labels.map(label=>{

                //    const avrPrice = toyService.getLabelAvgPrice()
                //     console.log('price',avrPrice)

                //     return avrPrice 
                // }),
                // data: [12, 19, 3, 5, 2, 3, 8, 2],
                data: labels.map(label => {

                    const avrPrice = toyService.getLabelAvgPrice(label, toys)
                    console.log('price', avrPrice)

                    return avrPrice
                }),
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 190, 64, 1)',
                    'rgba(255, 120, 64, 1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 190, 64, 1)',
                    'rgba(255, 120, 64, 1)',
                ],
                borderWidth: 2,
            },
        ],
    };
    const dataStock = {


        labels,

        datasets: [
            {
                label: 'Precentage of labeld items stock',
                // data: labels.map(label=>{

                //    const avrPrice = toyService.getLabelAvgPrice()
                //     console.log('price',avrPrice)

                //     return avrPrice 
                // }),
                // data: [12, 19, 3, 5, 2, 3, 8, 2],
                data: labels.map(label => {

                    const StockPerc = toyService.getLabelStockPrec(label, toys)
                    console.log('price', StockPerc)

                    return StockPerc
                }),
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 190, 64, 1)',
                    'rgba(255, 120, 64, 1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 190, 64, 1)',
                    'rgba(255, 120, 64, 1)',
                ],
                borderWidth: 2,
            },
        ],
    };
    return (
        <div style={{ width: '80%', margin: 'auto', display: 'flex', justifyContent: 'center', gap: '50px' }}>
            <div className='chart'>
                <h2>Average price for toy Category</h2>
                < Doughnut data={dataPrice} />
            </div>

            <div className='chart'>

            <h2>Precentage of labeld items stock</h2>
            < Doughnut data={dataStock} />
            </div>
        </div>
    )
}
