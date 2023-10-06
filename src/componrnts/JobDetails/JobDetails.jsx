import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    const handleJobApply = () => {
        saveJobApplication(idInt);
        toast("You Apply Job")
    };
    return (
        <div className="grid gap-4 grid-cols-4">
            <div className="border col-span-3">
                <h1 className="text-4xl">Details Coming here</h1>
                <h2>Job Details of: {job.job_title}</h2>
                <p>Company Name: {job.company_name}</p>
            </div>
            <div className="border col-span-1">
                <h2 className="text-2xl">Side Things</h2>
                <button onClick={handleJobApply} className="btn btn-primary w-full">Apply</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;