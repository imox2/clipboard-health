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


const sortJobs = (jobs, sortBy) => {
  console.log("sortBy:",sortBy);
  for (var propName in sortBy) {
    if (sortBy[propName] === null || sortBy[propName] === undefined) {
      delete sortBy[propName];
    }
  }

  console.log("sortBy:",sortBy);

  const sortingMap = {
    'location': {key: 'state', type: 'string'},
    'role': {key: 'job_title', type: 'string'},
    'experience': {key: 'experience', type: 'string'},
    'department': {key: 'department', type: 'array'},
    'education': {key: 'required_credentials', type: 'array'},
  }
  jobs.forEach(job => {
    Object.keys(sortBy).forEach( key => {
        job.items = sortArrayOfItems(job.items, sortingMap[key]['key'],
            sortingMap[key]['type'], sortBy[key])
    });
  });
  return jobs;
}
const sortArrayOfItems = (jobItems, sortingKey, sortingKeyType, sortType) => {
  console.log(sortingKey, sortingKeyType, sortType);
  if(sortType == 'asc') {
    jobItems.sort(function (a, b) {
      let valA = a[sortingKey];
      let valB = b[sortingKey];
    if(sortingKeyType == 'array')
    {
      valA = a[sortingKey].toString();
    }
    return valA.localeCompare(valB);
  });
  } else {
    jobItems.sort(function (a, b) {
    let valA = a[sortingKey];
      let valB = b[sortingKey];
    if(sortingKeyType == 'array')
    {
      valA = a[sortingKey].toString();
    }
    return valB.localeCompare(valA);
  });
  }
  return jobItems;
}
  
export { searchJobs, filterJobs, sortJobs };