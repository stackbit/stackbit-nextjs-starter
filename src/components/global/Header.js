import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div id="header">
      <div className="container mx-auto flex justify-start">
        <div className="py-4 flex justify-start items-center">
          <Image
            alt="Logo"
            width="48"
            height="48"
            src={'/images/logo/logo4.svg'}
          />
        </div>
        <div className="py-4 flex justify-start items-center">
          <Link href="/">
            <a className="text-primary mr-2">Homepage</a>
          </Link>
          <Link href="/example-landing-page">
            <a className="text-primary mr-2">Example landing page</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
