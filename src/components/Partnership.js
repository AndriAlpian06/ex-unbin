import React, { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";

const clients = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      imageSrc: 'https://www.unbin.ac.id/asset/media/clients/baru_biznet.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      imageSrc: 'https://www.unbin.ac.id/asset/media/clients/baru_icc.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      imageSrc: 'https://www.unbin.ac.id/asset/media/clients/baru_cis2.png',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      imageSrc: 'https://www.unbin.ac.id/asset/media/clients/baru_oracle.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
     id: 5,
     name: 'Machined Mechanical Pencil',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/baru_bonet.jpg',
     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
     id: 6,
     name: 'Earthen Bottle',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/baru_bnsp.gif',
     imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
     id: 7,
     name: 'Nomad Tumbler',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/baru_auto.png',
     imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
     id: 8,
     name: 'Focus Paper Refill',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/baru_kresna.jpeg',
     imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
     id: 9,
     name: 'Machined Mechanical Pencil',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/baru_lia.jpg',
     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
     id: 10,
     name: 'Machined Mechanical Pencil',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/baru_jobs.png',
     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
     id: 11,
     name: 'Machined Mechanical Pencil',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/baru_bbia.png',
     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
     id: 12,
     name: 'Machined Mechanical Pencil',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/baru_lsp.png',
     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
     id: 13,
     name: 'Machined Mechanical Pencil',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/baru_mw.png',
     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
     id: 14,
     name: 'Machined Mechanical Pencil',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/baru_sunda.png',
     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
     id: 15,
     name: 'Machined Mechanical Pencil',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/baru_valdo.jpg',
     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
     id: 16,
     name: 'Machined Mechanical Pencil',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/baru_global.jpeg',
     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
     id: 17,
     name: 'Machined Mechanical Pencil',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/kota.png',
     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
     id: 18,
     name: 'Machined Mechanical Pencil',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/kadin.png',
     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
     id: 19,
     name: 'Machined Mechanical Pencil',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/bi.png',
     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
     id: 20,
     name: 'Machined Mechanical Pencil',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/bsi.png',
     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
     id: 21,
     name: 'Machined Mechanical Pencil',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/ayaskara.png',
     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
     id: 22,
     name: 'Machined Mechanical Pencil',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/bnn.png',
     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
     id: 23,
     name: 'Machined Mechanical Pencil',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/johnson.png',
     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
     id: 24,
     name: 'Machined Mechanical Pencil',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/pakuanjaya.png',
     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
     id: 25,
     name: 'Machined Mechanical Pencil',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/satukelas.png',
     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
     id: 26,
     name: 'Machined Mechanical Pencil',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/zahir.png',
     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
     id: 27,
     name: 'Machined Mechanical Pencil',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/astra.png',
     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
     id: 28,
     name: 'Machined Mechanical Pencil',
     href: '#',
     imageSrc: 'https://www.unbin.ac.id/asset/media/clients/bantex.png',
     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
]

export default function Partnership() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="bg-[#2d3e50]" data-aos="fade-up">
        <h2 className="text-center py-16 text-4xl text-white">Bekerjasama <span className='font-semibold'>dengan</span></h2>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    
            <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
                {clients.map((client) => (
                    <div key={client.id}>
                    <img
                        src={client.imageSrc}
                        alt={client.imageAlt}
                    />
                    </div>
                ))}
            </div>
        </div>
        <div className='py-16'>
            <p className='text-center text-white'>UNIVERSITAS BINANIAGA INDONESIA MENJALIN KERJASAMA BAIK DENGAN PERUSAHAAN-PERUSAHAAN LAIN UNTUK</p>
            <p className='text-center text-white'>MENUNJANG KUALITAS PENDIDIKAN BAGI MAHASISWA.</p>
        </div>
    </div>
  )
}
