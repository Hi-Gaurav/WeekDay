import { useState, useEffect } from "react";
import styles from "./home.module.css";
import {
  debounce,
  fetchJobListings,
  filterObjectsWithNullValues,
  handleInfiniteScroll,
} from "../utils/utils";
import Card from "./Card";
import LoadingState from "./LoadingState";
import FilterSection from "./FilterSection";

const JobListingMain = () => {
  const [jobListings, setJobListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    role: "",
    experience: "",
    minimumSalary: 0,
    companyName: "",
  });
  const [uniqueRoles, setUniqueRoles] = useState([]);
  const [uniqueExperience, setUniqueExperience] = useState([]);
  const [minSalary, setMinSalary] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const newJobListings = await fetchJobListings(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          limit: 9,
          offset: currentPage,
        }
      );
      const filteredListings = filterObjectsWithNullValues(newJobListings);
      setJobListings((prevListings) => [...prevListings, ...filteredListings]);

      const roles = filteredListings.map((job) => job.jobRole);
      setUniqueRoles([...new Set(roles)]);

      const experienceLevels = filteredListings
        .map((job) => job.minExp)
        .sort((a, b) => a - b);
      setUniqueExperience([...new Set(experienceLevels)]);

      const minSalaryValue = Math.min(
        ...filteredListings.map((job) => job.minJdSalary)
      );
      setMinSalary(minSalaryValue);

      setLoading(false);
    };
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    const debouncedHandleScroll = debounce(() => {
      handleInfiniteScroll(currentPage, setCurrentPage);
    }, 200);

    const handleScroll = () => {
      debouncedHandleScroll();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage, setCurrentPage]);

  const handleRoleChange = (event) => {
    setFilters({ ...filters, role: event.target.value });
  };

  const handleExperienceChange = (event) => {
    setFilters({ ...filters, experience: event.target.value });
  };

  const handleMinimumSalaryChange = (event) => {
    setFilters({ ...filters, minimumSalary: parseInt(event.target.value) });
  };

  const handleCompanyNameChange = (event) => {
    setFilters({ ...filters, companyName: event.target.value });
  };

  const filteredJobListings = jobListings.filter((job) => {
    return (
      (!filters.role || job.jobRole === filters.role) &&
      (!filters.experience || job.minExp == filters.experience) &&
      (!filters.minimumSalary || job.minJdSalary >= filters.minimumSalary) &&
      (!filters.companyName ||
        job.companyName
          .toLowerCase()
          .includes(filters.companyName.toLowerCase()))
    );
  });

  return (
    <>
      <FilterSection
        filters={filters}
        handleRoleChange={handleRoleChange}
        handleExperienceChange={handleExperienceChange}
        handleMinimumSalaryChange={handleMinimumSalaryChange}
        handleCompanyNameChange={handleCompanyNameChange}
        uniqueRoles={uniqueRoles}
        uniqueExperience={uniqueExperience}
        minSalary={minSalary}
      />

      <div className={styles.jobs}>
        {filteredJobListings?.map((job, index) => {
          return (
            <Card
              key={index}
              jobRole={job?.jobRole}
              companyName={job?.companyName}
              minExp={job?.minExp}
              maxExp={job?.maxExp}
              minJdSalary={job?.minJdSalary}
              salaryCurrencyCode={job?.salaryCurrencyCode}
              jobDetailsFromCompany={job?.jobDetailsFromCompany}
              location={job?.location}
              logoUrl={job?.logoUrl}
            />
          );
        })}
      </div>
      {loading && <LoadingState />}
    </>
  );
};

export default JobListingMain;
