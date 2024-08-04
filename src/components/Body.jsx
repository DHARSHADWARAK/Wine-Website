import React from 'react';
import PropTypes from 'prop-types';

// WineCard Component
// WineCard Component
const WineCard = ({ title, description, wines, imageSrc, imageAlt, reverse, className = '' }) => (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-black rounded-lg overflow-hidden shadow-lg ${className} WineCard`} style={{ flex: 1 }}>
        {imageSrc ? (
            <div className="w-full h-48 lg:h-full">
                <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
            </div>
        ) : (
            <div className={`w-full p-6 lg:p-8 flex flex-col justify-center ${!title && !description && !wines ? 'text-center' : ''}`}>
                <div className="flex-grow">
                    <h2 className="text-xl lg:text-2xl font-bold mb-4 text-white"> {/* Keeping title text white for contrast */}
                        {title}
                    </h2>
                    <p className="mb-4 text-gray-300 text-sm lg:text-base"> {/* Keeping description text gray for contrast */}
                        {description}
                    </p>
                    {wines && (
                        <ul className="mb-6">
                            {wines.map((wine, index) => (
                                <li key={index} className="mb-2 flex items-center text-gray-300 text-sm lg:text-base"> {/* Keeping wine list text gray for contrast */}
                                    <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    {wine}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {!imageSrc && !title && !description && !wines && (
                    <button className="bg-transparent border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-gray-800 transition duration-300 self-center text-sm lg:text-base">
                        SHOP NOW
                    </button>
                )}
            </div>
        )}
    </div>
);

// PhilosophyItem Component
const PhilosophyItem = ({ icon, title, description }) => (
    <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
        <img
            src={icon}
            alt={`${title} Icon`}
            className="w-10 h-10 mb-2"
        />
        <p className="text-center font-semibold">{title}</p>
        <p className="text-center text-sm mt-2">
            {description}
        </p>
    </div>
);

// WineSection Component
const WineSection = ({ className = '' }) => {
    return (
        <div className={`bg-[#0C0D0F] ${className}`}>
            <section className="relative flex flex-col items-center justify-center py-16 lg:py-24 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl lg:text-4xl font-bold text-center font-form-serif relative mb-12">
                        Winemaking Philosophy
                        <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 block w-32 h-0.5 bg-[#d4af37]"></span>
                    </h1>
                    <div className="flex flex-wrap justify-center items-start gap-8">
                        <PhilosophyItem
                            icon="/src/assets/grape.svg"
                            title="Vineyard"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                        <PhilosophyItem
                            icon="/src/assets/bottle.svg"
                            title="Wine Store"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                        <PhilosophyItem
                            icon="/src/assets/wineglass.svg"
                            title="Restaurant"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                        <PhilosophyItem
                            icon="/src/assets/signboard.svg"
                            title="Our Story"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5 flex justify-center items-center">
                        <WineCard
                            imageSrc="/src/assets/cardbottle1.jpg"
                            imageAlt="White wine"
                            className="h-full text-black"
                        />
                    </div>

                    <div className="lg:col-span-7 flex justify-center items-center">
                        <WineCard
                            title="Excellent Red Wines"
                            description="After the harvest, the grapes are taken into a winery and prepared for primary ferment."
                            wines={['Cabernet Sauvignon', 'Pinot Noir', 'Merlot']}
                            reverse={true}
                            className="h-full text-black"
                        />
                    </div>

                    <div className="lg:col-span-7 flex justify-center items-center">
                        <WineCard
                            title="Classic Rosé Wines"
                            description="Explore our selection of rosé wines that bring a fresh and crisp taste."
                            wines={['Grenache', 'Syrah', 'Tempranillo']}
                            reverse={false}
                            className="h-full text-black"
                        />
                    </div>

                    <div className="lg:col-span-5 flex justify-center items-center">
                        <WineCard
                            imageSrc="/src/assets/cardbottle1.jpg"
                            imageAlt="Sparkling wine"
                            className="h-full text-black"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

WineSection.propTypes = {
    className: PropTypes.string,
};

export default WineSection;