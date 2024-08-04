import React from 'react'

const Footerbar = () => {
  return (
    <>
    <section className='bg-neutral-900'>
        <div className=' flex flex-col justify-center items-center gap-3 pt-5'>
        <div className="w-80 md:w-2/3 " style={{ height: '1px', backgroundColor: '#4b5563' }}/>
            <div className='flex flex-wrap  justify-center items-center gap-5 text-white'>
                <div className='cursor-pointer hover:text-yellow-700'>HOME</div>
                <div className='cursor-pointer hover:text-yellow-700'>ONLINE STORE</div>
                <div className='cursor-pointer hover:text-yellow-700'>NEWS LETTER</div>
                <div className='cursor-pointer hover:text-yellow-700'>PROMOTION</div>
                <div className='cursor-pointer hover:text-yellow-700'>PRIVACY POLICY</div>
                <div className='cursor-pointer hover:text-yellow-700'>TERMS OF USE</div>
                <div className='cursor-pointer hover:text-yellow-700'>SITEMAP</div>
            </div>
        <div className="w-80 md:w-2/3  " style={{ height: '1px', backgroundColor: '#4b5563' }}/>
        </div>
    </section>
    </>
  )
}

export default Footerbar