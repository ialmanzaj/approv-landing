import React, { useState } from 'react';
import Link from 'next/link';

export const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="w-full relative">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <nav className="flex justify-between items-center h-16 sm:h-20">
                    <Link href="/" className="font-semibold text-lg sm:text-xl text-[#141414]">
                        APROV
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {/* <Link
                            href="/precio"
                            className="font-normal text-sm sm:text-base text-[#141414] cursor-pointer hover:opacity-80 transition-opacity"
                        >
                            Precios
                        </Link>
 */}
                        <Link
                            className="font-semibold text-sm sm:text-base text-white cursor-pointer bg-[#141414] px-6 py-2.5 rounded-full hover:bg-[#2a2a2a] transition-colors"
                            href="https://app.aprov.tech"
                            target="_blank"
                        >
                            Iniciar sesión
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 shadow-lg border-t border-gray-100 z-50">
                    <div className="px-4 py-3 space-y-3">
                       {/*  <Link
                            href="/precio"
                            className="block font-normal text-base text-[#141414] py-2 hover:opacity-80 transition-opacity"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Precios
                        </Link> */}

                        <Link
                            href="https://app.aprov.tech"
                            target="_blank"
                            className="block w-full text-center font-semibold text-base text-white bg-[#141414] px-6 py-2.5 rounded-full hover:bg-[#2a2a2a] transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Iniciar sesión
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};