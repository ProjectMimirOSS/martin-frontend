import React, { useReducer } from "react";
import rootreducer from './reducer';
import { formatTimeStampToDateString, formatTimeStampToTimeString } from '../util/date.util'

export const GlobalContext = React.createContext({} as any);


const initialState = {
    isDarkThemed: new Date().getHours() >= 18 || new Date().getHours() <= 7 ? true : false,
    isAuthenticated: true,
    services: [
        {
            id: 1,
            name: 'Galieo Service',
            lastDownTime: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
            lastUpdate: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
            uptime: '64:00:00',
            erroredServices: 3,
            pingUrl: 'https:stanplus.com',
            intervalTime: 30000,
            parameters: [
                {
                    id: 1,
                    name: 'Google Maps',
                    lastDownTime: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
                    lastUpdate: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
                    status: 'UP'
                },
                {
                    id: 2,
                    name: 'OSRM',
                    lastDownTime: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
                    lastUpdate: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
                    status: 'UP'
                },
                {
                    id: 3,
                    name: 'Mongo Connection',
                    lastDownTime: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
                    lastUpdate: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
                    status: 'UP'
                }
            ]
        },
        {
            id: 2,
            name: 'Galieo Service',
            lastDownTime: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
            lastUpdate: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
            uptime: '64:00:00',
            erroredServices: 0,
            pingUrl: 'https:stanplus.com',
            intervalTime: 30000,
            parameters: [
                {
                    id: 1,
                    name: 'Google Maps',
                    lastDownTime: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
                    lastUpdate: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
                    status: 'UP'
                },
                {
                    id: 2,
                    name: 'OSRM',
                    lastDownTime: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
                    lastUpdate: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
                    status: 'UP'
                },
                {
                    id: 3,
                    name: 'Mongo Connection',
                    lastDownTime: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
                    lastUpdate: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
                    status: 'UP'
                }
            ]
        },
        {
            id: 3,
            name: 'Galieo Service',
            lastDownTime: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
            lastUpdate: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
            uptime: '64:00:00',
            erroredServices: 3,
            pingUrl: 'https:stanplus.com',
            intervalTime: 30000,
            parameters: [
                {
                    id: 1,
                    name: 'Google Maps',
                    lastDownTime: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
                    lastUpdate: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
                    status: 'UP'
                },
                {
                    id: 2,
                    name: 'OSRM',
                    lastDownTime: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
                    lastUpdate: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
                    status: 'UP'
                },
                {
                    id: 3,
                    name: 'Mongo Connection',
                    lastDownTime: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
                    lastUpdate: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
                    status: 'UP'
                }
            ]
        }
    ],
    summaryReport: {
        numOfServices: 10,
        numOfDownServices: 1,
        lastUpdate: `${formatTimeStampToDateString(Date.now())} ${formatTimeStampToTimeString(Date.now())}`,
        runTime: '20:00:00'
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
