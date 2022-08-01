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
        <div>
            <div>
                <h3>{data.type ?? ''}</h3>
            </div>
            <h3>{Math.round(data.percent) ?? 0}%</h3>
        </div>
    )
}

