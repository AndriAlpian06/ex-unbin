import React from 'react'
import { Element } from 'react-scroll'

export default function AroundCampus() {
  
  const arounds = [
    {
      id: 1,
      name: 'KPU MENGGELAR SOSIALISASI PENDIDIKAN PEMILIH PEMULA',
      href: '#',
      imageSrc: 'https://www.unbin.ac.id/asset/media/750x480/news_kpu.jpg',
      imageAlt: 'KPU MENGGELAR SOSIALISASI PENDIDIKAN PEMILIH PEMULA',
    },
    {
      id: 2,
      name: 'LAB BAHASA UNBIN SUDAH TERSERTIFIKASI ISO:9001',
      href: '#',
      imageSrc: 'https://www.unbin.ac.id/asset/media/750x480/isobahasa.PNG',
      imageAlt: 'LAB BAHASA UNBIN SUDAH TERSERTIFIKASI ISO:9001',
    },
    {
      id: 3,
      name: 'PESTA WIRAUSAHA TDAP NASIONAL DISELENGGARAKAN DI UNBIN',
      href: '#',
      imageSrc: 'https://www.unbin.ac.id/asset/media/750x480/tdap.PNG',
      imageAlt: 'PESTA WIRAUSAHA TDAP NASIONAL DISELENGGARAKAN DI UNBIN',
    },
    {
      id: 4,
      name: 'UNBIN BEKERJASAMA DENGAN KOMISI PEMILIHAN UMUM KOTA BOGOR MENGADAKAN TES TERTULIS MENGGUNAKAN SISTEM COMPUTER ASSISTED TEST (CAT)',
      href: '#',
      imageSrc: 'https://www.unbin.ac.id/asset/media/isotope/138.JPG',
      imageAlt: 'UNBIN BEKERJASAMA DENGAN KOMISI PEMILIHAN UMUM KOTA BOGOR MENGADAKAN TES TERTULIS MENGGUNAKAN SISTEM COMPUTER ASSISTED TEST (CAT)',
    },
    {
     id: 5,
     name: 'KEGIATAN AKREDITASI PROGRAM STUDI SISTEM INFORMASI',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/isotope/136.JPG',
     imageAlt: 'KEGIATAN AKREDITASI PROGRAM STUDI SISTEM INFORMASI',
    },
    {
     id: 6,
     name: 'PENANDATANGANAN KESEPAKATAN BERSAMA',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/posts/370x220/output/pen_kes_ber.jpg',
     imageAlt: 'PENANDATANGANAN KESEPAKATAN BERSAMA',
    },
    {
     id: 7,
     name: 'PENANDATANGANAN KERJASAMA',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/posts/370x220/output/ttd.jpg',
     imageAlt: 'PENANDATANGANAN KERJASAMA',
    },
    {
     id: 8,
     name: 'PELATIHAN MANAJEMEN KEUANGAN',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/posts/370x220/output/pelat2.jpg',
     imageAlt: 'PELATIHAN MANAJEMEN KEUANGAN',
    },
    {
     id: 9,
     name: 'JUARA 1 LOMBA GPL 2022',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/posts/370x220/output/selsuk_2.jpeg',
     imageAlt: 'JUARA 1 LOMBA GPL 2022',
    },
    {
     id: 10,
     name: 'JUARA 1 LOMBA PIDATO',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/posts/370x220/output/juara1.jpeg',
     imageAlt: 'JUARA 1 LOMBA PIDATO',
    },
    {
     id: 11,
     name: 'SELAMAT ATAS PELUNCURAN BUKU AJAR',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/posts/370x220/output/selsuk.jpg',
     imageAlt: 'SELAMAT ATAS PELUNCURAN BUKU AJAR',
    },
    {
     id: 12,
     name: 'PENGGABUNGAN 3 KAMPUS NAUNGAN YAYASAN BINANIAGA TERWUJUD',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/posts/370x220/output/3.png',
     imageAlt: 'PENGGABUNGAN 3 KAMPUS NAUNGAN YAYASAN BINANIAGA TERWUJUD',
    },
    {
     id: 13,
     name: 'SEPEKAN TERAKHIR, KASUS CORONA DI KOTA BOGOR STAGNAN',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/posts/370x220/output/2.jpg',
     imageAlt: 'SEPEKAN TERAKHIR, KASUS CORONA DI KOTA BOGOR STAGNAN',
    },
    {
     id: 14,
     name: 'HALAL BIHALAL KELUARGA BESAR YAYASAN BINANIAGA',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/posts/370x220/output/1.jpg',
     imageAlt: 'HALAL BIHALAL KELUARGA BESAR YAYASAN BINANIAGA',
    },
    // More products...
  ]
  
  return (
    <div className='grid grid-cols-1 mt-8'>
        <Element name="test7" className="element px-4" id="containerElement" style={{
            height: '500px',
            overflow: 'scroll',
            marginBottom: '100px'
    
          }}>

            <Element name="firstInsideContainer" style={{
              marginBottom: '200px'
            }}>
              {arounds.map((arounds) => (
                <div key={arounds.id} className='sm:max-w-xl'>
                  <div className='bg-white border-gray-100 max-h-80	 border p-8 flex space-x-8'>
                    <div className='h-26'>
                      <img className='rounded-3xl shadow-lg w-24' src={arounds.imageSrc} alt='' />
                    </div>
                    <div className='flex flex-col w-1/2 space-y-'>
                      <div className='flex justify-between items-start'>
                        <a href={arounds.href}>
                          <h2 className="text-1xl font-bold">{arounds.name}</h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
              ))}
            </Element>
          </Element>
    </div>
  )
}