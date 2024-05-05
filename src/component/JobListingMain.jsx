import { useState, useEffect } from "react";
import { fetchJobListings, filterObjectsWithNullValues } from "../utils/utils";
import Card from "./Card";

const JobListingMain = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newJobListings = await fetchJobListings(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          limit: 10,
          offset: 0,
        }
      );
      const filteredListings = filterObjectsWithNullValues(newJobListings);
      setJobListings(filteredListings);
    };
    fetchData();
  }, []);

  console.log(jobListings, "8943h0pih43");
  return (
    <>
      {jobListings?.map((job, index) => {
        return (
          <Card
            jobRole={job?.jobRole}
            companyName={job?.companyName}
            minExp={job?.minExp}
            minJdSalary={job?.minJdSalary}
            key={index}
          />
        );
      })}
    </>
  );
};

export default JobListingMain;
