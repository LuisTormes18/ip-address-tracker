import React, { useState } from "react";
import { getAddressByIp } from "./../services/geolocationApi";

function Header() {
    const [ipAddress, setIpAddress] = useState("");

    const handleInputChange = (e) => {
        setIpAddress(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
       await getAddressByIp(ipAddress);
    };
    return (
        <header className="header">
            <div>
                <form className="search-form">
                    <div>
                        <input
                            type="text"
                            placeholder="Search for any IP address or domain"
                            name="ip"
                            value={ipAddress}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSubmit}>search</button>
                    </div>
                </form>
            </div>
        </header>
    );
}

export default Header;
