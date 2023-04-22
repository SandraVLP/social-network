
import React from "react";
import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

function Navigation() {


    return (
      <nav className={s.nav}>
      <div className={s.container}>
      <NavLink  to='/profile' className={({ isActive }) =>
      isActive ? s.active : s.link
    }>Profile</NavLink> 
      <NavLink to='/dialogs' className={({ isActive }) =>
      isActive ? s.active : s.link
    }>Messages</NavLink> 
      <NavLink to='news' className={({ isActive }) =>
      isActive ? s.active : s.link
    }>News</NavLink> 
      <NavLink to='music' className={({ isActive }) =>
      isActive ? s.active : s.link
    }>Music</NavLink> 
      <NavLink to='settings' className={({ isActive }) =>
      isActive ? s.active : s.link
    }>Settings</NavLink> 
      </div>

    </nav>

);
}

export default Navigation;