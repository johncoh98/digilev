import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">DigiLev</h3>
            <p className="text-gray-400">We create quality websites and exceptional digital experiences.</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {/* Icône de réseau social */}
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {/* Icône de réseau social */}
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {/* Icône de réseau social */}
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-gray-400 mt-4 md:mt-0">© {new Date().getFullYear()} DigiLev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
