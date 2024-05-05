export const fetchJobListings = async (url, data = {}) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch job listings");
    }
    const jobs = await response.json();
    return jobs.jdList;
  } catch (error) {
    console.error("Error fetching job listings:", error);
    return [];
  }
};
