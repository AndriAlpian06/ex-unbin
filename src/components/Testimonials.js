import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Slides from './Slide'
import ReactPlayer from 'react-player'
import Line from './Line'



export default function Testimonials() {

  return (
    <div className="bg-white mt-8">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-16 px-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl py-4">Mengapa Binaniaga</h2>            
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>DOSEN PROFESIONAL DAN BERSERTIFIKAT (PRAKTISI)</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Dosen - dosen profesional dan bersertifikat diharapkan mampu memberikan kualitas pendidikan yang terbaik untuk mahasiswa.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>TERAKREDITASI BAIK</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    26 tahun mengelola Perguruan Tinggi terakreditasi Baik oleh BAN-PT
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>BEASISWA 100%</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Tersedia beasiswa 100% bagi mahasiswa berprestasi.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>BIAYA TERJANGKAU</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Biaya kompetitif (angsuran) kelas karyawan dan ekstensi sore.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
          </div>
          <div className="player-wrapper">
            <ReactPlayer url='https://www.youtube.com/watch?v=_s1qd8GehP8&t=73s' 
              className="react-player"
              playing
              width="100%"
              controls={false} 
            />
          </div>
        </div>
        <h1 className='text-center font-bold text-4xl mt-8'>Testimonials</h1>
        <Slides />
        {/* <Line /> */}
      </div>
    </div>
      


  )
}
