import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import Label from './Label.js'

Chart.register(ArcElement)

const config = {
  data: {
    datasets: [{
      data: [33, 33, 34],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 12,
      borderRadius: 25,
      spacing: 12,
    }]
  },
  options: {
    cutout: 225
  }
}

export default function Graph() {
  return (
    <div className='flex -justify-content max-w-xs mx-auto'>
      <div className='item'>
        <div className='chart'>
            <Doughnut {...config}></Doughnut>
            <h2 className='mb-4 font-bold title'>Total <br></br>
              <span className='block text-4xl'>${0}</span>
            </h2>
        </div>

        <div className='flex flex-col py-10 gap-4'>
            <Label></Label>
        </div>
      </div>
    </div>
  )
};
