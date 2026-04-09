'use client';

import Image from "next/image";
import linkedinIcon from "./assets/img/linkedin.png";
import githubIcon from "./assets/img/github.png";

export const Footer = () => {
  return (
    <footer className="footer w-full bg-black py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
          {/* Brand */}
          <div className="text-center sm:text-left order-1 sm:order-none">
            <span className="footer-brand text-lg sm:text-xl font-semibold">Mon Portfolio</span>
          </div>
          
          {/* Social Icons and Copyright */}
          <div className="flex flex-col items-center gap-3 order-2 sm:order-none">
            <div className="social-icon flex gap-3 justify-center">
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <Image src={linkedinIcon} alt="LinkedIn" width={32} height={32} />
              </a>
              <a 
                href="https://www.github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <Image src={githubIcon} alt="GitHub" width={32} height={32} />
              </a>
            </div>
            <p className="text-xs sm:text-sm text-center text-gray-400">
              Copyright 2026. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}