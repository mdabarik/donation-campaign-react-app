import './Logo.css';

const Logo = () => {
    return (
        <div className="flex justify-start items-center">
            <div>
                <img className='logo-img' src="./logo.svg" />
            </div>
            <div className="flex flex-col justify-center items-start">
                <h2 className="text-[#FF444A] text-2xl md:text-4xl font-bold logo-txt">Donation</h2>
                <p className="logo">Campaign</p>
            </div>
        </div>
    );
};

export default Logo;