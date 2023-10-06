import Banner from "../Banner/Banner";
import FeatureJobs from "../FeatureJobs/FeatureJobs";
import JobCategory from "../JobCategory/JobCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeatureJobs></FeatureJobs>
        </div>
    );
};

export default Home;