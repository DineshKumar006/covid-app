import React,{useState,useEffect} from 'react';

import {fetchDailydata} from '../../api/Api'

import {Line,Bar} from 'react-chartjs-2';

import style from './chart.module.css';


const Charts=({data,country})=>{

    const [dailyData, setdailyData]=useState([]);

    useEffect(()=>{
            const getDailydata=async()=>{
                 const data=await fetchDailydata();
                setdailyData(data)
            }
            getDailydata()

            // console.log(dailyData)
    },[])

    const barChart=(

        dailyData.length !==0? (
            <Bar
            
                data={{
                    labels:dailyData.map((date)=>{
                        return date.reportDate;
                        
                    }),

                    datasets:[
                        {
                        data:dailyData.map((current)=>{
                            return current.confirmed;
                        }),
                        label:'Confirmed',
                        borderColor:'blue',
                        backgroundColor:'skyblue',
                        fill:true,
                        fontColor:'white'
                    },
                    
                    {
                        data:dailyData.map((current)=>{
                            return current.deaths
                        }),
                        label:'Deaths',
                        borderColor:'red',
                        backgroundColor:'yellow',
                        fill:true,
                        fontColor:'white'

                        
                    }
                ],

                
                }}

                options={{
                    scales: {
                        xAxes: [{
                            gridLines: {
                                 color:'white',
                                display:false,
                                fontColor:'white'

                                
                             }
                        }],
                        yAxes:[{
                            gridLines:{
                                color:'white',
                                fontColor:'white'

                               
                            }
                        }]
                    }
                }}

               
               

            />
        ):null
            

    );
    // lineChart.defaults.global.responsive=false;


    const barChartCountry=(
        data.confirmed?
        <Bar
        data={{
            labels:['Confirmed', 'Recovered','Deaths'],

            datasets:[{
                data:[data.confirmed.value, data.recovered.value,data.deaths.value],
                label:'People',
                borderColor:'red',
                backgroundColor:['blue','green','red'],
                // backgroundColor:'green',
                barThickness:100,
                fontColor:'white',
                fill:true,
                opacity:3
            }]
        }}

        options={{
            title:{
                text:`Current Status of ${country}`,
                display:true,
                fontSize:22,
                fontColor:'white',
                
            },
            layout:{
                padding:30,
                
                

            },
            scales: {
                xAxes: [{
                    gridLines: {
                         color:'white',
                        display:false,
                        
                     }
                }],
                yAxes:[{
                    gridLines:{
                        color:'white',
                       
                    }
                }]
            }
        }}

        />
        :null
       
    )

    return(
        <div className={style.container}>
            {country?barChartCountry:barChart}
        </div>
    )

};

export default Charts;