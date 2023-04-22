import React from 'react';
import { NavLink } from 'react-router-dom';




function DialogItem(props) {
  return (
<div>
<NavLink to={"/dialogs/" + props.path}>{props.userName}</NavLink></div>

  );
}

export default DialogItem;