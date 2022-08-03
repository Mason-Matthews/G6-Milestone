import React from 'react';
import '../App.css';
import 'boxicons';

const obj = [
    {
        name: "Savings",
    },
    {
        name: "Bills",
    },
    {
        name: "Miscellaneous",
    },
]

export default function List() {
  return (
    <div className='flex flex-col py-6 gap-3'>
        <h1 className='history py-4 text-xl font-bold'>Past Expenses</h1>    
        {obj.map((value, index) => <Transaction key={index} variable={value}></Transaction>
 )}    
    </div>
  )
}

function Transaction ({variable}) {
    if(!variable) return null;
    return (
        <div className='delete-item flex justify-center bg-blue py-2 rounded-md'>
            <button className='delete'>
            <box-icon type='solid' name='trash' color='black'></box-icon>
            </button>
            <span>{variable.name ?? ''}</span>
        </div>
    )
}