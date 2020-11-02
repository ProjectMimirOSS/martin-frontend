import React, { useState } from 'react'
import styles from './service-ping.module.css'

const ServicePing = (props: any) => {
    const { pingInterval, serviceUrl, hideInterval = true } = props;
    const _state = {
        pingUrl: serviceUrl,
        pingInterval
    };
    const [state, setState] = useState(_state);
    const updateIntervalHandler = (ev: any) => {
        setState({
            ...state,
            pingInterval: +ev.target.value
        })
    }
    const updateUrlHandler = (ev: any) => {
        setState({
            ...state,
            pingUrl: ev.target.value
        })
    }
    return (
        <div className={styles.service__ping__container}>
            <div className={styles.ping__input}>
                <p className={styles.label}>Enter the URL</p>
                <div className={styles.input__container}> <input className={styles.input__fld} value={state.pingUrl} onChange={updateUrlHandler} /> <span>PING</span></div>
            </div>
            {!hideInterval ? <div className={styles.interval__input}>
                <p className={styles.label}>Set Interval</p>
                <div className={styles.input__container}> <input className={styles.input__fld} type='number' value={state.pingInterval} onChange={updateIntervalHandler} /></div>
            </div> : null}
        </div>
    )
}

export default ServicePing;