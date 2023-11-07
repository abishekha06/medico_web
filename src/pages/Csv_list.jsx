import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import './csv_list.css'


export default function Csv_list() {
    const [list, Setlist] = useState([])
    console.log("state_list-----",list)
    const st_id = parseInt(localStorage.getItem('User_Id'))
    console.log("stockist_id-----",st_id)
   useEffect(()=>{
    if(st_id){
        axios.post("http://52.66.145.37:3003/stockist/list",{ st_id: st_id }).then((response)=>{
            console.log("response---",response.data.data)
            Setlist(response.data.data)
        })
    }
  
   },[])
 
  return (

    <>
    <Navbar/>
     <div className='table-container'>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Bill_No</th>
              <th>To</th>
              <th>Invoice Amount</th>
              <th>Created Date</th>
              <th>Logistics Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            { list.length>0 && list?.map((rowData, index) => (
              <tr key={index}>
                <td>{rowData.id}</td>
                <td>{rowData.bill_num}</td>
                <td>{rowData.to}</td>
                <td>{rowData.amount}</td>
                <td>{rowData.created_date}</td>
                <td>{rowData.logistic_name}</td>
                <td>{rowData.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    
    </>
  )
}








