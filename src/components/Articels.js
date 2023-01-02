import React from 'react'

// import '../css/card.css'

export default function Articels() {

    const posts = [
        {
            title: 'BEASISWA ISRP',
            picture: 'https://www.unbin.ac.id/asset/media/750x480/isrp_2022.jpeg'
        },      
        {
            title: 'BEASISWA LULUSAN SMA/SMK',
            picture: 'https://www.unbin.ac.id/asset/media/750x480/bin_may.jpeg'
        },
        {
            title: 'MENERIMA KELAS REGULER & KARYAWAN',
            picture: 'https://www.unbin.ac.id/asset/media/750x480/reg_kar2.jpeg'
        },
        {
            title: 'PROGRAM STUDI',
            picture: 'https://www.unbin.ac.id/asset/media/750x480/tatadado.jpg'
        }
    ]

    const features = [
        { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
        { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
        { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
        { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
    ]

  return (
    <div className='container mt-4'>
        {/* <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-16 sm:gap-16">
            {posts.map((post, index) => (
                <div key={index} className="card">
                    <img className='absolute shadow hover:shadow-lg transition-shadow duration-300 rounded-xl mb-14 aspect-square w-full object-cover object-center' src={post.picture} />
                    <a href='#'>
                        <h1 className='absolute mt-16 sm:mb-4 font-semibold text-black'>{post.title}</h1>
                    </a>
                </div>
            ))}
        </div> */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-16 sm:gap-16'>
            {posts.map((post, index) => (
                <div key={index}>
                    <img className='shadow hover:shadow-lg transition-shadow duration-300 rounded-xl mb-4 aspect-square w-full object-cover object-center' src={post.picture} />
                    <a href='#'>
                        <h1 className='mb-2 sm:mb-4 font-semibold text-black'>{post.title}</h1>
                    </a>
                </div>
            ))}
        </div>
    </div>
    
  )
}
