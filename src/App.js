import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Adding_csv from './pages/Adding_csv';
import Sign_up from './pages/Sign_up';
import Navbar from './components/Navbar';
import View_csv from './pages/View_csv';
import Csv_list from './pages/Csv_list';
import Example from './pages/Example';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/csv' element={


            <Adding_csv />

          } />
          <Route path='/signup' element={<Sign_up />} />
          <Route path='/nav' element={<Navbar />} />
          <Route path='/view' element={<View_csv/>}/>
          <Route path='/list' element={<Csv_list/>}/> 
          <Route path='/eg' element={<Example/>}/>  
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
