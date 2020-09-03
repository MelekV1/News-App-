import React,{useEffect ,useState} from 'react';
import axios from "axios"
import NewsCards from "../NewsCards/NewsCards"
import LinearProgress from '@material-ui/core/LinearProgress';

function Search({country,cat,term}) {
    const [data,setData]=useState([])
    const [isLoading, setIsLoading] = useState(false);

    console.log(cat)
    useEffect( ()=>{
      const fetch=()=>{
        axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${cat}&q=${term}&apiKey=88cc26f443ef4b9cbc1928d592ef087b`)
        .then((response)=>{
          setData(response.data.articles);
          setIsLoading(false);
        })
        .catch((err)=>console.log(err))
    };
    setIsLoading(true);
    fetch();}
    ,[cat,term,country]
  );

    return (
     <div>
        {isLoading?<LinearProgress color="secondary" />:<NewsCards articles={data}/>}
     </div>
    );
}

export default Search;
