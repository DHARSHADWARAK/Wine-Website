import React from 'react';
import '../index.css'; // Adjust the path according to your project structure

const Discover = () => {
  return (
    <>
      <section
        className=' flex flex-col items-center justify-center  text-white'
        style={{
          backgroundImage: "url('src/assets/Grape_bg_3.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
            
        <div className='flex flex-col justify-center md:mr-[40vw] items-center py-10 px-5 md:py-20  md:w-[35rem] gap-4'>
            <h2 className="font-tinos text-3xl">Discover.Taste.Enjoy</h2>
            <div className="w-12 " style={{ height: '2px', backgroundColor: '#FFF' }}/>
            <p className='text-center'>
            When you first start smelling wine, think big to begin with broad categories like fruit, spice, or earthiness. As you delve deeper, identify specific notes such as ripe berries, vanilla, or even a hint of oak.
            </p>
        <div className='flex flex-row justify-center items-center  gap-3'>
            <button>
                
        <div className="flex items-center justify-center w-[38px] h-[38px] bg-yellow-600 rounded-full">
      <svg
        className="w-6 h-6 text-white"  // Increased size here
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        >
        <path
          fillRule="evenodd"
          d="M6 4.5l12 7.5-12 7.5V4.5z"  // Adjusted path for larger triangle
          clipRule="evenodd"
          />
      </svg>
    </div>
            </button>
    <div>Video Showcase</div>  
        </div>
</div>
      </section>
    </>
  );
};

export default Discover;
