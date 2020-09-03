import React , {useState,useEffect} from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from  '../NewsCards/NewsCards'
import {Grid,Grow,Typography} from '@material-ui/core';
import useStyles from "../NewsCards/styles"
/*Alan AI API Integration */
const alanKey ="6c8d405cfc71a3483f0a34cc823906922e956eca572e1d8b807a3e2338fdd0dc/stage"
const Alan =() => {
  useEffect( ()=> {
    alanBtn({
      key : alanKey ,
      onCommand : ({command ,articles}) =>{
        if(command==="newHeadlines"){
          setNewsArticles(articles);
        }
      }
    })
  })
  const [newsArticles, setNewsArticles]=useState([]);
  const classes = useStyles();
  const infoCards = [
    { color: '#ff6100', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#ff0000', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#006600', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Assassins Creed...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];
  
  if (!newsArticles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          
          {infoCards.map((infoCard) => (
            <Grid item  xs={12} sm={6} className={classes.infoCard}>

              <div className={classes.card} style={{ backgroundColor: infoCard.color }} >
                <Typography variant="h5" component="h5">{infoCard.title}</Typography>

                {infoCard.info ? 
                <Typography variant="h6" component="h6">{infoCard.info}</Typography> : null}

                <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
              </div>

            </Grid>
          ))}
          
        </Grid>
      </Grow>
    );
  } 
  return (
    <div>
      <NewsCards articles={newsArticles}/>
    </div>
  );
}

export default Alan;
