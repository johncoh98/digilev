"use client";
import { useState, useEffect, useRef } from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FiMail, FiPhone, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const contactSectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (contactSectionRef.current) {
      observer.observe(contactSectionRef.current);
    }

    return () => {
      if (contactSectionRef.current) {
        observer.unobserve(contactSectionRef.current);
      }
    };
  }, []);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

  return (
    <div
      id="contact"
      className="flex justify-center items-center min-h-screen"
      ref={contactSectionRef}
    >
      <div
        className={`transform duration-1000 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        style={{ minWidth: '90%', maxWidth: '90%' }}
      >
        <div className="flex flex-col md:flex-row mb-8">
          <div className="w-full md:w-1/2 p-8 bg-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-gray-200">Contact us</h2>
            <form className="space-y-4" action="https://formspree.io/f/xwkdepad" method='POST'>
              <div>
                <label className="text-gray-200" htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-300 rounded p-2" />
              </div>
              <div>
                <label className="text-gray-200" htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="w-full border border-gray-300 rounded p-2" />
              </div>
              <div>
                <label className="text-gray-200" htmlFor="message">Message</label>
                <textarea name="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border border-gray-300 rounded p-2" />
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Send
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2 bg-gray-800 text-gray-200">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Contact information</h2>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <FiMail className="mr-2" />
                  <a href="mailto:john.coh98@gmail.com">john.coh98@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <FiPhone className="mr-2" />
                  <a href="tel:+972543692295">+972 54 369 2295</a>
                </div>
                <div className='flex items-center'>
                  <AiOutlineWhatsApp className='mr-2' />
                    <a href="https://api.whatsapp.com/send?phone=+972543692295">Whatsapp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

