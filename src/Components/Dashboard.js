import React, { useState } from 'react'
import DashTable from './DashTable'

export default function Dashboard() {

    const [account, setAccount] = useState('')

    const acc = [
        {
            id:1,
            name:'kofi',
            balance:300
        },
        {
            id:2,
            name:'Ama',
            balance:300
        }
    ]

    const handleChange=(e)=>{
        setAccount(e.target.value)
        console.log(account)


    }


    return (
        <div className='w-4/5 mx-auto flex flex-col'>
            {/* <span className='text-3xl font-poppins'> </span>
            <div className='w-2/4 flex space-between ml-8' items-center>
                <select className='w-2/4' onChange={(e)=>handleChange(e)} value={account}>
                <option key={account.id}>selct account</option>
                    {acc&&acc.map(account=>
                        <option key={account.id}>{account.name}</option>)
                    }
                </select>

                <input type='text' placeholder='0'className='border border-2'/>
            </div> */}

            <DashTable />
           
        </div>
    )
}
