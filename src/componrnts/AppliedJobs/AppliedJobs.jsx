import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../Utility/LocalStorage";


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobsList, setAlliedJobsList] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobsList);
        } else if (filter === 'remote') {
            const remoteJobs = appliedJobsList.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        } else if (filter === 'onsite') {
            const onsiteJobs = appliedJobsList.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedIds = getStoredJobApplications();
        if (jobs.length > 0) {
            const alreadyApplied = [];
            for (const id of storedIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    alreadyApplied.push(job)
                }
            }
            setAlliedJobsList(alreadyApplied);
            setDisplayJobs(alreadyApplied);
        }
    }, [])

    return (
        <div>
            <h2 className="text-2xl">Jobs i applied: {appliedJobsList.length}</h2>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <span>{job.job_title}{job.company_name}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;