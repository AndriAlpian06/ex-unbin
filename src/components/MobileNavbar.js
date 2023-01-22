import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import Line from './Line'
import Logo from '../images/unbin_big.png'
import DropdownLink from './DropdownLink'

export default function MobileNavbar() {
  return (
    <Menu as={'div'} className='flex lg:hidden items-center justify-between py-2 px-4'>
        <div className='flex px-4'>
            <a href="#" className="text-white font-medium mr-6"><img src={Logo} className='w-[170px] h-[55px]'></img></a>
        </div>

        <Menu.Button className='focus:outline-none'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items as={'div'} className='shadow-sm border bg-white absolute right-0 mr-12 top-0 mt-16 py-1 rounded-lg w-56 overflow-hidden'>

            <a href="#" className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block">BERANDA</a>
            <Menu className='relative ml-4' as={'div'}>
                <Menu.Button className='flex text-black items-center gap-x-2'>
                TENTANG UNBIN
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items as={'div'} className='bg-white relative right-4 mt-2 top-0 py-0 rounded-lg w-56 overflow-hidden'>
                        <Line />
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        INFORMASI UMUM
                        </a>
                        <Line />
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        Sambutan Rektoer
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        Profil
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        Profil
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        Sejarah
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        Identitas
                        </a>
                        <Line />
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        STRUKTURAL
                        </a>
                        <Line />
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        Pimpinan Universitas
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        Senat Akademik
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        Dekan Fakultas
                        </a>
                        <Line />
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        INFORMASI PENGUNJUNG
                        </a>
                        <Line />
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        Peta Kampus
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        Fasilitas
                        </a>
                    </Menu.Items>
                </Transition>
            </Menu>
            <Line />
            <Menu className='relative ml-4' as={'div'}>
                <Menu.Button className='flex text-black items-center gap-x-2'>
                FAKULTAS
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items as={'div'} className='bg-white relative right-4 mt-2 top-0 py-0 rounded-lg w-56 overflow-hidden'>
                        <Line />
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        FAKULTAS EKONOMI DAN BISNIS
                        </a>
                        <Line />
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        D3 Akuntansi
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        S1 Akuntansi
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        S1 Manajemen
                        </a>
                        <Line />
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        FAKULTAS INFORMATIKA DAN KOMPUTER
                        </a>
                        <Line />
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        D3 Manajemen Informatika
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        S1 Sistem Informasi
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        S1 Teknik Informatika
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        S1 Teknologi Informasi
                        </a>
                    </Menu.Items>
                </Transition>
            </Menu>
            <Line />
            <Menu className='relative ml-4' as={'div'}>
                <Menu.Button className='flex text-black items-center gap-x-2'>
                PENELITIAN
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items as={'div'} className='bg-white relative right-4 mt-2 top-0 py-0 rounded-lg w-56 overflow-hidden'>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                            Teknois
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                            The Accounting Journal of Binaniaga
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                            The Management Journal of Binaniaga
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                            Jurnal Ilmiah Binaniaga
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                            Jurnal Pendidikan Binaniaga
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                            Haki
                        </a>
                    </Menu.Items>
                </Transition>
            </Menu>
            <Line />
            <Menu className='relative ml-4' as={'div'}>
                <Menu.Button className='flex text-black items-center gap-x-2'>
                PENDAFTARAN
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items as={'div'} className='bg-white relative right-4 mt-2 top-0 py-0 rounded-lg w-56 overflow-hidden'>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                            Informasi
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                            Daftar Online
                        </a>
                    </Menu.Items>
                </Transition>
            </Menu>
            <Line />
            <a href="#" className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block">KONTAK</a>
            {/* <Line /> */}
            {/* <div className="search ml-2">
                <input placeholder="Type to search..." required className="input" name="text" type="text" />
                <div className="icon ml-1">
                    <svg viewBox="0 0 512 512" className="ionicon text-white" xmlns="http://www.w3.org/2000/svg">
                    <title>Search</title>
                    <path strokeWidth={32} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" />
                    <path d="M338.29 338.29L448 448" strokeWidth={32} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" />
                    </svg>
                </div>
            </div> */}
          </Menu.Items>
        </Transition>
    </Menu>
  )
}
