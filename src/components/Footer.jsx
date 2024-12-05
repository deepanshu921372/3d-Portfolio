import React from 'react'
import { SectionWrapper } from '../hoc'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-tertiary py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8 items-center">
        {/* Social Links */}
        <div className="flex gap-6">
          <a href="https://github.com/deepanshu921372" target="_blank" rel="noopener noreferrer" 
             className="text-secondary hover:text-white transition-colors">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/deepanshusharma921372/" target="_blank" rel="noopener noreferrer"
             className="text-secondary hover:text-white transition-colors">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="/" rel="noopener noreferrer"
             className="text-secondary hover:text-white transition-colors">
            <FaInstagram className="text-2xl" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-secondary text-[14px]">
          © 2024 Deepanshu Sharma. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default SectionWrapper(Footer, "");