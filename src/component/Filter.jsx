import PropTypes from "prop-types";

const Filter = ({ value, onChange, options }) => (
  <div>
    <select value={value} onChange={onChange}>
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
};

export default Filter;
