import JobHospital from "./JobHospital";
import Skeleton from './skeleton'

export default function ListItems({jobs}) {
    return (
            jobs ? jobs.map((job, index) => (
                <JobHospital job={job} key={index}/>
            )):<Skeleton />
        
    )
}