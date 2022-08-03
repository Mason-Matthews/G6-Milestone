import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import Label from './Label.js';

Chart.register(ArcElement)

const config = {
  data: {
    datasets: [{
      data: [33, 33, 33],
      backgroundColor: [
        '#e5e5e5'],


        hoverBackgroundColor: [
        'rgb(37, 105, 252)',
        'rgb(163, 2, 212)',
        'rgb(252, 134, 134)'
      ],

      hoverOffset: 10,
      borderRadius: 25,
      spacing: 5,
    }]
  },
  options: {
    cutout: 120
  }
}

export default function Graph() {
  return (
    <div className="flex justify-content max-w-xs mx-auto">
        <div className="item">
            <div className="chart">
            <Doughnut {...config}></Doughnut>
            <h2 className='block text-3xl'>Total <br></br>
              <span className='block text-3xl'>${0}</span>
            </h2>
        </div>

        <div className="flex flex-col py-10 gap-4">
                <Label></Label>
            </div> 
        </div>
    </div>
  )
};
