import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Banner/Banner";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
    const [displayCards, setDisplayCards] = useState([]);
    const cards = useLoaderData();

    const handleFormSubmit = (e, myRef) => {
        e.preventDefault();
        const search_keyword = myRef.current.value.trim();
        const filteredCards = cards.filter(card => card.category.toLowerCase().indexOf(search_keyword.toLowerCase()) != -1);
        setDisplayCards(filteredCards)
    }

    useEffect(() => {
        setDisplayCards(cards);
    }, [])

    return (
        <div className="mb-8">
            <div>
                <Banner handleFormSubmit={handleFormSubmit}></Banner>
            </div>
            <div>
                {
                    displayCards.length == 0 ?
                        <h2 className="text-center">No result found, search with different keyword.</h2> :
                        <Cards cards={displayCards}></Cards>
                }
            </div>
        </div>
    );
};

export default Home;