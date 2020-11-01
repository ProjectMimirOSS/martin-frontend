import React, { useState } from "react"
import styles from './service-card.module.css';
import ServicePing from "../service-ping/service-ping";
const ServiceCard = (props: any) => {
    const { service, displayDetails } = props;
    const [showDetails, setshowDetails] = useState(displayDetails || false)
    return (
        <div className={styles.service__card}>
            <div className={styles.service__list__item} onClick={() => setshowDetails(!showDetails)}>
                <div className={styles.status__indicator} style={{ background: `${service?.erroredServices <= 0 ? 'var(--martin-color-success)' : 'var(--martin-color-warning)'}` }}></div>
                <div className={styles.list__data}>
                    <div className={styles.service__name}><div className={styles.service__letter} style={{ background: `${service?.erroredServices <= 0 ? 'var(--martin-color-success)' : 'var(--martin-color-warning)'}` }}>{service?.name?.substr(0,1)}</div> {service.name} </div>
                    <p className={styles.service__last__down}>
                        {service.lastDownTime.split(' ')[0]}<br></br>{service.lastDownTime.split(' ')[1]}
                    </p>
                    <p className={styles.service__updated_at}> {service.lastUpdate.split(' ')[0]}<br></br>{service.lastUpdate.split(' ')[1]}</p>
                    <p className={styles.uptime}>{service.uptime}</p>
                    <p className={styles.errors}>{service.erroredServices} Errors </p>
                    <div className={styles.actions}>
                        <div className="material-icons" style={{ color: 'var(--martin-color-danger-tint)' }}>settings</div>
                        <div className="material-icons" style={{ color: 'var(--martin-color-medium-tint)' }}>delete</div></div>
                </div>
            </div>
            {showDetails ? <div className={styles.service__details}>
                <ServicePing pingInterval={service.intervalTime} serviceUrl={service.pingUrl}></ServicePing>
                <div className={styles.service__parmeters}>
                    <div className={styles.parameter__item}>
                        <p><b>PARAMETER</b></p>
                        <p><b>STATUS</b></p>
                        <p><b>LAST DOWNTIME</b></p>
                        <p><b>LAST UPDATE</b></p>
                    </div>
                    <div className={styles.parameter__list}>
                        {service.parameters.map((el: any) => (
                            <div className={styles.parameter__item} key={el.id}>
                                <p className={styles.parameter__name}>{el.name}</p>
                                <p className={styles.parameter__status}>{el.status}</p>
                                <p className={styles.last__down}>{el.lastDownTime}</p>
                                <p className={styles.updated_at}>{el.lastUpdate}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div> : null}
        </div>
    )
}

export default ServiceCard;