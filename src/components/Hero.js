import React from 'react'
import Typed from 'react-typed'

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
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="container">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">UNIVERSITAS BINANIAGA INDONESIA</h2>
            <p className="text-white text-2xl leading-relaxed font-light mt-4 mb-6"><Typed
              strings={[
                  "be smart, be a profesional, and be a master"
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
            </p>
            <p className="mt-4 text-white">
            Universitas Binaniaga Indonesia adalah kampus yang berlokasi di Kota Bogor yang memiliki 2 fakultas yakni Fakultas Ekonomi & Bisnis dan Fakultas Informatika & Komputer.  
                Ayo bergabung dengan kami agar menjadi manusia Unggul dan Berkualitas! 
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-white">{feature.name}</dt>
                  {/* <dd className="mt-2 text-sm text-white">{feature.description}</dd> */}
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://i.ibb.co/NKMkjz3/1.jpg"
              alt="BEASISWA ISRP"
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://i.ibb.co/k8nmYwN/2.jpg"
              alt="BEASISWA LULUSAN SMA/SMK"
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://i.ibb.co/P6RnyxF/3.jpg"
              alt="MENERIMA KELAS REGULER & KARYAWAN"
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://i.ibb.co/TYkvy1D/4.jpg"
              alt="PROGRAM STUDI"
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    </div>
    
  )
}
