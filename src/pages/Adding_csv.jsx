import axios from 'axios';
import React, { useEffect, useState } from 'react';
import papaparse from "papaparse";
import './adding_csv.css';



import { useNavigate } from 'react-router-dom';
import { Csvcontextprovider } from '../Contexts/Csvcontext';
import { useContext } from 'react';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { toast } from 'react-toastify';



 
export default function Adding_csv() {

  const [csvdata, setCsvdata] = useState([]);
  const { csvData, setCsvData, file, setUploadFiles } = useContext(Csvcontextprovider)
  const[datalist , setDatalist] = useState([])
  console.log("datalist-----",datalist)

  console.log("csvdata----", csvdata)
  console.log(file?.name)
  console.log("csvdata from context----", csvData)
  const navigate = useNavigate()

  
 

  const selectCSV = (e) => {
    setUploadFiles(e.target.files[0]);

    const reader = new FileReader();
    reader.onload = (event) => {
      const csvContent = event.target.result;

      // Parse CSV content using papaparse
      papaparse.parse(csvContent, {
        header: true, // Specify that the first row contains headers
        complete: function (results) {
          // The data is automatically mapped to objects with the specified headers
          const data = results.data;

       


          // Set the parsed data as an array of objects
          setCsvData(data);
        },
      });
    };

    reader.readAsText(e.target.files[0]);
  }
  const handleUpload = async () => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append('csvFile', file);

      const response =   await axios.post("http://52.66.145.37:3003/upload", formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log("response of api----",response.data.message)
        toast.success(response.data.message);
        // localStorage.setItem('csvdata', JSON.stringify(csvdata))
      }
    } catch (err) {
      console.log("error----", err);
    }
  }

  const stockist_id = parseInt(localStorage.getItem('User_Id'))
  console.log("stockist_id----",stockist_id)
  useEffect(()=>{
    if(stockist_id){
      axios.post("http://52.66.145.37:3003/stockist/list",{ st_id: stockist_id }).then((response)=>{
          console.log("response---",response.data.data)
          setDatalist(response.data.data)
      })
    }
  },[])



  return (
    <>
    <Navbar/>
    
    <ToastContainer
  position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
/>



<div className='csv_list'>
        <div className='csv_frame'>
          <div className='csv_text'>
            <div className='csv_image'>
                <label htmlFor="fileInput" className="custom-file-input">
                Upload a CSV file
                </label>
                <input
                  type="file"
                  accept=".csv"
                  id="fileInput"
                  onChange={selectCSV}
                  style={{ display: 'none' }}
                />
                <p>Selected File: {file ? file.name : 'No file selected'}</p>

            </div>
          </div>
        </div>
        <div className='row' style={{ height: "20px" }}></div>
        <div className='csv_button'>
          <div className='csv_button1' style={{ display: "inline" }}>
            <button
              type="button"
              className="btn btn-success"
              style={{ width: "100px", height: "40px", borderRadius: "15px" }}
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>
          <div className='csv_button2'  style={{ display: file ? "inline" : "none" }}>
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: "100px", height: "40px", borderRadius: "15px" }}
              onClick={(e) => {
                navigate('/view', { state: { data: csvdata } })
              }}

            >
              View
            </button>
          </div>
        </div>
        <div className="container" style={{backgroundColor:'white',overflow:'hidden',overflowX:'scroll'}}>
        <table className='table'>
          <thead >
            <tr>
              <th>Created_date</th>
              <th>Bill_No</th>
              <th>To</th>
              <th>Invoice Amount</th>
              {/* <th>Stockist Name</th> */}
              <th>Logistics Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* { datalist.length>0 && datalist?.map((rowData, index) => ( */}.
            {datalist.slice(-11).map((rowData, index) => (
              <tr key={index}>
                <td>{rowData.created_date}</td>
                <td>{rowData.bill_num}</td>
                <td>{rowData.to}</td>
                <td>{rowData.amount}</td>
                {/* <td>{rowData.stockist_name}</td> */}
                <td>{rowData.logistic_name}</td>
                <td>{rowData.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
  
       
        
    
    </>
  );
}
