import styles from "./card.module.css";
import time_ic from "../assets/static/time.svg";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <>
      <div className={styles.border}>
        <div className={styles.dayPosted}>
          <img className={styles.timeIc} src={time_ic} alt="time_ic" />
          Posted 10 days ago
        </div>
        <div className={styles.basicRoleInfo}>
          <img src={props?.logoUrl} className={styles.companyLogo}></img>
          <div className={styles.otherDetails}>
            <div className={styles.companyName}>{props?.companyName}</div>
            <div className={styles.roleName}>
              {props?.jobRole.toUpperCase()}
            </div>
            <div className={styles.location}>{props?.location}</div>
          </div>
        </div>
        <div className={styles.salaryInfo}>
          Estimated Salary: {props?.minJdSalary}-{props?.maxExp}{" "}
          {props?.salaryCurrencyCode} ✅
        </div>
        <div className={styles.aboutCompany}>
          <p>About Company:-</p>
          <p>About Us</p>
          <p>{props?.jobDetailsFromCompany}</p>
          <button className={styles.viewMore}>view more</button>
        </div>
        <div className={styles.experience}>
          <p>Minimum Experience</p>
          <p>{props?.minExp} years</p>
        </div>
        <div className={styles.actionButtons}>
          <button className={styles.easyApply}>⚡Easy Apply</button>
          <button className={styles.askReferral}>Ask for referral</button>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  companyName: PropTypes.string,
  jobRole: PropTypes.string,
  minExp: PropTypes.number,
  minJdSalary: PropTypes.number,
  maxExp: PropTypes.number,
  salaryCurrencyCode: PropTypes.string,
  jobDetailsFromCompany: PropTypes.string,
  location: PropTypes.string,
  logoUrl: PropTypes.string,
};

export default Card;
