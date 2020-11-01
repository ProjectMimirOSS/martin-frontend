import React, { Fragment, useState, useContext } from 'react';
import styles from './health-details.module.css';
import ServiceCard from '../../components/service-card/service-card';
import SummaryCard from '../../components/summary-card/summary-card';
import Dialog from '../../components/dialog/dialog';
import AddService from '../../components/add-service/add-service';
import { GlobalContext } from '../../store/global.provider';
const HealthDetails = (props: any) => {
  const [configureService, setConfigureService] = useState(false);
  const { state } = useContext(GlobalContext)
  return (
    <Fragment>
      <div className={styles.summary__grid}>
        <SummaryCard type='SUMMARY' report={state.summaryReport}></SummaryCard>
        <SummaryCard type='ERROR' report={state.summaryReport}></SummaryCard>
      </div>
      <div className={styles.search__add}>
        <div className={styles.search__ip}>
          <p className={styles.label}>Search</p>
          <div className={styles.input__container}>
            <input className={styles.input__fld} value={''} />
          </div>
        </div>
        <button onClick={() => { setConfigureService(true) }} className={styles.ans__btn}>Add New Service</button>
      </div>
      <div className={styles.service__titles}>
        <p><b>Service</b></p>
        <p><b>Last Downtime</b></p>
        <p><b>Last Check</b></p>
        <p><b>Uptime</b></p>
        <p><b>Error</b></p>
        <p><b>Actions</b></p>
      </div>
      {state.services.map((el: any) => <ServiceCard key={el.id} service={el}></ServiceCard>)}
      <Dialog isOpen={configureService} >
        <AddService onDismiss={() => { setConfigureService(false) }}></AddService>
      </Dialog>
    </Fragment>
  );
}

export default HealthDetails;
