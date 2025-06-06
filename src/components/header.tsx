import React, { useState } from 'react';
import Link from 'next/link';

export const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="w-full  bg-white/80 backdrop-blur-xl border-b border-slate-200/50 sticky top-0 z-50">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <nav className="flex justify-between items-center h-16 sm:h-20">
                    <Link href="/" className="font-bold text-lg sm:text-xl text-slate-900">
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
                            className="font-bold text-sm sm:text-base text-white cursor-pointer bg-indigo-600 px-6 py-2.5 rounded-full hover:bg-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:scale-105"
                            href="https://app.aprov.tech"
                            target="_blank"
                        >
                            Iniciar sesión
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex items-center p-2 rounded-md hover:bg-slate-100/80 transition-colors"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl border-b border-slate-200/50 z-50">
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
                            className="block w-full text-center font-bold text-base text-white bg-indigo-600 px-6 py-2.5 rounded-full hover:bg-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-600/25"
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