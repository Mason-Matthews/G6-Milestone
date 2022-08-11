import React from 'react'
import { useForm } from 'react-hook-form'
import List from './List';
import '../App.css'
import axios from 'axios';


export default function Form() {

    const { handleSubmit, register} = useForm ();
    const onSubmit = (data) => {
        console.log(data)

        axios.post('http://localhost:3001/', data)

       .then((response) => console.log(response.data));
     }

  return (
    <div className='form max-w-sm mx-auto w-96'>
        <h1 className='font-bold pb-4 text-xl text-decoration-line: underline'>Transaction</h1>
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid gap-4'>
                <div className='date' >
                <label className='dateof'>Date of Transaction<br></br>
                    <input required type="date" name="date"/>
                </label>
                </div>
                <div className="input-group">
                    <input required type="text" name= "name" {...register('name')} placeholder='Name of Expense (ex: Costco, Chevron, Target, etc.,)' className='form-input' />
                </div>

                <select className='form-input' required {...register('type')}>
                <option disabled>Type of Expense</option>
                    <option value="Bills" defaultValue>Bills</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                    <option value="Savings">Savings</option>

                </select>
                <div className="input-group">
                    <input required type="text" name = 'amount' pattern="([0-9]+.{0,1}[0-9]*,{0,1})*[0-9]" placeholder='$ Amount $' {...register('amount')} className='form-input' />
                </div>
                <div className="submit-btn">
                    <button className='border py-2 w-full '>SUBMIT EXPENSE</button>
                </div>
            </div>    
        </form>
        <List></List>
    </div>
  )
}
