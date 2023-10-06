const getStoredJobApplications = () => {
    const storedJobApplication = localStorage.getItem('job-application');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    } else {
        return [];
    }
}

const saveJobApplication = (id) => {
    const saveJobApplication = getStoredJobApplications();
    const exists = saveJobApplication.find(jobsId => jobsId === id);
    if (!exists) {
        saveJobApplication.push(id);
        localStorage.setItem('job-application', JSON.stringify(saveJobApplication))
    }
}

export { getStoredJobApplications, saveJobApplication };