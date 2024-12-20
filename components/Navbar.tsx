import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className="flexBetween max-container 
    padding-container relative z-30 py-5">
        <Link href="/">
        <Image src="/Barunastra ITS. (1) (1).svg" alt="logo" width={200}
        height={29} className="pr-10"/>
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} passHref
          className="regular-16 text-gray-100 flexCenter cursor-pointer 
          pb-1.5 transition-all hover:font-bold">
            {link.label}
            </Link>
        ))}

        </ul>

        <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        />
    </nav>
  )
}

export default Navbar
