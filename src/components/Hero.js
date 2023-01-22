import React from 'react'
import Typed from 'react-typed'
import backgroundVideo from '../video/backgroundVideo.mp4'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Hero() {

  const features = [
    { name: 'Daftar Sekarang', description: 'Designed by Good Goods, Inc.' },
    { name: 'Download Brosur', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Beasiswa ISRP', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Beasiswa Lulusan SMA/SMK', description: 'Hand sanded and finished with natural oil' },
    { name: 'Menerima Kelas Reguler & Karyawan', description: 'Wood card tray and 3 refill packs' },
    { name: 'Program Studi', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]

  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover' src={backgroundVideo} autoPlay loop muted/>
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1 className='uppercase text-5xl font-bold'>UNIVERSITAS BINANIAGA INDONESIA</h1>
            <p className="text-white text-2xl font-semibold leading-relaxed mt-4 mb-6"><Typed
              strings={[
                  "be smart, be a profesional, and be a master"
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
            </p>
            <p className='py-4 mx-auto max-w-[700px] text-white'>Universitas Binaniaga Indonesia adalah kampus yang berlokasi di Kota Bogor yang memiliki 2 fakultas yakni Fakultas Ekonomi & Bisnis dan Fakultas Informatika & Komputer.</p>
            <div className='w-[80%] mx-auto mt-4'>
              <form>   
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari Informasi Kampus" required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
              </form>
            </div>
        </div>
    </div>
    
  )
}
