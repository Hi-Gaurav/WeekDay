import PropTypes from "prop-types";
import Filter from "./Filter";
import styles from "./filter.module.css";

const FilterSection = ({
  filters,
  handleRoleChange,
  handleExperienceChange,
  handleMinimumSalaryChange,
  handleCompanyNameChange,
  uniqueRoles,
  uniqueExperience,
  minSalary,
}) => {
  return (
    <>
      <div className={styles.filterContainer}>
        <Filter
          value={filters.role}
          onChange={handleRoleChange}
          options={uniqueRoles}
          placeholder="Role"
        />
        <Filter
          value={filters.experience}
          onChange={handleExperienceChange}
          options={uniqueExperience}
          placeholder="Experience"
        />
        <div>
          <input
            className={styles.filterBox}
            type="number"
            min={minSalary}
            value={filters.minimumSalary}
            onChange={handleMinimumSalaryChange}
            placeholder="Minimum Salary"
          />
        </div>
        <div>
          <input
            className={styles.filterBox}
            type="text"
            value={filters.companyName}
            onChange={handleCompanyNameChange}
            placeholder="Company Name"
          />
        </div>
      </div>
    </>
  );
};

FilterSection.propTypes = {
  filters: PropTypes.shape({
    role: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    minimumSalary: PropTypes.number.isRequired,
    companyName: PropTypes.string.isRequired,
  }).isRequired,
  handleRoleChange: PropTypes.func.isRequired,
  handleExperienceChange: PropTypes.func.isRequired,
  handleMinimumSalaryChange: PropTypes.func.isRequired,
  handleCompanyNameChange: PropTypes.func.isRequired,
  uniqueRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  uniqueExperience: PropTypes.arrayOf(PropTypes.string).isRequired,
  minSalary: PropTypes.number.isRequired,
};

export default FilterSection;
