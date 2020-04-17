import React,{Component} from 'react';
import {countryData} from '../../api/Api';
import {NativeSelect,FormControl} from '@material-ui/core';
import style from './countries.module.css';
class Countries extends Component{
    state={
        data:[]
    }
   async componentDidMount(){
        const countryWiseData=await countryData()
     this.setState({data:countryWiseData})
    }


    render(){    
   
            return(
            <div >
               <FormControl>
                   {/* countryChangeHandler coming from the app.js Countries component */}
                   <NativeSelect className={ style.txt} onChange={(event)=>this.props.countryChangeHandler(event.target.value)}>
                   <option value="">global</option>
                   { this.state.data.length>0?
                   this.state.data.map((countryname,idx)=>
                   <option key={idx} value={countryname}>{countryname}</option>)
                   :'Loading country'                   }
                   </NativeSelect>
               </FormControl>

            </div>
        )
    }
}


export default Countries;
