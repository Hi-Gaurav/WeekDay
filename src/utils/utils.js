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
    return jobs?.jdList;
  } catch (error) {
    console.error("Error fetching job listings:", error);
    return [];
  }
};

export const filterObjectsWithNullValues = (data) => {
  return data.filter((item) => {
    for (let key in item) {
      if (item[key] === null) {
        return false;
      }
    }
    return true;
  });
};

export const handleInfiniteScroll = async (currentPage, setCurrentPage) => {
  try {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  } catch (err) {
    console.log(err);
  }
};

export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
