import React, { useEffect } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import View from './components/View';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import { auth } from './firebase.js';
import Posts from './components/Posts';
import Create from './components/Create';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid,
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])
  return (
    <div className='app' >
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/posts' element={<Posts />} />
              <Route path='/view-post' element={<View />} />
              <Route path='/create' element={<Create />} />
            </Routes>

          </>
        )
        }
      </Router>
    </div>
  )
}
export default App
