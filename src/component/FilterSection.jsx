import PropTypes from "prop-types";
import Filter from "./Filter";

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
      <Filter
        value={filters.role}
        onChange={handleRoleChange}
        options={uniqueRoles}
      />
      <Filter
        value={filters.experience}
        onChange={handleExperienceChange}
        options={uniqueExperience}
      />
      <div>
        <label>Minimum Salary:</label>
        <input
          type="number"
          min={minSalary}
          value={filters.minimumSalary}
          onChange={handleMinimumSalaryChange}
        />
      </div>
      <div>
        <label>Company Name:</label>
        <input
          type="text"
          value={filters.companyName}
          onChange={handleCompanyNameChange}
        />
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
