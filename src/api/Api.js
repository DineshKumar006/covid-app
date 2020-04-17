import axios from 'axios';

const url="https://covid19.mathdro.id/api"; 

export const fetchData=async (country)=>{
    try {
        let changedURL=url;
        if(country){
            changedURL=`${url}/countries/${country}`
        }

        const response=await axios.get(changedURL);
        const reqData=response.data;
        // console.log(reqData);
        let modifiedData={
            confirmed:reqData.confirmed,
            recovered:reqData.recovered,
            deaths:reqData.deaths,
            lastUpdate:reqData.lastUpdate,
        }
        return modifiedData;


    } catch (error) {   
    }
};

export const fetchDailydata=async ()=>{
    try {
        const response= await axios.get(`${url}/daily`)

    //  console.log(response.data)

    const modifiedData= response.data.map((dailyReport)=>({
        confirmed:dailyReport.confirmed.total,
        deaths:dailyReport.deaths.total,
        reportDate:dailyReport.reportDate
    
    }))  
        //  console.log("dailyReport=>"+modifiedData)

        return modifiedData;

    } catch (error) {
        
    }
    
}

export const countryData=async ()=>{
    try {
        const response=await axios.get(`${url}/countries`)
          const Countryname=response.data.countries.map((crr)=>{
            return crr.name
        })

        return Countryname
    } catch (error) {
        
    }
}