import React from 'react'
import Flag from '../images/flag.png'

export default function Footer() {
  return (
    <div className='w-full bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2 text-white'>TENTANG KAMI</h6>
                <ul className='ml-4 mt-4 list-disc'>
                    <li className='py-1 text-white'>
                        <img 
                            src='https://www.unbin.ac.id/asset/img/logo_unbin_white.png'  
                            className='w-[250]'
                            alt=''
                        />
                        Be Smart, Be a Professional and Be a Master.
                    </li>
                    <li className='py-1 text-white'>
                        <span className='space-x-2'>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg> */}
                            Jalan Mayor Oking Jayaatmaja Depan Stasiun KA No.27, Kota Bogor 16124, Indonesia (0251)-8343980
                        </span>
                    </li>
                    <li className='py-1 text-white'>Jalan Raya Pajajaran No. 100, Kota Bogor 16153, Indonesia (0251)-8360688</li>
                    <li className='py-1 text-white'>Jalan KH. Sholeh Iskandar No. 3, Kota Bogor 16164, Indonesia (0251)-8378773</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2 text-white'>Layanan</h6>
                <ul className='ml-4 mt-4 list-disc'>
                    <li className='py-1 text-white'>Sambutan Rektor</li>
                    <li className='py-1 text-white'>Agenda Kegiatan</li>
                    <li className='py-1 text-white'>Kalender Akademik</li>
                    <li className='py-1 text-white'>Foto</li>
                    <li className='py-1 text-white'>Berita</li>
                    <li className='py-1 text-white'>Jurnal</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2 text-white'>Layanan</h6>
                <ul className='ml-4 mt-4 list-disc'>
                    <li className='py-1 text-white'>Career Center</li>
                    <li className='py-1 text-white'>Beasiswa</li>
                    <li className='py-1 text-white'>Perpustakaan</li>
                    <li className='py-1 text-white'>Video</li>
                    <li className='py-1 text-white'>E-learning</li>
                    <li className='py-1 text-white'>Alumni</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2 text-white'>Lokasi Kampus</h6>
                <ul className='ml-4 mt-4 list-disc'>
                    <li className='py-1 text-white'>Kampus Pajajaran</li>
                    <li className='py-1 text-white'>Kampus Mayor Oking</li>
                    <li className='py-1 text-white'>Kampus Sholeh Iskandar</li>
                </ul>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4 text-white'>© 2022 UNBIN | Puskomsi</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <img 
                src={Flag}
                alt=''
                className='mx-auto'
            />
        </div>
        </div>
    </div>
  )
}
