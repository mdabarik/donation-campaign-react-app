
const Card = ({card}) => {
    const {id, title, category, picture, color_cat_bg, color_card_bg, color_text_button} = card;

    return (
        <div className='border border-blue-300 rounded-lg'>
            <div className='h-[180px] border border-gray-800'>
                <img className='w-full h-full' src={picture}/>
            </div>
            <div style={{background: color_card_bg, color: color_text_button}} className={`border border-red-500 bg-[${color_card_bg}]`}>
                <p style={{background: color_cat_bg}}>{category}</p>
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default Card;