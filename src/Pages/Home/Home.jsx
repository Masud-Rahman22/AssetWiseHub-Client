// import About from "../../Main Layout/About/About";
import { Helmet } from "react-helmet-async";
import About from "../../Main Layout/About/About";
import Banner from "../../Main Layout/Banner/Banner";
import Packages from "../../Main Layout/Packages/Packages";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>AssetWise | Home</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <Packages></Packages>
        </div>
    );
};

export default Home;