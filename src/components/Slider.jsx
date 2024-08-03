import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../index.css'

const testimonials = [
  {
    id: 1,
    name: 'Darrell Flores',
    title: 'Designer, London',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.',
    image: 'https://via.placeholder.com/50',
  },
  {
    id: 2,
    name: 'Jason Mamo',
    title: 'Designer, UK',
    text: 'in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.',
    image: 'https://via.placeholder.com/50',
  },
  {
    id: 3,
    name: 'Harrison Ford',
    title: 'Actor, USA',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, consequuntur?',
    image: 'https://via.placeholder.com/50',
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleSwipe = (delta) => {
    if (delta > 0) {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(-1),
    onSwipedRight: () => handleSwipe(1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // for mouse dragging
  });

  return (
    <section {...swipeHandlers}>
      <div className='flex flex-row bg-black justify-center items-center'>
        <img src="src/assets/Drinking_man.jpeg" alt="" className='w-[50%]' />
        <div className='text-white w-[50%]'>
          <div className="max-w-md mx-auto text-white">
            <div>
              <div className="flex flex-col items-start gap-5">
                <div className='text-3xl font-tinos' >What Get People Saying</div>
                <div className="flex flex-col justify-center items-center gap-3">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className='flex flex-col justify-center items-center'>
                    <h3 className="text-lg font-semibold text-yellow-500">{testimonials[currentIndex].name}</h3>
                    <p className="text-gray-400">{testimonials[currentIndex].title}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  {testimonials[currentIndex].text}
                </p>
              <div className="flex items-start mt-4">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
                      currentIndex === index ? 'bg-yellow-500' : 'bg-gray-400'
                    }`}
                    onClick={() => handleDotClick(index)}
                  ></span>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
