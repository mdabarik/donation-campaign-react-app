import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Banner/Banner";

const Home = () => {

    const cards = useLoaderData();

    return (
        <div className="mb-8">
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Cards cards={cards}></Cards>
            </div>
        </div>
    );
};

export default Home;