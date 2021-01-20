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

const filterJobs = (jobs, filters) => {
  const filtersArray = filters.split(',')
  const foundJobs = [];
  jobs.forEach(job => {
    job.items = filterTextInObject(job.items, filtersArray);
    job.total_jobs_in_hospital = job.items.length;
    if(job.total_jobs_in_hospital > 0) {
      foundJobs.push(job);
    }
  });
  return foundJobs;
};

const filterTextInObject = (itemsArray,filtersArray) => {
  let arrayOfMatchedObjects = itemsArray.filter(object => {
    const text = JSON.stringify(Object.values(object))
      .toString()
      .toLowerCase();
    return filtersArray.every( filter => text.includes(filter.toLowerCase()));
  });

  return arrayOfMatchedObjects;
}


const searchTextInObject = (itemsArray,searchText) => {
  let arrayOfMatchedObjects = itemsArray.filter(object => {
    return JSON.stringify(Object.values(object))
      .toString()
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  return arrayOfMatchedObjects;
}

export { searchJobs, filterJobs };