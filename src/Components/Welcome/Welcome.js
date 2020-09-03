import React from 'react';
import Button from '@material-ui/core/Button';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import {Link } from "react-router-dom"
import {Grow} from '@material-ui/core';

function Welcome(props) {
    return (
        <Grow in>
            <div style={{textAlign:"center",padding:"40vh"}}>
                
                <Link to="/Home" style={{textDecoration:"none"}}>
                <Button
                    variant="contained"
                    color="default"
                    startIcon={<ChromeReaderModeIcon />}
                    >
                    Get quick headlines !<br/>
                    Get What you want <GpsFixedIcon/>
                </Button>
                </Link>
                
                
            </div>
        </Grow>
    );
}

export default Welcome;