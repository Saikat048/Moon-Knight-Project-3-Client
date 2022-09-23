import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddPhone from './Pages/Add Phone/AddPhone';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import PhoneDetail from './Pages/Phone/PhoneDetail';
import Phones from './Pages/Phone/Phones';
import RequireAuth from './Pages/RequireAuth/RequierAuth';
import Navbar from './Pages/Share/Navbar';

function App() {
  return (
    <div>
       <Navbar></Navbar>
       <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/phones' element={<RequireAuth>
        <Phones></Phones>
       </RequireAuth>}></Route>
       <Route path='/phone/:phoneId' element={<RequireAuth>
        <PhoneDetail></PhoneDetail>
       </RequireAuth>}></Route>
       {/* <Route path='/phones' element={<Phones></Phones>}></Route> */}
       <Route path='/addphone' element={<AddPhone></AddPhone>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
       </Routes>
    </div>
  );
}

export default App;
