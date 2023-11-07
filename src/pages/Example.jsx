// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import papaparse from "papaparse";
// import './adding_csv.css';


// import { useNavigate } from 'react-router-dom';
// import { Csvcontextprovider } from '../Contexts/Csvcontext';
// import { useContext } from 'react';
// import Navbar from '../components/Navbar';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
// import { toast } from 'react-toastify';
// import './example.css'



// export default function Adding_csv() {

//   const [csvdata, setCsvdata] = useState([]);
//   const { csvData, setCsvData, file, setUploadFiles } = useContext(Csvcontextprovider)
//   const[datalist , setDatalist] = useState([])
//   console.log("datalist-----",datalist)

//   console.log("csvdata----", csvdata)
//   console.log(file?.name)
//   console.log("csvdata from context----", csvData)
//   const navigate = useNavigate()

  
 

//   const selectCSV = (e) => {
//     setUploadFiles(e.target.files[0]);

//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const csvContent = event.target.result;

//       // Parse CSV content using papaparse
//       papaparse.parse(csvContent, {
//         header: true, // Specify that the first row contains headers
//         complete: function (results) {
//           // The data is automatically mapped to objects with the specified headers
//           const data = results.data;

       


//           // Set the parsed data as an array of objects
//           setCsvData(data);
//         },
//       });
//     };

//     reader.readAsText(e.target.files[0]);
//   }
//   const handleUpload = async () => {
//     try {
//       if (file) {
//         const formData = new FormData();
//         formData.append('csvFile', file);

//       const response =   await axios.post("http://localhost:3003/upload", formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         console.log("response of api----",response.data.message)
//         toast.success(response.data.message);
//         // localStorage.setItem('csvdata', JSON.stringify(csvdata))
//       }
//     } catch (err) {
//       console.log("error----", err);
//     }
//   }

//   const stockist_id = parseInt(localStorage.getItem('User_Id'))
//   console.log("stockist_id----",stockist_id)
//   useEffect(()=>{
//     if(stockist_id){
//       axios.post("http://localhost:3003/stockist/list",{ st_id: stockist_id }).then((response)=>{
//           console.log("response---",response.data.data)
//           setDatalist(response.data.data)
//       })
//     }
//   },[])



//   return (
//     <>
//     <Navbar/>
//     <ToastContainer
//   position="top-center"
//   autoClose={5000}
//   hideProgressBar={false}
//   newestOnTop={false}
//   closeOnClick
//   rtl={false}
//   pauseOnFocusLoss
//   draggable
//   pauseOnHover
//   theme="light"
// />



//        <meta charSet="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>LOGIN</title>
//   <link rel="stylesheet" href="style.css" />
//   <link
//     rel="stylesheet"
//     href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
//   />
//   {/* <div className="container"> */}
//     <div className="hero"></div>
//     <div className="tax-login">
//       <div className="inputdiv">
//         <div className="topimage">
//           <div className="title">
//             <h1 className="text1">Upload Your CSV File</h1>
//             <input
//                   type="file"
//                   accept=".csv"
//                   id="fileInput"
//                   onChange={selectCSV}
//                   style={{ display: 'none' }}
//                 />
//                 <p>Selected File: {file ? file.name : 'No file selected'}</p>
         
//           </div>
//         </div>
//         <div className="btns">
//           <button className="input-button"   onClick={handleUpload}>UPLOAD</button>
//           <button className="input-button" style={{ display: file ? "inline" : "none" }}
//            onClick={(e) => {
//             navigate('/view', { state: { data: csvdata } })
//           }}

//           >VIEW</button>
//         </div>
//       </div>
//     </div>
//   {/* </div> */}



//         <div className='csv_table'>
//         <table className='table'>
//           <thead>
//             <tr>
//               <th>Created_date</th>
//               <th>Bill_No</th>
//               <th>To</th>
//               <th>Invoice Amount</th>
//               {/* <th>Stockist Name</th> */}
//               <th>Logistics Name</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* { datalist.length>0 && datalist?.map((rowData, index) => ( */}.
//             {datalist.slice(-11).map((rowData, index) => (
//               <tr key={index}>
//                 <td>{rowData.created_date}</td>
//                 <td>{rowData.bill_num}</td>
//                 <td>{rowData.to}</td>
//                 <td>{rowData.amount}</td>
//                 {/* <td>{rowData.stockist_name}</td> */}
//                 <td>{rowData.logistic_name}</td>
//                 <td>{rowData.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         </div>
       
        
    
//     </>
//   );
// }
