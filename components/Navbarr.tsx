"use client"
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/Barunastra ITS. (1) (1).svg" alt="logo" width={200} height={29} className="pr-10"/>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} passHref className="regular-16 text-gray-100 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Image src="/menu.svg" alt="menu" width={24} height={24} style={{ filter: 'invert(1)' }}/>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 right-0 mt-16 mr-4 bg-blue-70 shadow-lg rounded-lg p-4">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-2 right-2">
            <Image src="/close.svg" alt="close" width={24} height={24}/>
          </button>
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} passHref className="regular-16 text-white cursor-pointer transition-all hover:font-bold">
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;