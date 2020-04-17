import React, { Component } from 'react';
// import classes from './App.css';
import {Cards,Charts,Countries} from './components/Allcomponents';
import style from './style.module.css'

import {fetchData} from './api/Api'

class App extends Component {

  state={
    data:{},
    country:''
  }
 
   async componentDidMount(){
     const getData=await fetchData();
        this.setState({data:getData})
    }

countryChangeHandler= async(getcountry)=>{
  const getData=await fetchData(getcountry);
  console.log(getcountry)
  console.log(getData)
  this.setState({data:getData,country:getcountry})
}

  render() {
    return (
      <div className={style.container}>
                <h1>COVID-19</h1>
      <Cards data={this.state.data}/>
      <Countries countryChangeHandler={this.countryChangeHandler}/> 
      <Charts data={this.state.data} country={this.state.country}/>
      </div>
    );
  }
}
export default App;
