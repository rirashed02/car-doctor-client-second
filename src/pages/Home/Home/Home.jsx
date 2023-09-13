import AboutUs from '../../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Features from '../Features/Features';
import Products from '../Products/Products';
import Service from '../Services/Service';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div className="md:max-w-7xl mx-auto">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Service></Service>
            <Contact></Contact>
            <Products></Products>
            <Team></Team>
            <Features></Features>
        </div>
    );
};

export default Home;