
# fullstack-candidate-testing

## Instructions

1. The demo is hosted @ https://clipboard-health-imox.vercel.app/

## Installation info
1. clone the repo
2. `npm i ` to install the packages
3. `npm run dev` to run the app @ localhost:3000


## Implementation Info
1. **Search** - search is done by stringifying job items and finding the search text on the stringifed object
2. **Sort** - Different property of job object is used for different type of sort. 
*role => job_title,
location => state,
experience => experience,
department => department,
education => required_credentials,*
