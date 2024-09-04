import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import Post from './pages/Post';
import Footer from './components/Footer';

import './App.css';


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));



  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    })
  }
  return (
    <div className="App">
      <Router>
        <nav
         className='navbar'>
          <h1 className='h1Title'>my blog</h1>
        <div className='links'>
        <Link to='/'>Home</Link>
        
        {!isAuth ? (<Link to='/login'>Login</Link>)
         : (
          <>
          <Link to='/createpost'>Create Post</Link>
          <button className='logOutBtn' onClick={logOut}>Log Out</button>
          </>
         )}
        </div>
         <div className='profileInfo'>
          <div className='nameEmail'>
          <h4>{localStorage.getItem("name")}</h4>
          <h5>{localStorage.getItem("email")}</h5>
          </div>
          <img src={localStorage.getItem("photoURL")}/>

         </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login setIsAuth={setIsAuth} />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/createpost' element={<CreatePost isAuth={isAuth}/>}/>
          <Route path='/post/:id' element={<Post />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
