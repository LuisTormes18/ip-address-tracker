import React, { createContext, useState } from "react";

export const appContext = createContext();

function AppProvider({ children }) {
    const [location, setLocation] = useState({
            ip: '-----',
            city:'-----',
            country:'-----',
            languages: '-----',
        });
    const [coordinates, setCoordinates] = useState(
        {latitude:'37.38801956176758',
        longitude:'-122.07431030273438'
    });

    const handleDirection = (location,coordinates)=>{
        setLocation(location);
        setCoordinates(coordinates);
    }

    const contextValue = {
        location,
        coordinates,
        handleDirection,
    };

    return (
        <appContext.Provider value={contextValue}>
            {children}
        </appContext.Provider>
    );
}

export default AppProvider;
