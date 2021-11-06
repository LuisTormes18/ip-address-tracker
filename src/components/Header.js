import React, { useState, useContext } from "react";

import { getAddressByIp } from "./../services/geolocationApi";
import { appContext } from './../context/AppProvider';
import Location from './Location';

function Header() {
    const { handleDirection } = useContext(appContext);
    const [ipAddress, setIpAddress] = useState("");

    const handleInputChange = (e) => {
        setIpAddress(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data =  await getAddressByIp(ipAddress);
        const location = {
            ip: data.ip,
            city:data.city,
            country:data.country_name,
            languages: data.location.languages[0].name
        }
        handleDirection(location,{latitude:data.latitude,longitude:data.longitude});
    };
    return (
        <header className="header">
            <h1>IP Address Tracker</h1>
            <div>
                <form className="search-form" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Search for any IP address or domain"
                            name="ip"
                            value={ipAddress}
                            onChange={handleInputChange}
                        />
                        < input id='btn-submit' type='submit' value='>'/>
                    </div>
                </form>
            </div>
            <Location />

        </header>
    );
}

export default Header;
