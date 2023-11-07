import axios from 'axios'
import React, { useState } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Csvcontextprovider } from '../Contexts/Csvcontext';
import { useContext } from 'react';
import Navbar from '../components/Navbar';

export default function View_csv() {
    const {csvData,setCsvData} =useContext(Csvcontextprovider)
    console.log(csvData)
  const location = useLocation();
//   const csvData = location.state.data 
//   || JSON.parse(localStorage.getItem('csvdata')) || [];
 
  console.log("csvData:", csvData); 
//   const navigate = useNavigate();
  

 
 
  return (
    <>
    <Navbar/>
      <div className='table-container'>
        <table className='table'>
          <thead>
            <tr>
              <th>Bill No</th>
              <th>To</th>
              <th>Invoice Amount</th>
              <th>Stockist Name</th>
              <th>Logistics Name</th>
              
            </tr>
          </thead>
          <tbody>
            { csvData.length>0 && csvData?.map((rowData, index) => ( 
              <tr key={index}>
                <td>{rowData.bill_no}</td>
                <td>{rowData.to}</td>
                <td>{rowData.invoice_amt}</td>
                <td>{rowData.stockist_name}</td>
                <td>{rowData.logistics_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </>
  );
}

