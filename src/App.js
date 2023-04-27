import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


function App(props) {
  return (
    <div className='App'>
  <Header />
<Navigation />
<div className='App__content'>
  <Routes>
  <Route path='/dialogs' element={<DialogsContainer />}></Route> 
  <Route path='profile/:userId?' element={<ProfileContainer />}></Route> 
  <Route path='users' element={<UsersContainer />}></Route> 
  </Routes>
</div>


    </div>
  );
}

export default App;
