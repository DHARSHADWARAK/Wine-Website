import React from 'react'

const Footer = () => {
    const paymentMethods = [
        { name: 'Visa', url: '/src/assets/visa.png', alt: 'Visa' },
        { name: 'MasterCard', url: '/src/assets/mastercard.png', alt: 'MasterCard' },
        { name: 'Discover', url: '/src/assets/Discover.png', alt: 'Discover' },
        { name: 'PayPal', url: '/src/assets/paypal.png', alt: 'PayPal' },
        { name: 'Stripe', url: '/src/assets/stripe.png', alt: 'Stripe' },
      ];
  return (
    <>
    <section className='bg-neutral-900 text-white'>
        <div className='flex flex-col md:flex-row justify-center gap-4 px-4 md:px-0 md:gap-14 md:items-center py-5 md:py-10'>
            <div className='flex flex-col justify-center md:items-center'>
                <div className='font-tinos text-4xl font-semibold'>WIZE</div>
                <div style={{ letterSpacing: '0.5em' }} className='md:ml-3 text-sm'>FASHION</div>
            </div>
            
            <div className='flex flex-col md:gap-2'>
                <div className="flex  space-x-4 gap-4">
                    <a href="https://facebook.com" aria-label="Facebook">
                        <i className="fab fa-facebook-f text-blue-600"></i>
                    </a>
                    <a href="https://twitter.com" aria-label="Twitter">
                        <i className="fab fa-twitter text-blue-400"></i>
                    </a>
                    <a href="https://google.com" aria-label="Google">
                        <i className="fab fa-google text-red-600"></i>
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram">
                        <i className="fab fa-instagram text-pink-600"></i>
                    </a>
                    <a href="https://youtube.com" aria-label="YouTube">
                        <i className="fab fa-youtube text-red-600"></i>
                    </a>
                </div>
                <p className="text-sm">© 2016 WIZE. All rights reserved.</p>
            </div>
            
            <div className='flex flex-col md:gap-2'>
                <div className='font-semibold'>OUR LOCATION:</div>
                <div>6233 Karsan Park Apt.623</div>
            </div>

            <div className='flex flex-col md:gap-2'>
                <div className='font-semibold'>24/7 HOTLINE:</div>
                <div>826-696-8370</div>
            </div>

            <div className="flex gap-1 md:justify-center py-4">
                {paymentMethods.map((method) => (
                    <img
                    key={method.name}
                    src={method.url}
                    alt={method.alt}
                    className="w-10 h-8"
                    />
                ))}
            </div>            
        </div>
    </section>
    </>

)
}

export default Footer