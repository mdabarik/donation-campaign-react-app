import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Header from "../../components/Header/Header";

const Home = () => {

    const cards = useLoaderData();

    return (
        <div className="container mx-auto">
            <Header></Header>
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;