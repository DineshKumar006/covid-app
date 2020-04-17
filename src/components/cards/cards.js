import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import style from './cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';


const Cards=(props)=>{
console.log(props.data)
if(!props.data.confirmed){
    return "Loading";
}
    return(
        <div className={style.container}>

<Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(style.card,style.confirmed)}>
        <CardContent >
                    <Typography > <label>Confirmed</label></Typography>
                    <Typography >  
                        <span className={style.text}>
                            <CountUp
                                start={0}
                                end={props.data.confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        
                        </span>
                    </Typography>

                    <Typography > <label>{new Date(props.data.lastUpdate).toDateString() }</label></Typography>
                </CardContent>

                <CardContent className={style.img1} ></CardContent>

        </Grid>

        <Grid item xs={12} md={3} component={Card} className={cx(style.card,style.recovered)} >
        <CardContent >
                <Typography > <label>Recovered</label></Typography>
                    <Typography>
                    <span className={style.text}>
                             <CountUp
                                start={0}
                                end={props.data.recovered.value}
                                duration={2.5}
                                separator=","
                            />
                        
                        </span>     
                     </Typography>
                <Typography > <label>{new Date(props.data.lastUpdate).toDateString() }</label></Typography>

                </CardContent>
                <CardContent className={style.img2} ></CardContent>


        </Grid>


        <Grid item xs={12} md={3} component={Card} className={cx(style.card,style.deaths)}  >
        <CardContent >
                <Typography > <label>Deaths</label></Typography>
                    <Typography >

                        <span className={style.text}>
                                <CountUp
                                    start={0}
                                    end={props.data.deaths.value}
                                    duration={2.5}
                                    separator=","
                                />
                            
                        </span>                    
                    </Typography>
                    <Typography > <label>{new Date(props.data.lastUpdate).toDateString() }</label></Typography>
                </CardContent>
                <CardContent className={style.img3} ></CardContent>

        </Grid>

</Grid>
            {/* <Card item xs={12} md={3} className={cx(style.card,style.confirmed)} >
               
            </Card>
           
            <Card className={cx(style.card,style.recovered)} xs={12} md={3}>
                
            </Card>

            <Card className={cx(style.card,style.deaths)} xs={12} md={3}>
                
            </Card> */}
            
        </div>
    )

};

export default Cards;