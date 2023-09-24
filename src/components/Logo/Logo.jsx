
const Logo = () => {
    return (
        <div className="flex justify-start items-center">
            <div>
                <img src="./logo.svg" />
            </div>
            <div className="flex flex-col justify-center items-start">
                <h2 className="text-[#FF444A] text-4xl font-bold">Donation</h2>
                <p style={{letterSpacing: '12px', color: '#0b0b0bb3'}}>Campaign</p>
            </div>
        </div>
    );
};

export default Logo;