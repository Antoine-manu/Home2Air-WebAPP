import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import error from '../../assets/img/404 Error-amico.png'
import {NavLink} from "react-router-dom";
export default function ErrorPage() {


  return(
    <div className="errorDiv">
      <img src={error} alt="404 page" className=""/>
        <NavLink
            to={'/'}
            className='btn btn-primary mt-4'
        >
            Retournez au site
        </NavLink>
    </div>
  )
}
