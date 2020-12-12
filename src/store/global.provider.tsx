import React, { useReducer } from "react";
import rootreducer from './reducer';
export const GlobalContext = React.createContext({} as any);


const initialState = {
    isDarkThemed: new Date().getHours() >= 18 || new Date().getHours() <= 7 ? true : false,
    isAuthenticated: true,
    services: {},
    summaryReport: {
        numOfServices: 0,
        numOfDownServices: 0,
        lastUpdate: null,
        runTime: null,
    }
};

const GlobalProvider = (props: any) => {
    const [state, dispatch] = useReducer(rootreducer, initialState);
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {props.children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
