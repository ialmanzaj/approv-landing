import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    Twitter,
    Linkedin,
    Mail
} from 'lucide-react';
import { Navbar } from './header';

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
    const pageTitle = title ? `${title} - APROV` : 'APROV - Automatiza Aprobaciones';
    const pageDescription = description || "Automatiza cada aprobación, reduce semanas a minutos con Aprov.";

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <div className="min-h-screen w-full bg-hero-bg font-sans flex flex-col">
                {/* HEADER */}
                <Navbar />


                {/* MAIN CONTENT AREA */}
                <main className="flex-grow w-full">
                    {children}
                </main>

                {/* FOOTER */}
                <footer className="bg-[#000d49] text-white mt-auto">
                    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center py-6 px-4">
                        <div className="font-bold text-lg tracking-tight">APROV</div>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="text-sm hover:underline transition-colors duration-200 ease-in-out">
                                Política de Privacidad
                            </Link>
                            <Link href="/terms" className="text-sm hover:underline transition-colors duration-200 ease-in-out">
                                Términos de Servicio
                            </Link>
                            <a href="mailto:support@aprov.tech" className="text-sm hover:underline transition-colors duration-200 ease-in-out">support@aprov.tech</a>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" aria-label="Twitter" className="transition-all duration-200 ease-in-out hover:opacity-70 hover:scale-110">
                                <Twitter className="w-5 h-5 text-white" strokeWidth={2} />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="transition-all duration-200 ease-in-out hover:opacity-70 hover:scale-110">
                                <Linkedin className="w-5 h-5 text-white" strokeWidth={2} />
                            </a>
                            <a href="#" aria-label="Email" className="transition-all duration-200 ease-in-out hover:opacity-70 hover:scale-110">
                                <Mail className="w-5 h-5 text-white" strokeWidth={2} />
                            </a>
                        </div>
                    </div>
                    <div className="max-w-screen-xl mx-auto py-4 px-4 text-center text-xs text-gray-400 border-t border-gray-700">
                        © {new Date().getFullYear()} Fibbonacci Labs LLC. Todos los derechos reservados.
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Layout; 