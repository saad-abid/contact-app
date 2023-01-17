//react router dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//styles
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import NavBar from './components/NavBar';
import { useAuthContext } from './hooks/useAuthContext';
import NotFound from './components/NotFound';
import Create from './pages/create/Create';

function App() {
  const {user, authIsReady} = useAuthContext();
  
  return (
    <div className="App">
          {authIsReady && <BrowserRouter>
           <NavBar/>
            <Routes>
              <Route exact path='/' element={ user ? <Home/> : <Navigate to='/login'/>}/>
              <Route path='/login' element={user ? <Navigate to="/"/> : <Login/>}/>
              <Route path='/signup' element={user ? <Navigate to="/"/> : <Signup/>}/>
              <Route path='/create' element={user ? <Create/> : <Navigate to="/login"/>}/>
              <Route path='/*' element={<NotFound/>}/>
            </Routes>
          </BrowserRouter>}
    </div>
  );
}

export default App;
