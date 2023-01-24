import React from 'react'
import Flag from '../images/flag.png'
import Logo from '../images/unbin_big.png'

export default function Footer() {
  return (
    // <div className='w-full bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-y px-4'>
    //     <div className='px-4 py-8 ml-16'>
    //         <img src={Logo} className='w-[170px] h-[55px]' alt='Logo' />
    //     </div>
    //     <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 border-b-2 border-gray-600 py-8'>
    //         <div>
    //             <h6 className='font-bold uppercase pt-2 text-white'>TENTANG KAMI</h6>
    //             <ul className='ml-4 mt-4 list-disc'>
    //                 <li className='py-1 text-white'>
    //                     Be Smart, Be a Professional and Be a Master.
    //                 </li>
    //                 <li className='py-1 text-white'>
    //                     <span className='space-x-2'>
    //                         {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //                             <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    //                             <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    //                         </svg> */}
    //                         Jalan Mayor Oking Jayaatmaja Depan Stasiun KA No.27, Kota Bogor 16124, Indonesia (0251)-8343980
    //                     </span>
    //                 </li>
    //                 <li className='py-1 text-white'>Jalan Raya Pajajaran No. 100, Kota Bogor 16153, Indonesia (0251)-8360688</li>
    //                 <li className='py-1 text-white'>Jalan KH. Sholeh Iskandar No. 3, Kota Bogor 16164, Indonesia (0251)-8378773</li>
    //             </ul>
    //         </div>
    //         <div>
    //             <h6 className='font-bold uppercase pt-2 text-white'>Layanan</h6>
    //             <ul className='ml-4 mt-4 list-disc'>
    //                 <li className='py-1 text-white'>Sambutan Rektor</li>
    //                 <li className='py-1 text-white'>Agenda Kegiatan</li>
    //                 <li className='py-1 text-white'>Kalender Akademik</li>
    //                 <li className='py-1 text-white'>Foto</li>
    //                 <li className='py-1 text-white'>Berita</li>
    //                 <li className='py-1 text-white'>Jurnal</li>
    //             </ul>
    //         </div>
    //         <div>
    //             <h6 className='font-bold uppercase pt-2 text-white'>Layanan</h6>
    //             <ul className='ml-4 mt-4 list-disc'>
    //                 <li className='py-1 text-white'>Career Center</li>
    //                 <li className='py-1 text-white'>Beasiswa</li>
    //                 <li className='py-1 text-white'>Perpustakaan</li>
    //                 <li className='py-1 text-white'>Video</li>
    //                 <li className='py-1 text-white'>E-learning</li>
    //                 <li className='py-1 text-white'>Alumni</li>
    //             </ul>
    //         </div>
    //         <div>
    //             <h6 className='font-bold uppercase pt-2 text-white'>Lokasi Kampus</h6>
    //             <ul className='ml-4 mt-4 list-disc'>
    //                 <li className='py-1 text-white'>Kampus Pajajaran</li>
    //                 <li className='py-1 text-white'>Kampus Mayor Oking</li>
    //                 <li className='py-1 text-white'>Kampus Sholeh Iskandar</li>
    //             </ul>
    //         </div>
    //     </div>

    //     <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
    //     <p className='py-4 text-white'>© 2022 UNBIN | Puskomsi</p>
    //     <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
    //         <img 
    //             src={Flag}
    //             alt=''
    //             className='mx-auto'
    //         />
    //     </div>
    //     </div>
    // </div>
    <footer class="px-4 divide-y bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div class="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
            <div class="lg:w-1/3 mt-8">
                <a rel="noopener noreferrer" href="#" class="flex justify-center space-x-3 lg:justify-start">
                    <div class="flex items-center justify-center rounded-full dark:bg-violet-400">
                        <img src={Logo} className='w-[170px] h-[55px]' alt='Logo' />
                    </div>
                    <span class="self-center text-2xl font-semibold text-white">Universitas Binaniaga Indonesia</span>
                </a>
            </div>
            <div class="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                {/* <div class="space-y-3 text-white">
                    <h3 class="tracking-wide uppercase dark:text-gray-50">tentang kami</h3>
                    <ul class="space-y-1 list-disc">
                        <li>
                            <a rel="noopener noreferrer" href="#">Jalan Mayor Oking Jayaatmaja Depan Stasiun KA No.27, Kota Bogor 16124, Indonesia (0251)-8343980</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Jalan Raya Pajajaran No. 100, Kota Bogor 16153, Indonesia (0251)-8360688</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Jalan KH. Sholeh Iskandar No. 3, Kota Bogor 16164, Indonesia (0251)-8378773</a>
                        </li>
                    </ul>
                </div> */}
                <div class="space-y-3 text-white">
                    <h3 class="tracking-wide uppercase dark:text-gray-50">Layanan</h3>
                    <ul class="space-y-1">
                        <li>
                            <a rel="noopener noreferrer" href="#">Sambutan Rektor</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Agenda Kegiatan</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Kalender Akademik</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Foto</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Berita</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Jurnal</a>
                        </li>
                    </ul>
                </div>
                <div class="space-y-3 text-white">
                    <h3 class="uppercase dark:text-gray-50">Layanan</h3>
                    <ul class="space-y-1">
                    <li>
                            <a rel="noopener noreferrer" href="#">Career Center</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Beasiswa</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Perpustakaan</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Video</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">E-learning</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Alumni</a>
                        </li>
                    </ul>
                </div>
                <div class="space-y-3 text-white">
                    <h3 class="uppercase dark:text-gray-50">Lokasi Kampus</h3>
                    <ul class="space-y-1">
                    <li>
                            <a rel="noopener noreferrer" href="#">Kampus Pajajaran</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Kampus Mayor Oking</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Kampus Sholeh Iskandar</a>
                        </li>
                    </ul>
                </div>
                <div class="space-y-3 text-white">
                    <div class="uppercase dark:text-gray-50">Social media</div>
                    <div class="flex justify-start space-x-3">
                        <a rel="noopener noreferrer" href="#" title="Facebook" class="flex items-center p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5 fill-current">
                                <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Twitter" class="flex items-center p-1">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current">
                                <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Instagram" class="flex items-center p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="w-5 h-5 fill-current">
                                <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-between py-4'>
            <div class="py-6 text-sm text-left text-white">© 2023 UNBIN | PUSKOMSI</div>
            <div>
                <img 
                    src={Flag}
                    alt=''
                    className='mx-auto'
                />
            </div>
        </div>
    </footer>

  )
}
