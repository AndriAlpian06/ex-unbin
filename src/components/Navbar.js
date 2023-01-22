import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Logo from '../images/unbin_big.png'
import DropdownLink from './DropdownLink'
import MobileNavbar from './MobileNavbar'
import NavLink from './NavLink'

import '../css/search.css'
import Line from './Line'

const Navbar = () => {

    const [color, setColor] = useState(false)
      const changeColor = () => {
        if (window.scrollY >= 90){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'fixed w-full lg:top-10 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 z-10' : 'w-full lg:top-10 absolute z-10'}>
        <MobileNavbar />
        <div className="hidden lg:block py-4">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <a href="/" className="text-white font-medium mr-6"><img src={Logo} className='w-[170px] h-[55px]' alt='Logo'></img></a>
                    </div>
                    <div className="flex items-center gap-x-2">    
                        <NavLink>BERANDA</NavLink>
                        <Menu className='relative' as={'div'}>
                            <Menu.Button className='flex items-center gap-x-2 text-white'>
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
                                <Menu.Items as={'div'} className='shadow-sm border bg-white absolute right-0 mt-8 top-0 py-1 rounded-lg w-56 overflow-hidden'>
                                    <DropdownLink href='/'>
                                        INFORMASI UMUM
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        Sambutan Rektoer
                                    </DropdownLink>
                                    <DropdownLink href='/'>
                                        Profil
                                    </DropdownLink>
                                    <DropdownLink href='/'>
                                        Profil
                                    </DropdownLink>
                                    <DropdownLink href='/'>
                                        Sejarah
                                    </DropdownLink>
                                    <DropdownLink href='/'>
                                        Identitas
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        STRUKTURAL
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        Pimpinan Universitas
                                    </DropdownLink>
                                    <DropdownLink href='/'>
                                        Senat Akademik
                                    </DropdownLink>
                                    <DropdownLink href='/'>
                                        Dekan Fakultas
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        INFORMASI PENGUNJUNG
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        Peta Kampus
                                    </DropdownLink>
                                    <DropdownLink href='/'>
                                        Fasilitas
                                    </DropdownLink>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <Menu className='relative' as={'div'}>
                            <Menu.Button className='flex items-center gap-x-2 text-white'>
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
                                <Menu.Items as={'div'} className='shadow-sm border bg-white absolute right-0 mt-8 top-0 py-1 rounded-lg w-56 overflow-hidden'>
                                    <DropdownLink href='/'>
                                        FAKULTAS EKONOMI DAN BISNIS
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        D3 Akuntansi
                                    </DropdownLink>
                                    <DropdownLink href='/'>
                                        S1 Akuntansi
                                    </DropdownLink>
                                    <DropdownLink href='/'>
                                        S1 Manajemen
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        FAKULTAS INFORMATIKA DAN KOMPUTER
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        D3 Manajemen Informatika
                                    </DropdownLink>
                                    <DropdownLink href='/'>
                                        S1 Sistem Informasi
                                    </DropdownLink>
                                    <DropdownLink href='/'>
                                        S1 Teknik Informatika
                                    </DropdownLink>
                                    <DropdownLink href='/'>
                                        S1 Teknologi Informasi
                                    </DropdownLink>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <Menu className='relative' as={'div'}>
                            <Menu.Button className='flex items-center gap-x-2 text-white'>
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
                                <Menu.Items as={'div'} className='shadow-sm border bg-white absolute right-0 mt-8 top-0 py-1 rounded-lg w-56 overflow-hidden'>
                                    <DropdownLink href='/'>
                                        Teknois
                                    </DropdownLink>
                                    <DropdownLink href='/'>
                                        The Accounting Journal of Binaniaga
                                    </DropdownLink>
                                    <DropdownLink href='/'>
                                        The Management Journal of Binaniaga
                                    </DropdownLink>
                                    <DropdownLink href='/'>
                                        Jurnal Ilmiah Binaniaga
                                    </DropdownLink>
                                    <DropdownLink href='/'>
                                        Jurnal Pendidikan Binaniaga
                                    </DropdownLink>
                                    <DropdownLink href='/'>
                                        Haki
                                    </DropdownLink>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <Menu className='relative' as={'div'}>
                            <Menu.Button className='flex items-center gap-x-2 text-white'>
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
                                <Menu.Items as={'div'} className='shadow-sm border bg-white absolute right-0 mt-8 top-0 py-1 rounded-lg w-56 overflow-hidden'>
                                    <DropdownLink href='/'>
                                        Informasi
                                    </DropdownLink>
                                    <DropdownLink href='/'>
                                        Daftar Online
                                    </DropdownLink>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <NavLink>KONTAK</NavLink>
                        {/* <div className="search">
                        <input placeholder="Type to search..." required className="input" name="text" type="text" />
                            <div className="icon ml-1">
                                <svg viewBox="0 0 512 512" className="ionicon text-white" xmlns="http://www.w3.org/2000/svg">
                                <title>Search</title>
                                <path strokeWidth={32} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" />
                                <path d="M338.29 338.29L448 448" strokeWidth={32} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" />
                                </svg>
                            </div>
                        </div> */}
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar