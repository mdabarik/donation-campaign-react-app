import { Link } from 'react-router-dom';

const DonationCard = ({ card }) => {
    return (
        <div className='flex flex-col md:flex-row border rounded-lg'>
            <div className='w-[100%] md:w-[80%]'>
                <img style={{objectFit:'cover'}} className='h-full w-full' src={card.picture} />
            </div>
            <div className='flex w-[100%] flex-col items-start justify-center px-6 py-8' style={{ backgroundColor: card.color_card_bg }}>
                <h3 className='px-3 py-1 rounded-lg' style={{ backgroundColor: card.color_cat_bg }}>{card.category}</h3>
                <h2 className='text-2xl mt-2 font-bold'>{card.title}</h2>
                <p className='mt-2' style={{ color: card.color_text_button }}>${card.price}</p>
                <Link to={`/${card.id}`} className='px-6 text-white py-2 mt-4 rounded-lg' style={{ backgroundColor: card.color_text_button }}>View Details</Link>
            </div>
        </div>
    );
};

export default DonationCard;