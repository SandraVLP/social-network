import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


function App(props) {
  return (
    <div className='App'>
  <Header />
<Navigation />
<div className='App__content'>
  <Routes>
  <Route path='/dialogs' element={<DialogsContainer store={props.store} />}></Route> 
  <Route path='profile' element={<Profile store={props.store} />}></Route> 
  </Routes>
</div>


    </div>
  );
}

export default App;
