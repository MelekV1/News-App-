import React,{useState} from 'react';
import Search from "./Search"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ClassIcon from '@material-ui/icons/Class';
import PublicIcon from '@material-ui/icons/Public';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import Select from '@material-ui/core/Select';

import "./Search.css"
const category=["business","entertainment","general","health","science","sports","technology"]

function SearchInterface(){
    const [cat,setCat]=useState("")
    const [country,setCountry]=useState("")
    const [term,setTerm]=useState("")
    return(
        <React.Fragment>
         <div className="SearchHeader" >
         <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            

            <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
                <PublicIcon />
            </Grid>
            <Grid item>
                <TextField id="input-with-icon-grid" label="country 2-letter ISO 3166-1 code " style={{width:"300px"}} onChange={ (e)=>setCountry(e.target.value)}/>
            </Grid>
            <p>The country you want to get headlines for (us , fr , ae ...)</p>
            </Grid>
        
            <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
                <EditAttributesIcon />
            </Grid>
            <Grid item>
                <TextField id="input-with-icon-grid" label="Term to search"  style={{width:"300px"}} onChange={ (e)=>setTerm(e.target.value)}/>
            </Grid>
            <p>Keywords or a phrase to search for.</p>
            </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>

            
            <div class="box">
            <label for="categories"><p>The category you want to get headlines for:</p></label>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <ClassIcon />
                </Grid>
                <Grid item>
                    <Select
                        style={{width:"500px"}}
                        labelId="category"
                        onClick={(e)=>setCat(e.target.value)} 
                        >
                        {category.map((ct,i)=><option className="optionselect" value={ct}>{ct}</option>)}
                    </Select>
                </Grid>
            </Grid>
            </div>
            
            </Grid>
        </Grid>
            
       
        <Search
            country={country}
            cat={cat}
            term={term}
          />

        </div>   
        </React.Fragment>
    )
}

export default SearchInterface;
