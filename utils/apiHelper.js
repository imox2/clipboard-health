export function computeTotalJobs(jobs) {
   const jobSum = jobs.reduce((acc, job) => acc + job.total_jobs_in_hospital, 0);
   return jobSum;
}