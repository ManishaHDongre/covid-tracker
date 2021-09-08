import React, {useEffect, useState} from 'react';
import './Covid.css';


 const Covid = () => {
    var active_data=0;

    const [data, setdata] = useState([]);

    const getCovidData = async () =>{

        try{
            const res = await fetch('https://api.covid19api.com/total/country/india');
            const actualData = await res.json();
            let length_of_arr = actualData.length-1;
            console.log(actualData[length_of_arr]);
            setdata(actualData[length_of_arr]);
            //var active_data =actualData.length;                    <p>{active_data}</p>

            console.log(active_data);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
       getCovidData();
    }, [])


    return (
        <>
            <h2>Covid Tracker INDIA</h2>
            <h5 className="updated_date">Last updated</h5>
            <p className="updated_date_data">{data.Date}</p>
            
            <div className="cards">
            
            <div className="card text-warning bg-light mb-3" >
                <div className="card-body">
                    <h5 className="card-title is_confirmed">Confirmed</h5>
                    <p className="card-text is_confirmed">{data.Confirmed}</p>
                </div>
            </div>
            
            <div className="card text-danger bg-light mb-3" >
                <div className="card-body">
                    <h5 className="card-title is_active">Active </h5>
                    <p className="card-text is_active">{data.Active}</p>
                </div>
            </div>      

            <div className="card text-success bg-light mb-3" >
                <div className="card-body">
                    <h5 className="card-title is-recovered">Recovered</h5>
                    <p className="card-text is-recovered">{data.Recovered}</p>
                </div>
            </div>    
            
            <div className="card text-secondary bg-light mb-3" >
                <div className="card-body">
                    <h5 className="card-title">Deaths</h5>
                    <p className="card-text">{data.Deaths}</p>
                </div>
            </div> 

        </div>
           
        <hr />

        <div className="link_info">
            <p className="link_item">For protective measures from COVID 19</p>
            <a href= "https://www.who.int/westernpacific/emergencies/covid-19/information/transmission-protective-measures"> cilck here</a>
        </div>

        <div className="link_info">
            <p className="link_item">COVID-19 Everyday Precautions</p>
            <a href= "https://www.youtube.com/watch?v=-Fdo_HT3X80&ab_channel=PulmonaryFibrosisFoundation"> cilck here</a>
        </div>
        </>
    )
}

export default Covid