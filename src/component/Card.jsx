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
          <div className={styles.companyLogo}></div>
          <div className={styles.otherDetails}>
            <div className={styles.companyName}>{props?.companyName}</div>
            <div className={styles.roleName}>{props?.jobRole}</div>
            <div className={styles.location}>Bangalore</div>
          </div>
          <div className={styles.salaryInfo}>{props?.minJdSalary}-a18 LPA</div>
        </div>
        <div className={styles.aboutCompany}>
          <p>About Company:-</p>
          <p>About Us</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo error
            aliquid, harum omnis architecto impedit nisi laboriosam quo, dolore
            in at maiores suscipit, quis tenetur nesciunt deleniti illo enim
            dignissimos.
          </p>
          <button className={styles.viewMore}>view more</button>
        </div>
        <div className={styles.experience}>{props?.minExp} years</div>
        <div className={styles.actionButtons}>
          <button className={styles.easyApply}>Easy Apply</button>
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
};

export default Card;
