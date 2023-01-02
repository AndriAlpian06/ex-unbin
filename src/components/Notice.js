import React from 'react'
import Line from './Line'
import Galery from './Galery'
import Around from './AroundCampus'
import { EmbedToggler } from 'react-social-media-embed';
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
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-16 sm:gap-16 mt-8'>
        {posts.map((post, index) => (
            <div key={index}>
                <img className='shadow hover:shadow-lg transition-shadow duration-300 rounded-xl mb-4 aspect-square w-full object-cover object-center' src={post.picture} alt={post.title} />
                <a href='#'>
                    <h1 className='mb-2 sm:mb-4 font-semibold text-black'>{post.title}</h1>
                </a>
                <div className='flex items-center font-mono justify-between text-sm to-gray-500'>
                  <span>{post.author}</span>
                  <span>{post.created_at}</span>
                </div>
            </div>
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-16 mt-16'>
          <div>
            <h1 className='font-semibold ml-8'>GALERI KAMPUS</h1>
            <Galery />
          </div>
          <div>
            <h1 className='font-semibold ml-8'>SEPUTAR KAMPUS</h1>
            <Around />
          </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-16 mt-16'>
          <div>
            <h1 className='font-semibold ml-8'>INSTAGRAM</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }} className='px-4 py-4 mt-8'>
              <InstagramEmbed url="https://www.instagram.com/p/ClXjl6ZPMFF/?utm_source=ig_embed&ig_rid=79a6c451-6e91-4f96-95fa-30cbe72f0d2e" width={550} />
            </div>
          </div>
          <div>
            <h1 className='font-semibold ml-8'>FACEBOOK</h1>
              <div style={{ display: 'flex', justifyContent: 'center' }} className='px-4 py-4 mt-8'>
                <FacebookEmbed url="https://www.facebook.com/photo/?fbid=625749552883864&set=pb.100063464744050.-2207520000." width={550} />
              </div>
          </div>
      </div>
      <Line />
    </div>
  )
}


