import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ src, alt, name, price }) => {
    return (
        <div className="rounded-lg shadow-md overflow-hidden cursor-pointer">
            <img src={src} alt={alt} className="w-full h-48 object-cover cursor-pointer" />
            <div className="p-4 text-center">
                <p className="text-white">{name}</p>
                <p className="text-white text-sm">Price: ${price}</p>
            </div>
        </div>
    );
};

const Products = ({ children, className = '' }) => {
    return (
        <section className="relative flex flex-col items-center justify-center py-16 lg:py-24 text-white bg-[#0C0D0F]">
            <h2 className="text-3xl lg:text-4xl font-bold text-center font-form-serif relative mb-12">
                Our Products
                <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 block w-32 h-0.5 bg-[#d4af37]"></span>
            </h2>
            <div className="flex space-x-4 mb-8">
                <button className="bg-transparent border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-gray-800 transition duration-300">All</button>
                <button className="bg-transparent border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-gray-800 transition duration-300">Red Wine</button>
                <button className="bg-transparent border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-gray-800 transition duration-300">White Wine</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:grid-cols-1 sm:gap-6">
                <ProductCard src="/src/assets/cardbotttle2.jpg" alt="Cabernet Sauvignon" name="Cabernet Sauvignon" price="29.99" />
                <ProductCard src="/src/assets/re.jpg" alt="Chardonnay" name="Chardonnay" price="24.99" />
                <ProductCard src="/src/assets/cardbotttle2.jpg" alt="Cabernet Sauvignon" name="Cabernet Sauvignon" price="32.99" />
                <ProductCard src="/src/assets/re.jpg" alt="Chardonnay" name="Chardonnay" price="28.99" />
            </div>
            {children}
        </section>
    );
};

Products.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default Products;
