import './App.css';
import React from 'react';
import Navigation from './components/Navigation/Navigation';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './Login/Login';


function App(props) {
  return (
    <div className='App'>
  <HeaderContainer />
<Navigation />
<div className='App__content'>
  <Routes>
  <Route path='/dialogs' element={<DialogsContainer />}></Route> 
  <Route path='profile/:userId?' element={<ProfileContainer />}></Route> 
  <Route path='users' element={<UsersContainer />}></Route> 
  <Route path='login' element={<Login />}></Route> 
  </Routes>
</div>


    </div>
  );
}

export default App;
