import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {

    const [cardIds, setCardIds] = useState([]);
    const [cards, setCards] = useState([]);
    const [displayCards, setDisplayCards] = useState([]);
    const [showAll, setShowAll] = useState(false);


    useEffect(() => {
        const storedCards = localStorage.getItem('donate');
        if (storedCards !== null) {
            const allCardsIds = JSON.parse(storedCards);
            setCardIds(allCardsIds);
        }
    }, []);

    useEffect(() => {
        fetch('campaigns.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, [cardIds])

    useEffect(() => {
        const display = cards.filter(card => cardIds.includes(card.id));
        setDisplayCards(display);
    }, [cardIds, cards])

    console.log(displayCards);

    return (
        <div className="mx-auto flex flex-col items-center justify-center mb-10">
            <h2 className="text-3xl font-bold mb-8">Total Donations: {displayCards.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                
                {   
                    showAll ? 
                    displayCards.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                    :
                    displayCards.slice(0,4).map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                }
            </div>
            {
                displayCards.length <= 4 ? "" :

                showAll 
                ? 
                <button 
                    onClick={() => setShowAll(!showAll)}
                    className="bg-[#009444] w-fit py-2 px-6 rounded-lg text-white">See Less</button>
                :
                <button 
                    onClick={() => setShowAll(!showAll)}
                    className="bg-[#009444] w-fit py-2 px-6 rounded-lg text-white">See All</button>
            }
        </div>
    );
};

export default Donation;