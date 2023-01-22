import React from 'react'
import Line from './Line'
import Galery from './Galery'
import Around from './AroundCampus'
// import { EmbedToggler } from 'react-social-media-embed'
import { FacebookEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';

export default function Notice() {

  const posts = [
    {
        title: 'PENGUMUMAN LIBUR AKHIR TAHUN FINKOM',
        created_at : '27 DESEMBER 2022',
        author : 'FAKULTAS INFORMATIKA DAN KOMPUTER',
        picture: 'https://www.unbin.ac.id/asset/media/750x480/fin_lib.jpeg'
    },      
    {
        title: 'PROGRAM STUDI SISTEM INFORMASI TERAKREDITASI "BAIK SEKALI"',
        created_at : '21 DESEMBER 2022',
        author : 'PUSKOMSI',
        picture: 'https://www.unbin.ac.id/asset/media/750x480/akre_si_baik_sekali.jpg'
    },
    {
        title: 'LAB BAHASA UNBIN SUDAH TERSERTIFIKASI ISO:9001',
        created_at : '17 DESEMBER 2022',
        author : 'PUSKOMSI',
        picture: 'https://www.unbin.ac.id/asset/media/750x480/isobahasa.PNG'
    },
    {
        title: 'SERTIFIKAT AKREDITASI JURNAL ILMIAH',
        created_at : '27 SEPTEMBER 2022',
        author : 'FAKULTAS INFORMATIKA DAN KOMPUTER',
        picture: 'https://www.unbin.ac.id/asset/media/750x480/sert_teknois.jpg'
    }
  ]

  return (
    <div className='container bg-white mt-16'>
      <h1 className='text-center font-bold text-4xl'>Pengumuman</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-2 gap-x-16 sm:gap-8 mt-8 items-center'>
        {posts.map((post, index) => (
            <div key={index} className="bg-white shadow-xl rounded-xl overflow-hidden"> 
                <div className="leading-relaxed text-xl text-gray-800">
                  <img className="aspect-square w-full object-cover object-center" src={post.picture} alt="" />
                </div>
                <div className="px-3 py-4 bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-white">
                    {post.title}
                    </div>
                  </div>
                  
                </div>
                <div className="px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-white text-opacity-50 hover:text-opacity-75 text-xs">
                    {post.author}
                    </div>
                  </div>
                  <div className="text-white text-opacity-50 hover:text-opacity-75 text-xs">
                  {post.created_at}
                  </div>
                </div>
            </div>
            
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-16 mt-16'>
          <div>
            <h1 className='font-semibold ml-8'>SEPUTAR KAMPUS</h1>
            <Around />
          </div>
          <div>
            <h1 className='font-semibold ml-8'>INSTAGRAM</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }} className='px-4 py-4 mt-8'>
              <InstagramEmbed url="https://www.instagram.com/p/ClXjl6ZPMFF/?utm_source=ig_embed&ig_rid=79a6c451-6e91-4f96-95fa-30cbe72f0d2e" width="100%" />
            </div>
          </div>
          <div>
            <h1 className='font-semibold ml-8'>FACEBOOK</h1>
              <div style={{ display: 'flex', justifyContent: 'center' }} className='px-4 py-4 mt-8'>
                <FacebookEmbed url="https://www.facebook.com/photo/?fbid=5249371051842159&set=a.1105644156214890" width="100%" />
              </div>
          </div>
            

      </div>
      <div>
        <h1 className='font-semibold ml-8'>GALERI KAMPUS</h1>
        <Galery />
      </div>
    </div>
  )
}


