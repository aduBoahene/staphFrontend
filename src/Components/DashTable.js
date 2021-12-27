import * as React from 'react';

import { useEffect, useState } from "react";
import axios from 'axios'
import { useSelector } from "react-redux";


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
  };
  
  export default function DashTable() {

    const [fromAccount, setFromAccount] = useState('')
    const [accountName, setAccountName] = useState('')
    const [bankName, setBankName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')
    const [routingNumber, setRoutingNumber] = useState('')
    const [telephone, setTelephone] = useState('')
    const [amount, setAmount] = useState('')




    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const {user} = useSelector(state => state);
    console.log("user id",user.id)

    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
      axios.get(`http://localhost:9090/getUserTransactions/${user.id}`)
      .then(res =>{
        console.log("getUserTransactions",res.data)
        console.log("object data", res.data.data)
        setUserDetails(res.data.data)
      }
      ).catch(err=>{
        console.log("login error",err.response)
      }); 

    }, [])


    const sendTransaction =() =>{


      console.log("to be sent",{
        "account_id": userDetails[0]?.account_id, 
        "account_action":"CREDIT", 
        "from_account": this, 
        "transaction_status":" pending.....", 
        "bankname":bankName,
        "to_account":accountName, 
        "phone_number":telephone,
        "routing_number":routingNumber,
        "amount_involved": amount
    })


      axios.post(`http://localhost:9090/addTransaction`,{
        "account_id": userDetails[0]?.account_id, 
        "account_action":"CREDIT", 
        "from_account": this, 
        "transaction_status":" pending.....", 
        "bankname":bankName,
        "to_account":accountName, 
        "phone_number":telephone,
        "routing_number":routingNumber,
        "amount_involved": amount
    }).then(res => {
      console.log("added transaction",res)
    })

    }


    return (
      <div className="flex flex-col mt-8">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                  <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      #
                    </th>
                  <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Account #
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Routing Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Transaction
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                   
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {userDetails?.map((data,index) => (
                    <tr key={data.customer_id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{index + 1}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{data.to_account}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">{data.routing_number}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{data.account_action}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${data.transaction_status=="successful"?'bg-green-400':'bg-red-600'} text-white`}>
                          {data.transaction_status}
                        </span>
                      </td>
                      <td className="px-6 py-4 space-x-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          View
                        </a>
                        <a onClick={handleOpen} className="text-indigo-600 hover:text-indigo-900">
                          Transfer
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>



        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
                      
                    <form className="w-full max-w-lg">
                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    From:
                                </label>
                                <input disabled onChange={(e)=>setFromAccount(e.target.value)} value={fromAccount} className="cursor-not-allowed appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
                                </div>
                            </div>
                            <hr className='m-2'/>
                            <h6 className='mb-2 font-normal'>Reciever details</h6>
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Account Name:
                                </label>
                                <input onChange={(e)=>setAccountName(e.target.value)} value={accountName} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text"/>
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Bank Name:
                                </label>
                                <input onChange={(e)=>setBankName(e.target.value)} value={bankName} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text"/>
                                </div>
                            </div>

                            {/* <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Account Number:
                                </label>
                                <input onChange={(e)=>setAccountNumber(e.target.value)} value={accountNumber} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text"/>
                                </div>
                            </div> */}

                            
                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Amount:
                                </label>
                                <input onChange={(e)=>setAmount(e.target.value)} value={amount} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text"/>
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Routing Number:
                                </label>
                                <input onChange={(e)=>setRoutingNumber(e.target.value)} value={routingNumber} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text"/>
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Telephone:
                                </label>
                                <input onChange={(e)=>setTelephone(e.target.value)} value={telephone} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text"/>
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full px-3">
                                <input onClick={()=> sendTransaction()} value={'Send'} className="font-bold font-poppins text-white bg-red-400 text-center appearance-none block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight" type="button"/>
                                </div>
                            </div>
                           
                           
                            
                        </form>
          </Box>
      </Modal>


      </div>
    )
  }
  