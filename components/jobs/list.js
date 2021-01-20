import JobHospital from "./JobHospital";

export default function ListItems({jobs}) {
    return (
            jobs ? jobs.map((job, index) => (
                <JobHospital job={job} key={index}/>
            )):''
        
    )
}