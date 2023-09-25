import { useNavigate } from "react-router-dom";

const Card = ({card}) => {
    const {id, title, category, picture, color_cat_bg, color_card_bg, color_text_button} = card;

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/${id}`)
    }

    return (
        <div className='rounded-lg' onClick={handleCardClick}>
            <div className='h-[180px]'>
                <img style={{objectFit: 'cover'}} className='w-full h-full rounded-t-lg' src={picture}/>
            </div>
            <div style={{background: color_card_bg, color: color_text_button}} className={`bg-[${color_card_bg}] rounded-b-lg p-4`}>
                <p className="py-1 rounded-md mb-1 px-3 w-fit" style={{background: color_cat_bg, color:color_text_button}}>{category}</p>
                <h2 className="text-[20px] font-bold" style={{color:color_text_button}}>{title}</h2>
            </div>
        </div>
    );
};

export default Card;