import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const cards = useLoaderData();
    const params = useParams();

    const card = cards.find(card => card.id == params.id);

    return (
        <div>
            <div className="h-[600px] relative">
                <img style={{ backgroundSize: 'cover', objectFit: 'cover' }} className="w-full h-[600px] rounded-lg" src={card.picture} />
                <div style={{ background: 'rgba(11, 11, 11, 0.50)' }} className="absolute bottom-0 text-white w-full p-8 rounded-b-lg">
                    <button style={{ background: card.color_text_button }} className="py-4 px-5 text-white font-semibold rounded-lg">Donate ${card.price}</button>
                </div>
            </div>
            <h2 className="font-bold mt-5 text-black text-[30px] py-4">{card.title}</h2>
            <p className="text-[#0B0B0B] text-[16px] mb-10">{card.description}</p>
        </div>
    );
};

export default CardDetails;