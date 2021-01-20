const searchJobs = (jobs, searchText) => {
  const foundJobs = [];
  jobs.forEach(job => {
    job.items = searchTextInObject(job.items, searchText);
    job.total_jobs_in_hospital = job.items.length;
    if(job.total_jobs_in_hospital > 0) {
      foundJobs.push(job);
    }
  });
  return foundJobs;
};

const searchTextInObject = (itemsArray,searchText) => {
  let arrayOfMatchedObjects = itemsArray.filter(object => {
    return JSON.stringify(Object.values(object))
      .toString()
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  return arrayOfMatchedObjects;
}

export default searchJobs;
