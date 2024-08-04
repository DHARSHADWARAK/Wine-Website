import React from 'react'

const Wize_blog = () => {
    const blogPosts = [
        {
          imgSrc: "src//assets//blog_1.png",
          title: "The process Behind our Award-Winning Wines",
          date: "January 15, 2017"
        },
        {
          imgSrc: "src//assets//blog_2.png",
          title: "Varietal Labelling of New World Wines",
          date: "January 15, 2017"
        },
        {
          imgSrc: "src//assets//blog_3.png",
          title: "Daily Wine News: In Favor of Reds",
          date: "January 15, 2017"
        },
        {
            imgSrc: "src//assets//blog_4.png",
            title: "Good Borolo Comes To Those Who Wait",
            date: "January 15, 2017"
          },
      ];
      
  return (
    <>
    <section className='bg-neutral-900 py-10 px-1'>
        <div className='flex flex-col justify-center items-center gap-5'>
            <div className='text-4xl text-white font-tinos'>Wize Blog</div>
            <div className="w-14 " style={{ height: '2px', backgroundColor: '#a16207' }}/>
            <div className='flex flex-row justify-center items-center '>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                    {blogPosts.map((post, index) => (
                        <div key={index} className='flex flex-col w-44 gap-2 cursor-pointer' >
                        <img src={post.imgSrc} alt={post.title} className='w-44' />
                        <div className='text-white px-1 w-40 text-sm'>{post.title}</div>
                        <div className='text-neutral-500 px-1 text-sm'>{post.date}</div>
                        </div>
                    ))}
                </div>
            </div>
        <div className="w-1/2 mt-10" style={{ height: '1px', backgroundColor: '#4b5563' }}/>
        </div>
    </section>
    </>
  )
}

export default Wize_blog