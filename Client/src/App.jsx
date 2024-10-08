import React from 'react'
import{Routes,Route,BrowserRouter} from 'react-router-dom';
import {Home,Signin,Signup,Profile} from './pages';
import {Navbar,Wrapper} from './Components'
const App = () => {
  return<BrowserRouter>
  <Navbar/>
  <Wrapper>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/signin' element={<Signin/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/profile' element={<Profile/>}/>
    </Routes>
    </Wrapper>
    </BrowserRouter>
};

export default App