import React from 'react';
import CodeIcon from '@material-ui/icons/Code';
import "./styles.css"
import {AppBar ,Tab,Tabs,Typography}from '@material-ui/core';
import About from "./About"

const Home=({props})=> {
    const [selectedTab, setSelectedTab] = React.useState(0);
    const handleChange = (event, newValue) => {
      setSelectedTab(newValue);
    };
    
    return (
        <>
        <AppBar position="static">
            <Tabs variant="fullWidth" value={selectedTab} onChange={handleChange} >
                <Tab label="About The App"/>
                <Tab label="Ratings and Reviews"/>
                <Tab label="Upcoming features and updates"/>
            </Tabs>
        </AppBar>
        {selectedTab === 0 && <About/>}
        <div className="footer">
            <Typography variant="body1" component="h2">
            Created by <CodeIcon font="small"/>
            <a className="link" href="https://www.linkedin.com/in/malek-ammar-924551148/" target="_blank" rel="noopener noreferrer"> Malek Ammar</a>
        </Typography>
        </div>
        </>
    );
}

export default Home;