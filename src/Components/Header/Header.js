import React from 'react'
import "./header.css"
import {Link ,useHistory} from "react-router-dom"
import DetailsIcon from '@material-ui/icons/Details';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import IconButton from '@material-ui/core/IconButton';
import FastRewindIcon from '@material-ui/icons/FastRewind';

const Header=({backButton})=>{
    const history = useHistory();
    return(
        <div className="header">
          {backButton ? (
              <IconButton onClick={()=>history.replace(backButton)}>
                <FastRewindIcon className="header__logo" fontSize="large"  />
              </IconButton>
              ) : (
            <Link to="/Alan">
                <IconButton>
                  <DetailsIcon fontSize="large" className="header__logo" />
                </IconButton>
            </Link>
            
          )}
  
        <Link to="/">
        <IconButton>
          <img className="header__logo" 
              src="eye.png"
              alt="News-App" />
               </IconButton>
        </Link>
        <Link to="/News">
            <IconButton>
                <FindInPageIcon className="header__logo"  fontSize="large"  />
            </IconButton>
        </Link>
      
        </div>
  )
  }
  export default Header
  