import React, { useState } from "react"
import styles from './add-service.module.css';
import Input from "../input/input";
import ServicePing from "../service-ping/service-ping";
const AddService = (props: any) => {
    const _intitalState = {
        serviceName: ''
    };
    const [state, setstate] = useState(_intitalState);
    const updateNameHandler = (ev: any) => {
        setstate({
            ...state,
            serviceName: ev,
        });
    }
    return (
        <div className={styles.add__service__component}>
            <div className={styles.title__container}>
                <p className={styles.title}>Add new Service</p>
                <button className={styles.save__btn}>Save</button>
            </div>
            <div className={styles.body__section}>
                <div className={styles.service__section}>
                    <div className={styles.service__name__ip}>
                        <Input clear value={state.serviceName} placeholder="Enter Service Name" type="text" name="search" changed={updateNameHandler} cleared={updateNameHandler}></Input>
                    </div>
                    <ServicePing hideInterval={false}></ServicePing>
                </div>
                <div className={styles.response__section}>
                    <h3 className={styles.subtitle}>PARAMETERS</h3>
                    <div className={styles.parameter__list}>
                        {[1, 2, 3, 4, 5, 6, 7].map(el => <p className={styles.parameter} key={el}>Parameter</p>)}
                    </div>

                </div>
                <div className={styles.response__section}>
                    <h3 className={styles.subtitle}>RESULT</h3>
                    <code>
                        <pre>{JSON.stringify({ "sang": "never", "band": "had", "wheat": true, "ill": "not", "writing": -232155741 }, null, 2)}</pre>
                    </code>
                </div>
                <p className={styles.cancel} onClick={props.onDismiss}>Cancel</p>
            </div>
        </div>
    )
}

export default AddService;