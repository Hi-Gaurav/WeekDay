import { useState, useEffect } from "react";
import {
  debounce,
  fetchJobListings,
  filterObjectsWithNullValues,
  handleInfiniteScroll,
} from "../utils/utils";
import Card from "./Card";

const JobListingMain = () => {
  const [jobListings, setJobListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const newJobListings = await fetchJobListings(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          limit: 10,
          offset: currentPage,
        }
      );
      const filteredListings = filterObjectsWithNullValues(newJobListings);
      setJobListings((prevListings) => [...prevListings, ...filteredListings]);
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

  console.log(jobListings, "8943h0pih43");
  return (
    <>
      {jobListings?.map((job, index) => {
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
    </>
  );
};

export default JobListingMain;
