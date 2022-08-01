import React from 'react'
import '../App.css'
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
    <div>
        <h1 className='history'>History</h1>    
        {obj.map((value, index) => <Transaction key={index} variable={value}></Transaction>
 )}    
    </div>
  )
}

function Transaction ({variable}) {
    if(!variable) return null;
    return (
        <div className='delete-item'>
            <button>
                <box-icon name="trash" size="25px"></box-icon>
            </button>
            <span>{variable.name ?? ''}</span>
        </div>
    )
}