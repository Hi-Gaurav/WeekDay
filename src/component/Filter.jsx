import PropTypes from "prop-types";
import styles from "./filter.module.css";

const Filter = ({ value, onChange, options, placeholder }) => (
  <div className={styles.selectContainer}>
    <select
      placeholder={placeholder}
      className={styles.filterBox}
      value={value}
      onChange={onChange}
    >
      <option value="">All</option>
      {options.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string,
};

export default Filter;
