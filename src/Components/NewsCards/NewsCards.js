import React from 'react';
import NewsCard from './NewsCard/NewsCard';
import {Grid,Grow} from '@material-ui/core';
import useStyles from "./styles"

  const NewsCards = ({ articles }) => {
    const classes = useStyles();
    if(!articles.length){
        return (
        <div style={{textAlign:"center"}}>
            <img src=".\nodatafound.png" alt="no result"></img>
            <h1>Apologies , but no results were found for the requested archive .
            <br/>Perhaps searching with term will help you find a related post
        </h1>
        </div>)
    }
    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {articles.map(
                    (article,i) => (
                    <Grid key={i}
                        item
                        xs={12} sm={6} md={4} lg={3}
                        style={{display:"flex"}}>
                        <NewsCard article={article} />
                    </Grid>
                    ))}
            </Grid>
        </Grow>
    );
}

export default NewsCards;
