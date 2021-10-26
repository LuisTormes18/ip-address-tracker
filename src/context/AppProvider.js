import React, { createContext, useState } from "react";

const appContext = createContext();

function AppProvider({ children }) {
    const [location, setLocation] = useState(null);

    const contextValue = {
        location,
        setLocation,
    };

    return (
        <appContext.Provider value={contextValue}>
            {children}
        </appContext.Provider>
    );
}

export default AppProvider;
