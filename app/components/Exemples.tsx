"use client";
import { useState } from 'react';

const Exemples = () => {
  const [selectedWork, setSelectedWork] = useState(-1);
  const works = [
    {
      id: 0,
      title: 'BlueTube',
      description: 'We have developed an impressive clone of YouTube, the popular online video sharing platform. This demo site offers an immersive user experience similar to YouTube, with a user-friendly interface, powerful video search and smooth playback.',
      url: 'https://bluetube-umber.vercel.app/',
      image: '/blue.jpg',
    },
    {
      id: 1,
      title: 'BuyTech',
      description: 'Our team has developed a compact but complete e-commerce site to promote the products of a fictitious company. This demo site allows visitors to explore a carefully presented selection of products',
      url: 'https://buytech-virid.vercel.app/',
      image: '/ecom.png',
    },
    {
      id: 2,
      title: 'Resto',
      description: 'We designed a captivating landing page for a fictional restaurant. This homepage gives an overview of the cozy atmosphere and the delicious cuisine that the restaurant offers.',
      url: 'https://resto-liart.vercel.app/',
      image: '/resto.jpg',
    },
  ];

  const handleMouseEnter = (workId: number) => {
    setSelectedWork(workId);
  };

  const handleMouseLeave = () => {
    setSelectedWork(-1);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div
              key={work.id}
              className={`relative rounded-lg overflow-hidden ${
                selectedWork === work.id ? 'ring-4 ring-blue-500' : ''
              }`}
              onMouseEnter={() => handleMouseEnter(work.id)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={work.url} target="_blank" rel="noopener noreferrer">
                <img src={work.image} alt={work.title} className="w-full h-64 object-cover" />
              </a>
              <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${selectedWork === work.id ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-white text-center">
                  <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                  <p className="text-sm">{work.description}</p>
                  <a href={work.url} target="_blank" rel="noopener noreferrer" className="text-blue-300 mt-2 inline-block underline">Visit</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exemples;

