import React,{ useContext } from "react";
import { appContext } from './../context/AppProvider';


function Location(props) {

    const { location } = useContext(appContext);
    return (
        <div className='box-location'>
            <div>
            	<span>Ip Address</span>
				<h3> { location.ip } </h3> 
            </div>		
              <div>
            	<span>City</span>
				<h3> {location.city} </h3> 
            </div>		
              <div>
            	<span>Country</span>
				<h3> {location.country} </h3> 
            </div>		
              <div>
            	<span>languages</span>
				<h3> {location.languages} </h3> 
            </div>		
            
        </div> 
    );
}

export default Location;
