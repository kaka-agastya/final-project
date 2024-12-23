import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flexCenter mb-24 mt-10">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="Barunastra ITS. (1) (1).svg" alt="logo" width={100} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1 text-white">
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn key={columns.title || index} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-white">
                  {columns.links.map((link, linkIndex) => (
                    <li key={`${columns.title}-${linkIndex}`}>
                      <Link href="/">{link}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                  href="/"
                  key={link.label}
                  className="flex gap-4 md:flex-col lg:flex-row">
                    <p className="whitespace-nowrap">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-white"> 
                      {link.value}
                    </p>
                  </Link>
                  ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-white">
                  {SOCIALS.links.map((link) => (
                    <Link href={link.href} key={link.src} target="_blank" rel="noreferrer">
                      <Image src={link.src} alt="logo" width={24} height={24} className="invert"/>
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20"/>
        <p className="regular-14 w-full text-center text-gray-20">2024
          Barunastra ITS | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
