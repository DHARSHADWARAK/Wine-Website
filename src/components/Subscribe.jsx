import React from 'react';
import '../index.css'
const Subscribe = () => {
  return (
    <section className="bg-neutral-900 py-5    ">
      <div className="flex flex-col justify-center items-center gap-0 px-4">
        <div className="font-tinos text-3xl md:text-4xl text-white">Subscribe for newsletter</div>
        <div className="text-neutral-400 text-center">Get updates by subscribing to our weekly newsletter to receive the latest news, events & promotions</div>
        <div className="flex flex-row items-center gap-2 md:gap-4 mt-10 md:w-[800px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="md:w-3/4 px-6 py-3 bg-neutral-800 text-white border border-neutral-700 focus:outline-none"
          />
          <button className="md:w-1/4 py-3 px-5 bg-transparent text-white border border-yellow-700  hover:bg-neutral-700">SUBSCRIBE</button>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 md:mt-14 text-white cursor-pointer hover:text-yellow-700">
            <div>^</div>
          <div>Back To Top</div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
