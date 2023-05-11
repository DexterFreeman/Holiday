import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route, Routes} from "react-router-dom"; 
import Homepage from './pages/Homepage/Homepage';
import Dashboardpage from './pages/Dashboardpage/Dashboardpage';
import Holidaypage from './pages/Holidaypage/Holidaypage';
import Addpage from './pages/Addpage/Addpage';
import Editpage from './pages/Editpage/Editpage';
const  App = () => {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path='/holidays' element={<Dashboardpage/>}></Route>
        <Route path='/holiday/:holidayID' element={<Holidaypage/>}></Route>
        <Route path='/holiday/add' element={<Addpage/>}></Route>
        <Route path='/holiday/edit/:holidayID' element={<Editpage/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
