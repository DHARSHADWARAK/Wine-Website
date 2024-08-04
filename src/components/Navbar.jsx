import PropTypes from 'prop-types';

const NavBar = ({ className = '' }) => {
    return (
        <div>
            <section className={`relative self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[284px] box-border gap-[210px] max-w-full text-center text-[48px] text-gray-100 font-inter mq450:gap-[52px] mq800:gap-[105px] mq800:pb-[120px] mq800:box-border mq1125:pb-[185px] mq1125:box-border ${className}`}>
                <img
                    className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                    alt="Hero background"
                    src="/src/assets/re.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />
                {/* Gradient overlay for image */}

                <header className="self-stretch flex  flex-row items-center justify-between top-[0] z-[99] sticky max-w-full text-left text-base text-white font-inter">
                    <div className={`flex-1 bg-transparent flex flex-row items-center justify-center p-5 box-border max-w-full text-center text-5xl text-white font-inter ${className}`}>
                        <div className="md:w-[1200px] flex flex-col md:flex-row items-center justify-between gap-[20px] max-w-full">
                            
                        <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-left text-base">
                                <div className="flex flex-row items-start justify-start gap-[16px]">
                                    <div className="flex flex-row items-start justify-start gap-[2px]">
                                        <div className="relative hover:[text-decoration:underline] hover:cursor-pointer leading-[150%] inline-block min-w-[72px] whitespace-nowrap">
                                            Products
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start justify-start gap-[2px]">
                                        <div className="relative hover:[text-decoration:underline] hover:cursor-pointer leading-[150%] inline-block min-w-[86px] whitespace-nowrap">
                                            Learn More
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start justify-start gap-[2px]">
                                        <div className="relative hover:[text-decoration:underline] hover:cursor-pointer leading-[150%] inline-block min-w-[60px] whitespace-nowrap">
                                            Sign Up
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-center">
                                <h3 className="font-tinos m-0 relative  leading-[29px] font-semibold font-inherit inline-block min-w-[90px] whitespace-nowrap ">
                                    Wize
                                </h3>
                            </div>

                            <div className='hidden md:flex flex-row gap-5'>
                    <svg width="20px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10z" fill="#fff"/></svg>

                    <svg width="20px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="7" r="5" stroke="#fff" stroke-width="2"/>
                    <path d="M17 14H17.3517C18.8646 14 20.1408 15.1266 20.3285 16.6279L20.719 19.7519C20.8682 20.9456 19.9374 22 18.7344 22H5.26556C4.06257 22 3.1318 20.9456 3.28101 19.7519L3.67151 16.6279C3.85917 15.1266 5.13538 14 6.64835 14H7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                          
                        </div>
                    </div>
                </header>

                <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
                    <div className="w-[794px] flex flex-col items-start justify-start gap-[40px] max-w-full z-[1] mq450:gap-[20px]">
                        <div className="flex flex-col items-start justify-start gap-[24px]">
                            <h1 className="m-0 relative text-[32px] leading-[120%] font-semibold font-tinos mq450:text-[20px] mq450:leading-[40px] mq800:text-[28px] mq800:leading-[54px]">
                                Wines that blow your mind!
                            </h1>
                            {/* Gold line below the heading */}
                            <div className="w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full mb-4"></div>
                            <p className="m-0 relative text-base leading-[140%] font-normal font-inherit mq450:text-sm mq450:leading-[22px]">
                                Discover breathtaking destinations and create unforgettable memories.
                            </p>
                        </div>
                        <div className="flex flex-row items-start justify-start">
                            <button className="cursor-pointer py-2 px-4 bg-[transparent] [filter:drop-shadow(2px_4px_6px_rgba(5,_45,_53,_0.1))] border-[#D4AF37] border-[1px] border-solid flex flex-row items-center justify-center hover:bg-gainsboro-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-[#D4AF37] transition-all duration-300">
                                <div className="relative text-lg leading-[150%] font-inter text-gray-100 text-center inline-block min-w-[75px] mq450:text-base mq450:leading-[29px]">
                                    Explore
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

               


            </section>
        </div>
    );
};

NavBar.propTypes = {
    className: PropTypes.string,
};

export default NavBar;