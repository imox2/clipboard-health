import jobs from '../../data/jobs'
import { searchJobs, filterJobs } from './utils'

export default async (req, res) => {
  res.statusCode = 200
  // @todo: implement filters and search
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()))

  const { search, filters } = req.query;
  let matchedJobs = JSON.parse(JSON.stringify(jobs));
  if (search && search !== "null") {
  	console.log("search for...",search);
  	matchedJobs = searchJobs(matchedJobs, search);
  }
  if(filters) {
  	matchedJobs = filterJobs(matchedJobs, filters);
  }
  // console.log("matchedJobs:",matchedJobs);
  res.json(matchedJobs);
}
