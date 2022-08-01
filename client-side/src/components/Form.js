import React from 'react'
import { useForm } from 'react-hook-form'
import List from './List';
import '../App.css'

export default function Form() {

    const { handleSubmit, register} = useForm ();
    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <div>
        <h1>Transaction</h1>
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className="input-group">
                    <input required type="text" {...register('name')} placeholder='type of expense' className='form-input' />
                </div>
                <select className='form-input'{...register('type')}>
                    <option value="Investment" defaultValue>Investment</option>
                    <option value="Expense">Miscellaneous</option>
                    <option value="Savings">Savings</option>
                </select>
                <div className="input-group">
                    <input required type="text" placeholder='Amount' {...register('amount')} className='form-input' />
                </div>
                <div className="submit-btn">
                    <button>submit expense</button>
                </div>
            </div>    
        </form>
        <List></List>
    </div>
  )
}
