import React from 'react'

const obj = [
    {
        color : 'rgb(255, 99, 132)',
        type: "Savings",
        percent: 33
    },
    {
        color : 'rgb(54, 162, 235)',
        type: "Bills",
        percent: 33
    },
    {
        color : 'rgb(255, 205, 86)',
        type: "Miscellaneous",
        percent: 32
    },
]
export default function Label() {
  return (  
    <>
        {obj.map((value, index) => <LabelCreate key={index} data={value}></LabelCreate>)}
    </>
  )
};

function LabelCreate({ data }){
    if(!data) return <></>;
    return (
        <div className='labels flex justify-between'>
            <div className='flex gap-2'>
            <div className='w-2 h-2 rounded py-3' style={{background:'blue'}}></div>
                <h3 className='text-md font-bold'>{data.type ?? ''}</h3>
            </div>
            <h3 className='font-bold'>{Math.round(data.percent) ?? 0}%</h3>
        </div>
    )
}

