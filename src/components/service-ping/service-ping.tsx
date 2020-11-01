import React from 'react'
import styles from './service-ping.module.css'

const ServicePing = (props: any) => {
    const { pingInterval, serviceUrl, hideInterval = true } = props;
    return (
        <div className={styles.service__ping__container}>
            <div className={styles.ping__input}>
                <p className={styles.label}>Enter the URL</p>
                <div className={styles.input__container}> <input className={styles.input__fld} value={serviceUrl} /> <span>PING</span></div>
            </div>
            {!hideInterval ? <div className={styles.interval__input}>
                <p className={styles.label}>Set Interval</p>
                <div className={styles.input__container}> <input className={styles.input__fld} value={pingInterval} /></div>
            </div> : null}
        </div>
    )
}

export default ServicePing;